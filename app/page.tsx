import Search from "./components/Search";
import type { APIParliamentResponse } from "./types/parliament-member";

const Home = async (): Promise<JSX.Element> => {
  const memberList = await getData();

  return <Search memberList={memberList} />;
}

async function getData() {
  const res = await fetch("https://www.nosdeputes.fr/deputes/json", {
    // data is cached server side for 24 hours.
    // This means that the data is only fetched once every 24 hours for all users requesting the page.
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  
  const responseJson: APIParliamentResponse = await res.json();
  console.log('responseJson', responseJson);
  const memberList = responseJson.deputes.map((member) => member.depute);
  return memberList;
}

export default Home;
