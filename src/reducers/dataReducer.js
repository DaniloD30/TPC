import {DATA} from '../helpers/enums/Constants'

const INITIAL_STATE = {
  dataArr: [{}],
};

export default function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA.GET_ALL:
      console.log("chamou")
      return {
        ...state,
        dataArr: action?.payload
      };
    default:
      return state;
  }
}
