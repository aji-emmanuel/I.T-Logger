import { GET_LOGS, ADD_LOG, LOG_ERROR, SET_LOADING, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOG } from "../actions/types";

const initialState = {
    logs: [],
    current: null,
    loading: false,
    error: null
};


const logReducer = (state = initialState, action) => {
   switch(action.type){

        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOG:
            return{
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(
                    (log) => log.id === action.payload.id ? action.payload : log),
                loading: false
            };
        case DELETE_LOG:
            return{
                ...state,
                logs:  state.logs.filter(log => log.id !== action.payload),
                loading: false
            };
        case SEARCH_LOG:
            return {
                ...state,
                logs: action.payload
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case LOG_ERROR:
            console.error(action.payload)
            return{
                ...state,
                error: action.payload
            }


       case SET_LOADING:
           return{
               ...state,
               loading: true
           };
       default: return state;
   }
}

export default logReducer
