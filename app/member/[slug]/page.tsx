import Image from "next/image";
import InfoLine from "./components/InfoLine";
import InfoTab from "./components/InfoTab";
import { formatMemberInfo, formatMultiInfo } from "./utils/format-member";
import { APIParliamentResponseMember } from "@/app/types/parliament-member";

const MemberPage = async ({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> => {
  const member = await getData(params.slug);
  const memberInfoItems = formatMemberInfo(member);
  const memberMultiInfoItems = formatMultiInfo(member);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="mx-auto max-w-2xl">
        <Image
          className="h-36 w-auto rounded-xl mx-auto"
          src={`https://www.nosdeputes.fr/depute/photo/${member.slug}/256`}
          alt={`${member.nom}'s profile picture`}
          width={64}
          height={80}
        />

        <div className="text-center mt-2">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
            {member.nom}
          </h3>
          <div className="text-xs mt-0 mb-2 text-slate-500 font-bold uppercase">
            {`${member.nom_circo} (${member.num_deptmt})`}
          </div>
        </div>
        <div>
          <div className="px-6 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Member Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal and professional details.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {memberInfoItems.map(({ title, value }, index: number) => (
                <InfoLine key={index} title={title} value={value}></InfoLine>
              ))}

              {memberMultiInfoItems.map((multiInfoItem, index) => {
                if (!multiInfoItem || multiInfoItem.values.length === 0) {
                  return;
                } else {
                  return (
                    <InfoTab
                      key={index}
                      title={multiInfoItem.title}
                      values={multiInfoItem.values}
                    />
                  );
                }
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const getData = async (slug: string) => {
  const res = await fetch(`https://www.nosdeputes.fr/${slug}/json`, {
    // data is cached server side for 24 hours.
    // This means that the data is only fetched once every 24 hours for all users requesting the page.
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const responseJson: APIParliamentResponseMember = await res.json();
  return responseJson.depute;
};

export default MemberPage;
