import axios from "axios";
let url='https://dummyjson.com/products'
export const instance = axios.create({
    baseURL: url,
    headers: {'X-Custom-Header': 'foobar'}
  });