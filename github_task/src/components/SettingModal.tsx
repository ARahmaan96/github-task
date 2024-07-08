import React, {useState} from 'react';
import {Modal, View, Text, StyleSheet, Switch} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import useColors from '../config/colors';
import useColorModeStore from '../store/colors';

interface IProps {
  close: () => void;
}
const SettingModal = ({close}: IProps) => {
  const colors = useColors();
  const colorModeStore = useColorModeStore();
  const [colorsSwitch, setColorsSwitch] = useState(
    colorModeStore.mode === 'dark',
  );
  const switchColorMode = () => {
    colorModeStore.setMode(colorsSwitch ? 'light' : 'dark');
    setColorsSwitch(!colorsSwitch);
  };
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
      height: '40%',
      width: '80%',
      gap: 10,
    },
    // header
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    header_text: {
      color: colors.TextSecondary,
      fontSize: 18,
    },
    colorsSwitchContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    colorsSwitch_text: {
      color: colors.TextSecondary,
      fontSize: 16,
    },
  });

  return (
    <Modal visible={true} animationType="fade" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          {/* header */}
          <View style={styles.header_container}>
            <Text style={styles.header_text}>Settings</Text>
            <AntDesignIcon
              name="closecircle"
              onPress={close}
              size={25}
              color={colors.boderSecondary}
            />
          </View>
          <View style={styles.colorsSwitchContainer}>
            <Text style={styles.colorsSwitch_text}>Dark</Text>
            <Switch value={colorsSwitch} onChange={switchColorMode} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;
