"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import MiniSearch from "minisearch";
import SearchBar from "./SearchBar";
import PageNavigation from "./PageNavigation";
import MemberItemsList from "./MemberItemsList";

import { ParliamentMember } from "../types/parliament-member";

const fieldsToSearch: string[] = ["nom", "prenom", "num_deptmt", "nom_circo"];
const fieldsToReturn: string[] = ["id"];

const Search = ({
  memberList,
}: {
  memberList: ParliamentMember[];
}): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");
  const [searchResultIDs, setSearchResultIDs] = useState<number[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [searchEngine, setSearchEngine] =
    useState<MiniSearch<ParliamentMember>>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the IDs of the search results at each input change
    const inputText = event.target.value;
    if (!searchEngine) return;
    const resultIDs: number[] = searchEngine
      .search(inputText, { combineWith: "AND" })
      .map((item) => item.id);
    setInputText(event.target.value);
    setSearchResultIDs(resultIDs);
    setSelectedPage(0);
  };

  const createSearchEngine = useCallback(() => {
    const engine = new MiniSearch<ParliamentMember>({
      fields: fieldsToSearch,
      storeFields: fieldsToReturn,
      searchOptions: {
        fuzzy: 0.2,
        prefix: true,
      },
    });
    engine.addAll(memberList);
    console.log("Search engine created and ready to be used");
    setSearchEngine(engine);
  }, [memberList]);

  useEffect(() => {
    if (memberList && memberList.length > 0 && !searchEngine) {
      createSearchEngine();
    }
  }, [memberList, searchEngine, createSearchEngine]);

  const filteredData = useMemo(() => {
    // If no input text, return the full member list
    // The user can see all members at initial load
    if (!searchEngine || inputText === "") {
      return memberList;
    }
    return memberList.filter((member) => searchResultIDs.includes(member.id));
  }, [memberList, inputText, searchEngine, searchResultIDs]);

  const displayedMembers = useMemo(() => {
    const startIndex = selectedPage * itemsPerPage;
    const endIndex = (selectedPage + 1) * itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, selectedPage, itemsPerPage]);

  // Check if no search results to display a message to the user
  const isNoSearchResults = useMemo(() => {
    return filteredData.length === 0;
  }, [filteredData.length]);

  // Activate search navigation UI when more filtered results than items per page
  const isNavigation = useMemo(() => {
    return filteredData.length > itemsPerPage;
  }, [filteredData.length, itemsPerPage]);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SearchBar inputText={inputText} setInputText={handleInputChange} />
      <MemberItemsList
        members={displayedMembers}
        isNoSearchResults={isNoSearchResults}
      />
      {isNavigation && (
        <PageNavigation
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          numItems={filteredData.length}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default Search;
