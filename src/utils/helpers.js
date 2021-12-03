export const isEmpty = (obj) => {
  return !Object.keys(obj).length;
};

export const objToArr = (obj) => {
  return Object.keys(obj);
};

export const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};

export const getPeopleFromCast = (cast) => {
  return [
    ...new Map(
      cast.map((castMember) => [
        castMember.person.id,
        castMember.person,
      ])
    ).values(),
  ];
};

export const getCharactersFromCast = (cast) => {
  return cast.map((castMember) => ({
    actorID: castMember.person.id,
    ...castMember.character,
  }));
};

export const getPersonsCharacters = ({ id, characters }) =>
  characters.filter((character) => character.actorID === id);

export const flattenJSON = (
  obj = {},
  accumulator = {},
  parentKey = ""
) => {
  for (var key in obj) {
    const currentValue = obj[key];
    const newKey = parentKey + key;
    if (typeof currentValue !== "object") {
      accumulator[newKey] = currentValue;
    } else {
      const nextParentKey = `${newKey}.`;
      flattenJSON(obj[key], accumulator, nextParentKey);
    }
  }

  return accumulator;
};

export const getCSVHeaderData = (obj) => {
  const keys = Object.keys(obj);

  return keys.map((key) => {
    const label = key.split(".").join(" ").toUpperCase();

    return {
      label,
      key,
    };
  });
};
