import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const UserProfile = ({ user,addToFavorite , isFavorite}) => {
  if (!user) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      {!!user.email && <Text style={styles.email}>{user.email}</Text>}
      {!!user.phone && <Text style={styles.phone}>{user.phone}</Text>}
      {!!user.website && <Text style={styles.website}>{user.website}</Text>}
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={[
          styles.favButton, 
          isFavorite ? styles.favoritedButton : styles.notFavoritedButton
        ]} 
        onPress={() => addToFavorite(user)}
      >
        <Ionicons 
          name={isFavorite ? "star" : "star-outline"} 
          size={16} 
          color={isFavorite ? "gold" : "white"} 
        />
        <Text style={styles.btnText}>
          {isFavorite ? "Added to Favorites" : "Add to Favorite"}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    name: {
      fontSize: 16,
      fontWeight: '700',
      color: '#111',
    },
    email: {
      marginTop: 6,
      color: '#333',
    },
    phone: {
      marginTop: 2,
      color: '#333',
    },
    website: {
      marginTop: 2,
      color: '#3366cc',
    },
    favButton:{
      paddingVertical:15,
      paddingHorizontal:20,
      backgroundColor: '#007AFF',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonContainer: {
      alignSelf: 'flex-end', 
      marginTop: 10,
    },
    btnText:{
      color:'white',
      fontSize:12,
      fontWeight:'bold'
    },
    notFavoritedButton: {
      backgroundColor: '#007AFF',
    },
    favoritedButton: {
      backgroundColor: '#34C759',
    },
})