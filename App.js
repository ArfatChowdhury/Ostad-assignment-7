import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { UserContext, UserProvider } from './Contex/UserContext';
import FavoriteScreen from './Screens/FavoriteScreen';

export default function App() {
  return (
    <UserProvider>
      <HomeScreen />
      <FavoriteScreen />
    </UserProvider>
  );
}


