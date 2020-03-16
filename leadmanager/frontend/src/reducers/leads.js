import { GET_LEADS } from "../actions/types.js";
import { bindActionCreators } from "redux";

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    default:
      return state;
  }
}
