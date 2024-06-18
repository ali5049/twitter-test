import React from 'react';
import {Text} from 'react-native';
import {styles} from './P.styles';

const P = ({children, customStyles}) => {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
};

export default P;
