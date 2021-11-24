import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECH_ERROR } from './types'

// Adds a new tech
export const addTech = (tech) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: { 'Content-Type' : 'application/json'}
        });
        const data = await res.json();
        dispatch({ type: ADD_TECH, payload: data});
        
    } catch (error) {
        dispatch({type: TECH_ERROR, payload: error.response.data});
    }
};

// Gets all techs
export const getTechs = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({ type: GET_TECHS, payload: data});

    } catch (error) {
        dispatch({ type: TECH_ERROR, payload: error.response.data});
    };
};

// Deletes a tech
export const deleteTech = (id) => async dispatch =>{
   
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });
        dispatch({ type: DELETE_TECH, payload: id});

    } catch (error) {
        dispatch({type: TECH_ERROR, payload: error.response.data});
    }
}

export const setLoading = () => dispatch =>{
    dispatch({type: SET_LOADING});
}
