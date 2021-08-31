module.exports = (content, maxLength) => {
  if (typeof content !== "string") return "Error";
  if (typeof maxLength !== Number) return "Error";
  if (content.length < 1) return "Error";
  console.log(content.length);
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
};
