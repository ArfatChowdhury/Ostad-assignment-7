import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../Contex/UserContext'
import UserProfile from '../Components/UserProfile'

const HomeScreen = () => {
  const { allUsers, addToFavorite, favorite } = useContext(UserContext) || {}

  return (
    <View style={styles.container}>
      <FlatList
        data={allUsers }
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <UserProfile user={item} 
           addToFavorite={addToFavorite}
           isFavorite={Boolean(favorite?.some((fav) => fav.id === item.id))} />
        )}
        
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      paddingTop:'10%'
    },
  });