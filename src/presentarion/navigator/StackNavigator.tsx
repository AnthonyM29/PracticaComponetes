import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Animaton101Screen from '../screens/animation/Animaton101Screen';
import Animation102Screen from '../screens/animation/Animation102Screen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animaton101Screen" component={Animaton101Screen} />
      <Stack.Screen name="Animaton102Screen" component={Animation102Screen} />
    </Stack.Navigator>
  );
}
