import React, {useContext, createContext, useState} from 'react';

const initialStates = {
    personalityFilter:'',
    setPersonalityFilter:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [personalityFilter, setPersonalityFilter] = useState(initialStates.personalityFilter);

    // searchFilter, setSearchFilter,
    return <MyContext.Provider value = {{personalityFilter, setPersonalityFilter}}>
        {children}
    </MyContext.Provider>
}

export function usePersonality() {
    const {personalityFilter, setPersonalityFilter} = useContext(MyContext);
    return {personalityFilter, setPersonalityFilter};
    // return useContext(MyContext);
}