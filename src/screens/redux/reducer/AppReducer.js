import ActionTypes from "../actions/actionTypes";

let initialState = {
    Users: null
}
const AppReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ActionTypes.GET_DATA:
            state = { ...state, Users: action.payload };
            break;

        default:
            break;
    }
    return state;
};

export default AppReducer;
