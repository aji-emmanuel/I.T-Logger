import {
    GET_LOGS,
    ADD_LOG,
    SET_LOADING,
    LOG_ERROR,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_LOG
} from './types';

// Gets the logs
export const getLogs = () => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({ type: GET_LOGS, payload: data});
       
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data});
    };
};

// Adds a new log
export const addLog = (log) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: "POST",
            body: JSON.stringify(log),
            headers: { "Content-Type": "application/json"}
        });
        const data = await res.json();
        dispatch({ type: ADD_LOG, payload: data});
       
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data});
    };
};

// Updates a log
export const updateLog = (log) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {'Content-Type' : 'application/json'}
        });
        const data = await res.json();
        dispatch({type: UPDATE_LOG, payload: data});
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data})
    };
};

// Deletes a log
export const deleteLog = (id) => async dispatch =>{
    try {
        setLoading();
        await fetch(`/logs/${id}`, {method: 'DELETE'});
        dispatch({ type: DELETE_LOG, payload: id});
       
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data});
    };
};

// Search logs from server
export const searchLogs = (text) => async dispatch =>{

    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        dispatch({ type: SEARCH_LOG, payload: data});
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data});
    };
};

// Set Current
export const setCurrent = (log) => dispatch =>{
    dispatch({ type: SET_CURRENT, payload: log});
};

// Clear Current
export const clearCurrent = () => dispatch =>{
    dispatch({type: CLEAR_CURRENT});
}


export const setLoading = () =>{
    return {
        type: SET_LOADING
    };
};