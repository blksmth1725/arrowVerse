import { api } from "./instance";
import { ARROW_SHOW_ID } from "./constants";

export const fetchShow = async () => {
  const { data } = await api
    .get(`/shows/${ARROW_SHOW_ID}`)
    .catch((err) => console.log(err));

  return data;
};

export const fetchCast = async () => {
  const { data } = await api
    .get(`/shows/${ARROW_SHOW_ID}/cast`)
    .catch((err) => console.log(err));

  return data;
};

export const fetchEpisodes = async () => {
  const { data } = await api
    .get(`/shows/${ARROW_SHOW_ID}/episodes`)
    .catch((err) => console.log(err));

  return data;
};
