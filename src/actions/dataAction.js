import { DATA } from "../helpers/enums/Constants";
import getData from "../services/service";

export const getAll = (id, LOADING_IDENTIFICATOR = "") => (dispatch) => {
  getData
    .getData(id)
    .then((response) => {
      dispatch({
        type: DATA.GET_ALL,
        payload: response.data,
      });
    })
    .catch((response) => {
      let obj = {
        original_title: "Filme não encontrado",
        overview: "Filme não encontrado",
      };
      dispatch({
        type: DATA.GET_ALL,
        payload: obj,
      });
    })
    .finally((response) => {});
};

export default {
  getAll,
};
