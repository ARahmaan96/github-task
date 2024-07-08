import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import useColors from '../config/colors';
import RepoCard from '../components/RepoCard';
import PickerButton from '../components/common/PickerButton';
import CountPicker from '../components/CountPicker';

const ExploreScreen = () => {
  const colors = useColors();

  const styles = StyleSheet.create({
    screen: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: colors.BackgroundPrimary,
    },
    title: {
      fontSize: 25,
      color: colors.TextSecondary,
    },
    // Picker
    count_picker: {
      width: 200,
    },
    // Repos Container
    repos_container: {
      flex: 1,
    },
    repo_custom_style: {
      marginBottom: 15,
    },
  });

  const [selectedLength, setSelectedLength] = useState('Top 10');
  const [isShowselectedLength, setIsShowSelectedLength] = useState(false);

  const handleValueChange = (
    itemValue: {label: string; value: string} | null,
  ) => {
    const value = itemValue?.label || selectedLength;
    setIsShowSelectedLength(s => !s);
    setSelectedLength(value);
  };
  return (
    <View style={styles.screen}>
      {/* Header */}
      <Text style={styles.title}>Explore popular</Text>
      {/* Picker */}

      <PickerButton
        style={styles.count_picker}
        lable="View"
        title={selectedLength}
        onPress={() => setIsShowSelectedLength(s => !s)}
      />
      {isShowselectedLength && <CountPicker onChange={handleValueChange} />}
      {/* Repos */}
      <View style={styles.repos_container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <RepoCard style={styles.repo_custom_style} />}
          keyExtractor={item => item.toString()}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;
