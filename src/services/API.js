import axios from "axios";

const API = () => {
  return axios.create({
    baseURL: 'https://apidatos.ree.es',
   });
};

export default API;
