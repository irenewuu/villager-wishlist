import React, {useContext, createContext, useState} from 'react';

const initialStates = {
    personalityFilter: '',
    setPersonalityFilter:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [personalityFilter, setPersonalityFilter] = useState(initialStates.personalityFilter);

    return <MyContext.Provider value = {{searchFilter, setSearchFilter, personalityFilter, setPersonalityFilter}}>
        {children}
    </MyContext.Provider>
}

export function usePersonality() {
    const {personalityFilter, setPersonalityFilter} = useContext(MyContext);
    return useContext(MyContext);
}