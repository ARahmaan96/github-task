import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import useColors from '../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RepositoryIcon from '../assets/icons/RepositoryIcon';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

const RepoCard = ({style}: IProps) => {
  const colors = useColors();
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: colors.BackgroundLight,
      padding: 5,
      paddingHorizontal: 20,
      // Shadow for Android
      elevation: 7,
      // Shadow properties for iOS
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    title: {
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center',
    },
    title_name: {
      flex: 1,
      fontSize: 12,
      color: colors.TextSecondary,
    },
    star_container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    star_sub: {
      fontSize: 16,
      color: colors.TextSecondary,
    },
    star_count: {
      fontSize: 18,
      paddingHorizontal: 12,
      paddingVertical: 7,
      marginLeft: 10,
      backgroundColor: colors.BackgroundSecondary,
      borderRadius: 10,
      color: colors.TextPrimary,
    },
    // Name Section
    name_section: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    name_title: {
      fontSize: 20,
      color: colors.TextPrimary,
    },
    // Discription Container
    discription_container: {
      paddingVertical: 25,
      borderBottomWidth: 1,
      borderColor: colors.boderSecondary,
    },
    description_text: {
      letterSpacing: 1.2,
      fontSize: 16,
      color: colors.TextSecondary,
    },
    // Footer Section
    footer_section: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    footer_text: {
      color: colors.TextSecondary,
    },
  });

  return (
    <View style={[styles.container, style]}>
      {/* Title  */}
      <View style={styles.title}>
        <Text style={styles.title_name}>Trending Repository</Text>
        <View style={styles.star_container}>
          <Icon name="star-o" size={25} color={colors.icon} />
          <Text style={styles.star_sub}>Star</Text>
          <Text style={styles.star_count}>20K</Text>
        </View>
      </View>
      {/* Name */}
      <View style={styles.name_section}>
        <RepositoryIcon width={30} height={30} />
        <Text numberOfLines={1} style={styles.name_title}>
          FortAwesome / Font-Awesome
        </Text>
      </View>
      {/* Discription */}
      <View style={styles.discription_container}>
        <Text numberOfLines={2} style={styles.description_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s.
        </Text>
      </View>
      {/* Footer Section */}
      <View style={styles.footer_section}>
        <Text style={styles.footer_text}>Updated 12 hours ago</Text>
        <Text style={styles.footer_text}>CSS</Text>
      </View>
    </View>
  );
};

export default RepoCard;
