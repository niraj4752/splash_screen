import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './Splash';
import Login from './Login'

import Signup from './Signup';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Utility from './Utility';

const Stack = createNativeStackNavigator();

const App=()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"  >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login } />
        <Stack.Screen name="Signup" component={Signup } />
        <Stack.Screen name="Utility" component={Utility}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;