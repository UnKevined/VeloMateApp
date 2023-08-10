import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventListScreen from '../screens/EventListScreen'; // Passe den Pfad an

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventList" component={EventListScreen} />
      {/* Weitere Bildschirme hinzufügen */}
    </Stack.Navigator>
  );
}

export default MainNavigator;
