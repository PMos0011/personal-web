import * as actions from './action';
import polish from './polish';
import english from './english';

const initialstate = {
    isEnglish: false,
    language: {}
}


const reducer = (state = initialstate, action) => {
    if (action.type === actions.CHANGE_LANGUAGE)
        state.isEnglish = !state.isEnglish;
    state.isEnglish ? state.language = english : state.language = polish;

    return { ...state };
};


export default reducer;