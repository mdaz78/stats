export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/").map((n) => parseInt(n));

  return new Date(year, month - 1, day);
};
