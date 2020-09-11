import * as actions from './action';

const polish = {
    sayHello: "Cześć!",
    iAm: "Nazywam się Paweł Moskwa"
};

const english = {
    sayHello: "Hey there!",
    iAm: "I am Paweł Moskwa"
}

const initialstate = {
    isEnglish: false,
    language: {}
}


const reducer = (state = initialstate, action) => {
    if (action.type === actions.CHANGE_LANGUAGE)
        state.isEnglish = !state.isEnglish;
    state.isEnglish ? state.language=english : state.language=polish;

    return {...state};
};


export default reducer;