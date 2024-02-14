import Image from "next/image";
import GroupePinColor from "./GroupePinColor";
import { ParliamentMember } from "../types/parliament-member";

const MemberItem = ({ member }: { member: ParliamentMember }) => {
  const { slug, nom, emails, nom_circo, num_deptmt, groupe_sigle } = member;
  return (
    <div className="flex justify-between p-5 w-full">
      <div className="flex min-w-0 gap-x-4">
        <Image
          className="h-20 w-auto min-w-16 rounded-xl"
          src={`https://www.nosdeputes.fr/depute/photo/${slug}/250`}
          alt={`${nom}'s profile picture`}
          width={195}
          height={250}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{`${nom}`}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {emails?.[0]?.email}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {`${nom_circo} (${num_deptmt})`}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{groupe_sigle}</p>
        <GroupePinColor groupAcronym={groupe_sigle} />
      </div>
    </div>
  );
};

export default MemberItem;
