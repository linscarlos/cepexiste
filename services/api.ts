import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.postmon.com.br/v1/cep/',
})