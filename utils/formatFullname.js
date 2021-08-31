module.exports = (fullName) => {
  if (typeof fullName === undefined) return "Error";
  if (!fullName.includes(" ")) return "Error";
  if (typeof fullName !== "string") return "Error";
  const namesArr = fullName.toLowerCase().split(" ");
  console.log(namesArr);
  if (namesArr[2] != undefined) return "Error";
  const [firstName, lastName] = namesArr;
  if (!firstName || !lastName) return "Error";
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    " " +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
