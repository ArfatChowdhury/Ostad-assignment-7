import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

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

    const addToFavorite = async (user) => {
        try {
            if (!favorite.find(fav => fav.id === user.id)) {
                Alert.alert('profile added')
                const updatedFavorites = [...favorite, user]
                setFavorite(updatedFavorites)
                await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites))
                Alert.alert('Profile Added', `${user.name} is added to the favorite list`)
            } else {
                Alert.alert('user already added')
            }

        } catch (err) {
            console.log(err);

        }
    }

    const removeFav =async(userId)=>{
        try{
            const updatedFav = favorite.filter(fav => fav.id !== userId)
            setFavorite(updatedFav)
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFav))
            Alert.alert('Removed', 'User removed from favorites!');
        }catch(err){
            console.log(err);
            
        }
    }

    useEffect(() => {
        const getFavData = async () => {
            try {
                const FavData = await AsyncStorage.getItem('favorites')
                if(FavData !== null){
                    setFavorite(JSON.parse(FavData))
                }
            }catch(err){
                console.log(err);
                
            }
        }
        getFavData()
    }, [])



    return (
        <UserContext.Provider value={{ allUsers, addToFavorite, favorite, removeFav }}>
            {children}
        </UserContext.Provider>
    );
};