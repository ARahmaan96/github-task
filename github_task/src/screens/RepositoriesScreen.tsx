import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import useColors from '../config/colors';
import RepoCard from '../components/RepoCard';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import formatDate from '../utils/date';
import LanguagesPicker from '../components/LanguagesPicker';
import PickerButton from '../components/common/PickerButton';
import {useQuery} from '@tanstack/react-query';
import {fetchRepositories} from '../api/repository';

const RepositoriesScreen = () => {
  const colors = useColors();

  const [date, setDate] = useState<Date>(new Date());
  const [lang, setLang] = useState<string>('Any');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 20,
      gap: 10,
      backgroundColor: colors.BackgroundPrimary,
    },
    title: {
      fontSize: 25,
      color: colors.TextSecondary,
    },
    // pickers Section
    pickers_container: {
      flexDirection: 'row',
      gap: 10,
    },
    lang_picker: {
      width: 190,
    },
    date_picker: {
      width: 170,
    },
    // Repos Container
    repos_container: {
      flex: 1,
    },
    repo_custom_style: {
      marginBottom: 15,
    },
  });

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleLangChange = (language: {name: string} | null) => {
    const currentLang = language?.name || 'Any';
    setShowLangPicker(false);
    setLang(currentLang);
  };

  // API Call
  const perPage = 10; // Adjust as needed
  const formattedDate = formatDate(date); // Format date as needed for API call

  const {data, error, isLoading} = useQuery<Repository[], Error>({
    queryKey: ['repositories', perPage, lang, formattedDate],
    staleTime: 60000,
    queryFn: () =>
      fetchRepositories({perPage, language: lang, date: formattedDate}),
  });

  return (
    <View style={styles.screen}>
      {/* Header */}
      <Text style={styles.title}>Repositories</Text>

      {/* Pickers Section */}
      <View style={styles.pickers_container}>
        <PickerButton
          style={styles.lang_picker}
          lable={'Language'}
          title={lang}
          onPress={() => setShowLangPicker(true)}
        />
        <PickerButton
          style={styles.date_picker}
          lable="Date"
          title={formatDate(date)}
          onPress={() => setShowDatePicker(true)}
        />
      </View>

      {/* Date Picker */}
      {showDatePicker && (
        <RNDateTimePicker
          mode="date"
          value={date}
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Lang Picker */}
      {showLangPicker && <LanguagesPicker onChange={handleLangChange} />}

      {/* Repos Section */}
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

export default RepositoriesScreen;
