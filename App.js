import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { UserContext, UserProvider } from './Contex/UserContext';
import FavoriteScreen from './Screens/FavoriteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color,size}) => {
          let iconName; 
          if(route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline';
          }else if (route.name === 'Favorites'){
            iconName = focused ? 'heart' : 'heart-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerStyle:{
          backgroundColor:'#007AFF'
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
      }) }
      >
        <Tab.Screen name='Home' component={HomeScreen} 
        options={{title:'All Users'}}/>
        <Tab.Screen name='Favorites' component={FavoriteScreen}
        options={{title:'Favorite Users'}} />
      </Tab.Navigator>
        
      </NavigationContainer>
    </UserProvider>
  );
}


