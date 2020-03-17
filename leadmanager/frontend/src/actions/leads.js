import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage } from "./messages";
// Get Leads

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads")
    .then(res => {
      dispatch({ type: GET_LEADS, payload: res.data });
    })
    .catch(e => {
      console.log(e);
    });
};

//Delete Lead

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(e => {});
};

export const addLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({ type: ADD_LEAD, payload: res.data });
    })
    .catch(e => {
      const error = {
        msg: e.response.data,
        status: e.response.status
      };
      console.log(error);

      dispatch({
        type: GET_ERRORS,
        payload: error
      });
    });
};
