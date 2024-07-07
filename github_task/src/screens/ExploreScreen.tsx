import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import useColors from '../config/colors';
import RNPickerSelect from 'react-native-picker-select';

const ExploreScreen = () => {
  const colors = useColors();
  const styles = StyleSheet.create({
    screen: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 25,
    },
  });
  const [selectedLength, setSelectedLength] = useState<string>('Top 10');
  const handleValueChange = (value: string) => {
    setSelectedLength(value);
    // Additional logic can be added here based on the selected value
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Explore popular</Text>
      {/* <RNPickerSelect
        value={selectedLength}
        onValueChange={handleValueChange}
        items={[
          {label: 'Top 10', value: 'Top 10'},
          {label: 'Top 15', value: 'Top 15'},
          {label: 'Top 20', value: 'Top 20'},
          {label: 'Top 25', value: 'Top 25'},
        ]}
        // style={pickerSelectStyles}
      /> */}
    </View>
  );
};

export default ExploreScreen;
