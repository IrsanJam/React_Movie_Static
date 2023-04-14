import axios from "axios";

const baseUrl = `https://api.themoviedb.org/3/`;
const apiKey = `f150276c4e0b2101017c933bd6f025ce`;

//
const dapatkanDaftarFilm = async () => {
  const film = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return film.data.results;
};

const cariFilm = async (para) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${para}&api_key=${apiKey}`);
  return search.data;
};

export { dapatkanDaftarFilm, cariFilm };
// https://api.themoviedb.org/3/movie/550?api_key=f150276c4e0b2101017c933bd6f025ce
