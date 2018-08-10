import { CHANGE_SEARCH_FIELD } from "./constants";

//starting state and initial object
const initialState = {
    searchField : ''
}

//reducer function. default vals given to params incase no other input
export const searchRobots = ( state=initialState, action={} ) => {
    switch(action.type){    //action.type obj property in action.js
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField : action.payload} );  //params: (obj, state which us initialstate here, whatever we want to change in the obj here its searchfield property ehich has action.payload)
            //return {...state, searchField: action.payload} //another way to do above line
            default: 
                return state;
    }
}