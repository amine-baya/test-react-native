import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from './screens/Result';

const Stack = createNativeStackNavigator()


export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Group>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Result' component={Result} />
        </Stack.Group>
    </Stack.Navigator >
  )
}