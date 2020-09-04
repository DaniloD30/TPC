// import { SwalFire, finishjob } from '~/helper/utils';

// export const addInterceptors = http => {
//     // RESPONSE INTERCEPTORS
//     http.interceptors.response.use(
//         response => {
//             // TODO Do something with response data
//             const msg = response?.headers?.alerta;
//             if (msg) {
//                 finishjob({
//                     icon: msg, // response.headers.alerta,
//                     title: response?.headers?.texto, // response.headers.texto,
//                 });
//             }

//             return response;
//         },
//         error => {
//             // TODO Do something with response error
//             SwalFire({
//                 icon: 'error',
//                 title: 'Erro',
//                 text: 'Tente novamente!',
//             });
//         }
//     );

//     // REQUEST INTERCEPTORS
//     http.interceptors.request.use(
//         async config => {
//             return config;
//         },
//         error => {
//             // I cand handle a request with errors here

//             return Promise.reject(error);
//         }
//     );

//     return http;
// };
