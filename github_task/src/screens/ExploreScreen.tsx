import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import useColors from '../config/colors';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RepoCard from '../components/RepoCard';

const ExploreScreen = () => {
  const colors = useColors();
  const styles = StyleSheet.create({
    screen: {
      paddingHorizontal: 20,
      flex: 1,
    },
    title: {
      fontSize: 25,
      color: colors.TextSecondary,
    },
    // Picker
    picker_container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.BackgroundLight,
      borderRadius: 10,
      paddingLeft: 15,
      width: 200,
      marginVertical: 20,
    },
    picker_lable: {
      fontSize: 18,
      color: colors.TextSecondary,
    },
    picker_icon: {
      backgroundColor: colors.BackgroundLight,
      paddingTop: 15,
      width: 40,
      height: 50,
    },
    // Repos Container
    repos_container: {
      flex: 1,
    },
    repo_custom_style: {
      marginBottom: 15,
    },
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingHorizontal: 10,
      color: colors.TextSecondary,
      paddingRight: 120,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      color: colors.TextSecondary,
      paddingRight: 120,
    },
  });

  const [selectedLength, setSelectedLength] = useState('Top 10');

  const handleValueChange = (itemValue: string) => {
    setSelectedLength(itemValue);
    console.log(itemValue);
  };
  const pickerIcon = () => (
    <AntDesign
      name="down"
      size={20}
      color={colors.TextSecondary}
      style={styles.picker_icon}
    />
  );

  return (
    <View style={styles.screen}>
      {/* Header */}
      <Text style={styles.title}>Explore popular</Text>
      {/* Picker */}
      <View style={styles.picker_container}>
        <Text style={styles.picker_lable}>View:</Text>
        <RNPickerSelect
          value={selectedLength}
          onValueChange={handleValueChange}
          items={[
            {label: 'Top 10', value: 'Top 10'},
            {label: 'Top 15', value: 'Top 15'},
            {label: 'Top 20', value: 'Top 20'},
            {label: 'Top 25', value: 'Top 25'},
          ]}
          style={pickerSelectStyles}
          Icon={pickerIcon}
        />
      </View>
      {/* Repos */}
      <View style={styles.repos_container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={item => <RepoCard style={styles.repo_custom_style} />}
          keyExtractor={item => item.toString()}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;
