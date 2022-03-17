import React, {useContext, createContext, useState} from 'react';
import {themes} from './variables'

const initialStates = {
    filterSettings: [],
    setFilterSettings: ()=>{},

    personalityFilter: [],
    setPersonalityFilter:()=>{},

    hobbyFilter:[],
    setHobbyFilter:()=>{},

    genderFilter:[],
    setGenderFilter:()=>{},
    
    theme:"default",
    setTheme:()=>{},

    wishlist: {},
    setWishlist: ()=>{},

    user: null,
    setUser: ()=>{},

}

const MyContext = createContext(initialStates);

export default function AppProvider({children}) {

    const [filterSettings, setFilterSettings] = useState([]);
    const [theme, setTheme] = useState(initialStates.theme);
    const [wishlist, setWishlist] = useState({});
    const [user, setUser] = useState();

    const [personalityFilter, setPersonalityFilter] = useState([]);
    const [hobbyFilter, setHobbyFilter] = useState([]);
    const [genderFilter, setGenderFilter] = useState([]);

    return <MyContext.Provider value = {{
        theme, setTheme, 
        filterSettings, setFilterSettings,
        wishlist, setWishlist,
        user, setUser,
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

export function useFilters() {
    const {filterSettings, setFilterSettings} = useContext(MyContext);
    return {filterSettings, setFilterSettings};
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

export function useWishlist() {
    const {wishlist, setWishlist} = useContext(MyContext);
    return {wishlist, setWishlist}
}

export function useUser() {
    const {user, setUser} = useContext(MyContext);
    return {user, setUser}
}