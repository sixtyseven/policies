export const formatDate = (dateStr: string | undefined) => {
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", dateOptions as any);

  return dateStr
    ? dateTimeFormat.format(new Date(dateStr)).replace(/\s/g, "-").toUpperCase()
    : undefined;
};
