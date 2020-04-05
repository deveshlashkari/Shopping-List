import axios from "axios";

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(data => {
    dispatch({
      type: GET_ITEMS,
      payload: data.data
    });
  });
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(data => {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  });
};

export const addItem = item => dispatch => {
  dispatch(setItemsLoading());
  axios.post("/api/items", item).then(data => {
    dispatch({
      type: ADD_ITEM,
      payload: data.data
    });
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
