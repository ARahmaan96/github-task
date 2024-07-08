import React, {useState} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import useColors from '../config/colors';
import RepoCard from '../components/RepoCard';
import PickerButton from '../components/common/PickerButton';
import CountPicker from '../components/CountPicker';
import {useQuery} from '@tanstack/react-query';
import {fetchRepositories} from '../api/repository';

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

  // api
  const perPage = parseInt(selectedLength.split(' ')[1], 10);

  const {data, error, isLoading} = useQuery<Repository[], Error>({
    queryKey: ['repositories', perPage], // Pass an array as the query key
    queryFn: () => fetchRepositories({perPage}),
  });

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
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {!isLoading && !error && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <RepoCard style={styles.repo_custom_style} repo={item} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default ExploreScreen;
