import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Routes from '../config/routes';
import useColors from '../config/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const NavigationHeader = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(
    Routes.explore_screen,
  );

  const navigation = useNavigation();

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    navigation.dispatch(StackActions.replace(route));
  };

  const colors = useColors();

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      paddingHorizontal: 20,
    },
    // Header Container
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    // Logo Container
    logo_container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
    },
    logo_text: {
      fontSize: 35,
      color: colors.TextPrimary,
      fontFamily: '',
    },
    // Navigation Bar
    navigation_bar: {
      flexDirection: 'row',
      gap: 20,
      marginTop: 20,
      marginBottom: 10,
    },
    navigation_item: {
      fontSize: 17,
      color: colors.TextSecondary,
      paddingBottom: 10,
    },
    navigation_item_active: {
      color: colors.TextPrimary,
      borderBottomColor: colors.TextPrimary,
      borderBottomWidth: 1,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_container}>
        {/* Logo */}
        <View style={styles.logo_container}>
          <Image
            style={styles.logo}
            source={require('../assets/icons/logo.png')}
          />
          <Text style={styles.logo_text}>milango</Text>
        </View>
        {/* Setting Icon */}
        <AntDesignIcon name="setting" size={35} />
      </View>
      {/* Navigation Bar */}
      <View style={styles.navigation_bar}>
        <Text
          style={[
            styles.navigation_item,
            currentRoute === Routes.explore_screen
              ? styles.navigation_item_active
              : null,
          ]}
          onPress={() => handleNavigate(Routes.explore_screen)}>
          Explore Screen
        </Text>
        <Text
          style={[
            styles.navigation_item,
            currentRoute === Routes.repositories_screen
              ? styles.navigation_item_active
              : null,
          ]}
          onPress={() => handleNavigate(Routes.repositories_screen)}>
          Repositories Screen
        </Text>
      </View>
    </View>
  );
};

export default NavigationHeader;
