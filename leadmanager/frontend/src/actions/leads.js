import axios from "axios";
import { GET_LEADS, DELETE_LEAD } from "./types";

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
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch(e => {
      console.log(e);
    });
};