import { ChangeEventHandler } from "react";

const SearchBar = ({
  inputText,
  setInputText,
}: {
  inputText: string;
  setInputText: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex items-center w-full max-w-sm p-5">
      <div className="relative w-full">
        <label htmlFor="member-search" className="sr-only">
          Search Members of Parliament
        </label>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="member-search"
          value={inputText}
          onChange={setInputText}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search members of Parliament..."
          aria-label="Search members of Parliament"
          required
        />
      </div>
    </div>
  );
};

export default SearchBar;
