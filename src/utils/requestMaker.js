import axios from "axios";

const url = "https://valorant-api.com/v1";

const requestMaker = async (method, url, data) => {
  const response = await axios({
    method,
    url,
    data,
  });
  return response.data;
};

export const getAgents = async () => {
  const { data } = await requestMaker("GET", `${url}/agents`);
  return data;
};
