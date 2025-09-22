import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setAllUsers(Array.isArray(data) ? data : []);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllUsers();
    }, []);

    const addToFavorite = (user) => {
        const updateFavorite = [...favorite, user]
        setFavorite(updateFavorite)
    }

    return (
        <UserContext.Provider value={{ allUsers, addToFavorite, favorite }}>
            {children}
        </UserContext.Provider>
    );
};