import axios from "axios";
// import { addInterceptors } from './interceptors';

let instance = null;

const getInstance = () => {
  // console.log("url =>", window.env.URL_API)
  console.log("");
  if (!instance) {
    instance = axios.create({
      baseURL: "https://api.themoviedb.org/3/movie/",
    });

    // instance.interceptors.request.use(async config => {
    //     const token = getToken();
    //     if (token) {
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   });
  }

  // instance = addInterceptors(instance);

  return instance;
};

export default getInstance();
