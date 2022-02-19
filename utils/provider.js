import React, {useContext, createContext, useState} from 'react';
import {themes} from './variables'

const initialStates = {
    personalityFilter: [],
    setPersonalityFilter:()=>{},

    hobbyFilter:"",
    setHobbyFilter:()=>{},

    genderFilter:"",
    setGenderFilter:()=>{},
    
    theme:"default",
    setTheme:()=>{},

}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [personalityFilter, setPersonalityFilter] = useState([]);
    const [hobbyFilter, setHobbyFilter] = useState(initialStates.hobbyFilter);
    const [genderFilter, setGenderFilter] = useState(initialStates.genderFilter);
    const [theme, setTheme] = useState(initialStates.theme);

    return <MyContext.Provider value = {{
        theme, setTheme, 
        personalityFilter, setPersonalityFilter, 
        hobbyFilter, setHobbyFilter, 
        genderFilter, setGenderFilter
    }}>
    
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
    return {personalityFilter, setPersonalityFilter};
}

export function useHobby() {
    const {hobbyFilter, setHobbyFilter} = useContext(MyContext);
    return {hobbyFilter, setHobbyFilter};
}

export function useGender() {
    const {genderFilter, setGenderFilter} = useContext(MyContext);
    return {genderFilter, setGenderFilter};
}
export function useTheme() {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}
