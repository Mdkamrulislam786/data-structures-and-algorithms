const str = "diamondFeedAmount";

const getFeedName = (str) => {
  const string = str.split(/(?=[A-Z])/);

  const newString = string.filter((item) => {
    if (
      item.toLowerCase() == "amount" ||
      item.toLowerCase() == "total" ||
      item.toLowerCase() == "count"
    ) {
      return false;
    }
    return true;
  });

  return newString.join(" ");
};

console.log(getFeedName(str));
