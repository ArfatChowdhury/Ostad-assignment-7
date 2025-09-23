import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../Contex/UserContext'


const FavoriteScreen = () => {
    const { favorite, removeFav } = useContext(UserContext)
    return (
        <View style={styles.container}>
            <Text>FavoriteScreen</Text>
            { favorite.length === 0 ? (<Text style={styles.emptyText}>No favorites yet. Add some users from the Home tab!</Text>) : ( <FlatList
                data={favorite}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                        <TouchableOpacity onPress={()=>removeFav(item.id)}>
                            <Text>remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />)
            }
            
            
           
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})