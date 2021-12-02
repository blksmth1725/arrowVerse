export const isEmpty = (obj) => {
  return !Object.keys(obj).length;
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
