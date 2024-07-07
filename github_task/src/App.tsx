import React from 'react';

import {StyleSheet} from 'react-native';
import Screen from './components/common/Screen';

import useColors from './config/colors';
import ExploreScreen from './screens/ExploreScreen';

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
    <Screen style={styles.container}>
      <ExploreScreen />
    </Screen>
  );
};

export default App;
