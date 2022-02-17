import React, {useContext, createContext, useState} from 'react';

const initialStates = {
    personalityFilter: "",
    setPersonalityFilter:()=>{},

    hobbyFilter:"",
    setHobbyFilter:()=>{},

    genderFilter:"",
    setGenderFilter:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [personalityFilter, setPersonalityFilter] = useState(initialStates.personalityFilter);
    const [hobbyFilter, setHobbyFilter] = useState(initialStates.hobbyFilter);
    const [genderFilter, setGenderFilter] = useState(initialStates.genderFilter);

    return <MyContext.Provider value = {{personalityFilter, setPersonalityFilter, hobbyFilter, setHobbyFilter, genderFilter, setGenderFilter}}>
        {children}
    </MyContext.Provider>
}

export function usePersonality() {
    const {personalityFilter, setPersonalityFilter} = useContext(MyContext);
    return useContext(MyContext);
}

export function useHobby() {
    const {hobbyFilter, setHobbyFilter} = useContext(MyContext);
    return useContext(MyContext);
}

export function useGender() {
    const {genderFilter, setGenderFilter} = useContext(MyContext);
    return useContext(MyContext);
}