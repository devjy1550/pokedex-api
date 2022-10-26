import axios from "axios";

const config = {
  baseUrl: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
};

function fetchAllApi() {
  return axios.get("${config.baseUrl}");
}

function fetchDetailInfo(index) {
  return axios.get(`${config.baseUrl}/count/${index}`);
}

export { fetchAllApi, fetchDetailInfo };
