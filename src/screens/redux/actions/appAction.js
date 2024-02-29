import ActionTypes from "./actionTypes";

const getData = (payload) => {

  return {
    type: ActionTypes.GET_DATA,
    payload,
  };
};

export { getData };
