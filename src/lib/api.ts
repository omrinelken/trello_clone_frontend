//import axios, { InternalAxiosRequestConfig } from "axios";

//const api = axios.create({
  //baseURL:
    //process.env.NODE_ENV === "production" ? "/api" : "//localhost:3000/api",
//});

//api.interceptors.request.use(
  //(config: InternalAxiosRequestConfig) => {
    //let token = localStorage.getItem("jwt-taskify");
    // removing the first and last character of the token, which are quotes
    //if (token) token = token?.slice(1, -1);

    //if (token && config.headers) {
      //config.headers.Authorization = `Bearer ${token}`;
    //}

    //return config;
  //},
  //(error) => {
    //return Promise.reject(error);
  //}
//);

//export default api;//

const API_BASE_URL = 'https://api.yourtrelloclone.com';

export const fetchBoards = async () => {
  const response = await fetch(`${API_BASE_URL}/boards`);
  if (!response.ok) {
    throw new Error('Failed to fetch boards');
  }
  return response.json();
};

export const createBoard = async (title: string) => {
  const response = await fetch(`${API_BASE_URL}/boards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to create board');
  }
  return response.json();
};

// Add more API functions as needed
