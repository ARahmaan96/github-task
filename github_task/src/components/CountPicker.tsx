// TODO: extract stand alone component 'Picker'
import React from 'react';
import {
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import useColors from '../config/colors';
import Separator from './common/Separator';

type CountItem = {
  label: string;
  value: string;
};

interface ICountPickerProps {
  onChange: (value: CountItem | null) => void;
}

const CountPicker: React.FC<ICountPickerProps> = ({onChange}) => {
  const colors = useColors();
  const renderCountItem = ({item}: {item: CountItem}) => (
    <TouchableOpacity onPress={() => onChange(item)}>
      <Text style={[styles.countItem]}>{item.label}</Text>
    </TouchableOpacity>
  );

  const items: CountItem[] = [
    {label: 'Top 10', value: '10'},
    {label: 'Top 15', value: '15'},
    {label: 'Top 20', value: '20'},
    {label: 'Top 25', value: '25'},
  ];

  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.overlayDark,
    },
    modalContent: {
      backgroundColor: colors.BackgroundLight,
      padding: 20,
      borderRadius: 20,
      height: '40%', // Adjust height as needed
      width: '80%',
    },
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    header_text: {
      color: colors.TextSecondary,
    },
    countItem: {
      fontSize: 16,
      color: colors.TextSecondary,
      paddingVertical: 12,
      paddingHorizontal: 15,
    },
  });

  return (
    <>
      <Modal visible={true} animationType="fade" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.header_container}>
              <Text style={styles.header_text}>Select Count</Text>
              <AntDesignIcon
                name="closecircle"
                onPress={() => onChange(null)}
                size={25}
                color={colors.boderSecondary}
              />
            </View>
            <FlatList
              data={items}
              renderItem={renderCountItem}
              keyExtractor={item => item.value}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CountPicker;
