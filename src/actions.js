//IMPORT CONSTANTS FROM constants.js
import { CHANGE_SEARCH_FIELD } from './constants.js';

//create an action
export const setSearchField = (text) => ({
    //return an object
    type: CHANGE_SEARCH_FIELD,             //const is capitalized in js
    payload : text                           //payload in Redux means sending whatever data is needed

})

