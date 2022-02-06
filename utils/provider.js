import {useContext, createContext, useState} from 'react';

const initialStates = {
    searchFilter: "",
    setSearchFilter:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {
    const [searchFilter, setSearchFilter] = useState(initialStates.searchFilter);

    return <MyContext.Provider value = {{searchFilter, setSearchFilter}}>
        {children}
    </MyContext.Provider>
}

export function useSearchFilter() {
    const {searchFIlter, setSearchFilter} = useContext(MyContext);
    return useContext(MyContext);
}