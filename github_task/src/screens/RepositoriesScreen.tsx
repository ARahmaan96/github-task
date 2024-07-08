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

const RepositoriesScreen = () => {
  const colors = useColors();

  const [date, setDate] = useState<Date>(new Date());
  const [lang, setLang] = useState<string>('Any');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);

  const onDatePickerChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(s => !s);
    setDate(currentDate);
  };
  const onLangPickerChange = (language: {name: string} | null): void => {
    const currentLang = language?.name || lang;
    setShowLangPicker(s => !s);
    setLang(currentLang);
  };
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
          onPress={() => setShowDatePicker(s => !s)}
        />
      </View>
      {/* Date Picker */}
      {showDatePicker && (
        <RNDateTimePicker
          mode="date"
          value={date}
          display="default"
          accentColor="#fff"
          onChange={onDatePickerChange}
        />
      )}
      {/* Lang Picker */}
      {showLangPicker && <LanguagesPicker onChange={onLangPickerChange} />}

      {/* Repos Section */}
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

export default RepositoriesScreen;
