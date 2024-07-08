import React from 'react';
import Routes from '../config/routes';
import ExploreScreen from '../screens/ExploreScreen';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationHeader from './NavigationHeader';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <NavigationHeader />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.explore_screen} component={ExploreScreen} />
        <Stack.Screen
          name={Routes.repositories_screen}
          component={RepositoriesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
