import * as actions from './action';

const polish = {
    sayHello: "Cześć!",
    iAm: "Nazywam się Paweł Moskwa",
    _1Para: "Jestem początkującym full-stack developerem. Swoją przyszłość zawodową wiążę z językiem Java oraz biblioteką React.",
    _2Para:"Ukończyłem studia na Uniwersytecie Zielonogórskim na kierunku automatyka i robotyka. Zawodowo związany byłem z sektorem wojskowym, jednak programowanie i technologie informatyczne zawsze były moją pasją. W wolnym czasie majsterkowałem przy mikrokontrolerach i tworzyłem proste aplikacje w językach C++ czy C#. Obecnie pochłania mnie poznawanie technologii związanych z REST-API.",
    techno:"Technologie z którymi pracuję:"
};

const english = {
    sayHello: "Hey there!",
    iAm: "I am Paweł Moskwa",
    _1Para:"I'm a junior full-stack developer. I associate my professional future with the Java language and the React library.",
    _2Para:"I graduated from the University of Zielona Góra - Automation and Robotics. Professionally I've been associated with the military sector, but programming and information technology have always been my passion. In my spare time I was tinkering with microcontrollers and creating simple applications in C++ or C#. Currently, I'm deep in learn about technologies related to REST-API.",
    techno:"Technologies I work with:"
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