import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import LogInScreen from './Screens/LogInScreen';
import RegistrScreen from './Screens/RegistrScreen';
import firebase from './config';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    useEffect(() => {
      const subsriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subsriber;
    }, []);

    if (initializing) return null;
  }
  if (!user) {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen options={{ headerShown: false, headerBackVisible: false }} name='LogInScreen' component={LogInScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='RegistrScreen' component={RegistrScreen} />
        </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>

    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}