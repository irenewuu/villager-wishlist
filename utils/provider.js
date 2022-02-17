import React, {useContext, createContext, useState} from 'react';
import {themes} from './variables'

const initialStates = {
    personalityFilter: '',
    setPersonalityFilter:()=>{},
    theme:"default",
    setTheme:()=>{},

}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [personalityFilter, setPersonalityFilter] = useState(initialStates.personalityFilter);

    const [theme, setTheme] = useState(initialStates.theme);

    return <MyContext.Provider value = {{ personalityFilter, setPersonalityFilter, theme, setTheme}}>
        <style jsx global>
            {`
                body{
                    background-color:${themes[theme].body};
                }
                color{
                    background-color:${themes[theme].color};
                }

            `}
        </style>        
        {children}
    </MyContext.Provider>
}

export function usePersonality() {
    const {personalityFilter, setPersonalityFilter} = useContext(MyContext);
    return useContext(MyContext);
}

export function useTheme() {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}
