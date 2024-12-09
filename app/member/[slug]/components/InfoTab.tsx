import { formatDate } from "../utils/date";

const InfoTab = ({ title, values }: { title: string; values: any[] | undefined }) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
      <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <ul
          role="list"
          className="divide-y divide-gray-100 rounded-md border border-gray-200"
        >
          {values?.map((item: any, index: number) => (
            <li key={index} className="py-4 pl-4 pr-5 text-sm leading-6">
              <span>{`${item.responsabilite?.organisme} (en tant que ${
                item.responsabilite?.fonction
              } depuis le ${formatDate(
                item.responsabilite?.debut_fonction
              )})`}</span>
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
};

export default InfoTab;
