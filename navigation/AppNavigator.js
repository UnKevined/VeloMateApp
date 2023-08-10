import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator/AuthNavigator'; // Passe den Pfad an
import MainNavigator from './MainNavigator/MainNavigator'; // Passe den Pfad an

function AppNavigator() {
  const userIsAuthenticated = true; // Hier solltest du die Authentifizierung überprüfen

  return (
    <NavigationContainer>
      {userIsAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
