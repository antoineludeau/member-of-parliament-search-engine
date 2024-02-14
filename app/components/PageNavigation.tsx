const SearchNavigation = ({
  selectedPage,
  setSelectedPage,
  numItems,
  itemsPerPage,
}: {
  selectedPage: number;
  setSelectedPage: (page: number) => void;
  numItems: number;
  itemsPerPage: number;
}): JSX.Element => {
  const totalPages = Math.ceil(numItems / itemsPerPage);

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm p-5">
        <li>
          <button
            onClick={() => setSelectedPage(selectedPage - 1)}
            disabled={selectedPage === 0}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-disabled={selectedPage === 0 ? "true" : "false"}
            aria-label="Previous page"
          >
            Previous
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedPage(selectedPage + 1)}
            disabled={selectedPage === totalPages - 1}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-disabled={selectedPage === totalPages - 1 ? "true" : "false"}
            aria-label="Next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SearchNavigation;
