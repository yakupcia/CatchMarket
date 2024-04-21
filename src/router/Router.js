//React and React Native
import React, {useRef} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

//3th party
import ActionSheet from 'react-native-actions-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//pages
import {MapScreen, Notifications, SettingsPage, Splash} from '../pages';

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
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
