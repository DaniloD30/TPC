import http from "../config/httpRequest/http";
export const getData = (id) => {
  // ?pagina=1&itensPorPagina=10 Recurso
  return new Promise((resolve, reject) => {
    http
      .get(`${id}?api_key=14f734753a43438433041d1385cd7019`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default {
  getData,
};
