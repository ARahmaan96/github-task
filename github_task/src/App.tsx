import 'react-native-gesture-handler';

import React from 'react';

import {StyleSheet} from 'react-native';
import Screen from './components/common/Screen';

import useColors from './config/colors';
import MainNavigation from './navigation/MainNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  // TODO: Load Colors From LocalStorage
  const colors = useColors();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BackgroundPrimary,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Screen style={styles.container}>
        <MainNavigation />
      </Screen>
    </QueryClientProvider>
  );
};

export default App;
