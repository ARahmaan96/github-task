import React, {ReactNode} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface IProps {
  children: ReactNode[] | ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen = ({children, style}: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.screen, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
