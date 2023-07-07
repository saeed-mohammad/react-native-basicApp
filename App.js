import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} Name={'home page'} />}
        </Stack.Screen>

        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen name="Student" component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
