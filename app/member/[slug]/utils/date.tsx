export const formatDate = (date: string | undefined) => {
  if (!date) {
    return;
  }
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};

export const getAgeFromBirthDate = (birthDate: string) => {
  const date = new Date(birthDate);
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
