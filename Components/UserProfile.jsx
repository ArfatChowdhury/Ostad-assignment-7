import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UserProfile = ({ user,addToFavorite }) => {
  if (!user) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      {!!user.email && <Text style={styles.email}>{user.email}</Text>}
      {!!user.phone && <Text style={styles.phone}>{user.phone}</Text>}
      {!!user.website && <Text style={styles.website}>{user.website}</Text>}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.favButton} onPress={()=>addToFavorite(user)}>
      <Text style={styles.btnText}>Add to favorite</Text>
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
    }
})