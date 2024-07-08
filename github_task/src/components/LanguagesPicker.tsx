import React, {useState} from 'react';
import {
  Button,
  Modal,
  TextInput,
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import useColors from '../config/colors';

interface Language {
  name: string;
}

type SearchText = string | null;

interface ILanguagesPickerProps {
  onChange: (language: Language | null) => void;
}

const TOP_LANGUAGES: Language[] = [
  {name: 'Any'},
  {name: 'Python'},
  {name: 'JavaScript'},
  {name: 'Java'},
  {name: 'C++'},
  {name: 'C#'},
  {name: 'PHP'},
  {name: 'Go'},
  {name: 'Swift'},
  {name: 'Ruby'},
  {name: 'Kotlin'},
];

const LanguagesPicker = ({onChange}: ILanguagesPickerProps) => {
  const colors = useColors();
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.overlay,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 20,
      height: '80%',
      width: '80%',
      gap: 10,
    },
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    text_input: {
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.boderSecondary,
      paddingVertical: 7,
      paddingHorizontal: 15,
    },
  });

  const [searchText, setSearchText] = useState<SearchText>('');

  const filteredLanguages = searchText
    ? TOP_LANGUAGES.filter(lang =>
        lang.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : TOP_LANGUAGES;

  const renderLanguageItem = ({item}: {item: Language}) => {
    return <Button title={item.name} onPress={() => onChange(item)} />;
  };

  return (
    <Modal visible={true} animationType="fade" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          {/* header */}
          <View style={styles.header_container}>
            <Text>Select Language</Text>
            <AntDesignIcon
              name="closecircle"
              onPress={() => onChange(null)}
              size={25}
              color={colors.BackgroundSecondary}
            />
          </View>

          <TextInput
            value={searchText !== null ? searchText : ''}
            onChangeText={setSearchText}
            placeholder="Filter Languages"
            style={styles.text_input}
          />
          <FlatList
            data={filteredLanguages}
            renderItem={renderLanguageItem}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LanguagesPicker;
