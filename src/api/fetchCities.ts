import axios from "axios";

export const fetchCities = async (query: string) => {
  const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
    apiKey: "",
    modelName: "Address",
    calledMethod: "getCities",
    methodProperties: {
      FindByString: query,
    },
  });
  return response.data.data; 
};