import React from 'react';
import {Text} from 'react-native';
import {styles} from './P.styles';

const P = ({children, customStyles, numLines}) => {
  return (
    <Text style={[styles.text, customStyles]} numberOfLines={numLines}>
      {children}
    </Text>
  );
};

export default P;
