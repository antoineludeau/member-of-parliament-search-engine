export interface APIParliamentResponse {
  deputes: APIParliamentResponseMember[];
}

export interface APIParliamentResponseMember {
  depute: ParliamentMember;
}

export interface ParliamentMember {
  id: number;
  slug: string;
  nom: string;
  prenom: string;
  sexe: string;
  date_naissance: string;
  lieu_naissance: string;
  num_circo: number;
  nom_circo: string;
  mandat_debut: string;
  mandat_fin: string;
  etat: string;
  groupe_sigle: string;
  groupe_nuance: string;
  url_nosdeputes: string;
  url_an: string;
  url_sycomore: string;
  emails: MemberEmail[];
  num_deptmt: number;
  twitter: string;
  profession: string;
  place_en_hemicycle: string;
  url_nu_depute: string;
  groupe: GroupAndDutyDetail;
  responsabilites: MemberDutiesObj[];
  responsabilites_extra_parlementaires: MemberExtraParliamentarianDutiesObj[];
  groupes_parlementaires: MemberParliamentarianGroupObj[];
}

interface MemberEmail {
  email: string;
}

export interface GroupAndDutyDetail {
  organisme: string;
  fonction: string;
  debut_fonction: string;
}

interface MemberDutiesObj {
  responsabilite: GroupAndDutyDetail;
}

interface MemberExtraParliamentarianDutiesObj {
  responsabilite: GroupAndDutyDetail;
}

interface MemberParliamentarianGroupObj {
  responsabilite: GroupAndDutyDetail;
}
