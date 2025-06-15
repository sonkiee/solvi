export const maskEmail = (email: string) => {
  const [name, domain] = email.split("@");
  const maskedName =
    name.length > 3 ? name.slice(0, 3) + "***" : name[0] + "***";
  return `${maskedName}@${domain}`;
};
