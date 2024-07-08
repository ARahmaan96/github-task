import React from 'react';
import {StyleSheet, View} from 'react-native';
import useColors from '../../config/colors';

const Separator = () => {
  const colors = useColors();
  const styles = StyleSheet.create({
    separator: {
      borderColor: colors.boderSecondary,
      borderTopWidth: 1,
    },
  });
  return <View style={styles.separator} />;
};

export default Separator;
