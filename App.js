import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}


