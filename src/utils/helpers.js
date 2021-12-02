export const isEmpty = (obj) => {
  return !Object.keys(obj).length;
};

export const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};
