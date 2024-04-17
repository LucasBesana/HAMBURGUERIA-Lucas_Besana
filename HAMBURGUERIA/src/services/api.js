import axios from "axios";

const burguerApi = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 10 * 1000
});

export { burguerApi };