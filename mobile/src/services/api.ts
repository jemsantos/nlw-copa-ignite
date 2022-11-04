import axios from "axios";

export const api = axios.create({
  // coloque o ip local da maquina pois no android não funciona o localhost
  baseURL: "http://192.168.1.3:3333",
});
