import { ParliamentMember } from "../types/parliament-member";
import MemberItem from "./MemberItem";
import Link from "next/link";

const MembersList = ({
  members,
  isNoSearchResults,
}: {
  members: ParliamentMember[];
  isNoSearchResults: boolean;
}): JSX.Element => {
  return (
    <ul role="list" className="divide-y divide-gray-100 w-full max-w-md">
      {isNoSearchResults && (
        <li className="p-5 text-center text-gray-500 dark:text-gray-400">
          No results found
        </li>
      )}
      {members && members.length > 0 && members.map((member) => (
        <li key={member.slug}>
          <Link href={`/member/${member.slug}`}>
            <MemberItem member={member} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MembersList;
