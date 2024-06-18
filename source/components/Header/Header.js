import React from 'react';
import {Image, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ProfileImage} from '../../assets/images';
import {wp} from '../../utils/reponsiveSizes';
import {styles} from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profleImage} source={ProfileImage} />
      <Icon size={wp(25)} name="x-twitter" />
      <FeatherIcon size={wp(20)} name="settings" />
    </View>
  );
};

export default Header;
