import {
  ParliamentMember,
  GroupAndDutyDetail,
} from "@/app/types/parliament-member";
import { formatDate, getAgeFromBirthDate } from "./date";

export const formatMemberInfo = (
  member: ParliamentMember
): { title: string; value: string }[] => {
  return [
    {
      title: "Name",
      value: member.nom,
    },
    {
      title: "Date of birth",
      value: `${formatDate(member.date_naissance)} (${getAgeFromBirthDate(
        member.date_naissance
      )} years old)`,
    },
    {
      title: "Place of birth",
      value: member.lieu_naissance,
    },
    {
      title: "Constituency",
      value: `${member.nom_circo} (${member.num_deptmt}) - No. ${member.num_circo}`,
    },
    {
      title: "Start date of mandate",
      value: `${formatDate(member.mandat_debut)}`,
    },
    {
      title: "End date of mandate",
      value: "In mandate",
    },
    {
      title: "Parliamentary group",
      value: `${member.groupe.organisme} (${member.groupe_sigle}) - ${
        member.groupe.fonction
      } since ${formatDate(member.groupe.debut_fonction)}`,
    },
    {
      title: "Seat in the hemicycle",
      value: `No. ${member.place_en_hemicycle}`,
    },
    {
      title: "Profession",
      value: member.profession,
    },
  ];
};

export const formatMultiInfo = (
  member: ParliamentMember
): { title: string; values: { responsabilite: GroupAndDutyDetail }[] }[] => {
  return [
    {
      title: "Duties",
      values: member.responsabilites,
    },
    {
      title: "Extra-parliamentary duties",
      values: member.responsabilites_extra_parlementaires,
    },
    {
      title: "Parliamentary groups",
      values: member.groupes_parlementaires,
    },
  ];
};
