import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import useColors from '../../config/colors';
import {GestureResponderEvent} from 'react-native';

interface IProps {
  title: string;
  lable: string;
  style?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const PickerButton = ({title, lable, style, onPress}: IProps) => {
  const colors = useColors();
  const styles = StyleSheet.create({
    // Picker
    picker_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.BackgroundLight,
      borderRadius: 10,
      padding: 15,
      width: 200,
      marginVertical: 20,
      overflow: 'hidden',
    },
    picker_lable: {
      fontSize: 18,
      color: colors.TextSecondary,
    },
    picker_icon: {},
    // Repos Container
    repos_container: {
      flex: 1,
    },
    repo_custom_style: {
      marginBottom: 15,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.picker_container, style]}>
        <Text style={styles.picker_lable}>{lable}:</Text>

        <Text>{title}</Text>
        <AntDesign
          name="down"
          size={20}
          color={colors.TextSecondary}
          style={styles.picker_icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PickerButton;
