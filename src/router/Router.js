//React and React Native
import React from 'react';

//3th party
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//pages
import {MapScreen, SettingsPage, Splash} from '../pages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsPage}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Notifications"
          component={null}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
