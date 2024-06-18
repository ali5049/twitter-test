import React from 'react';
import {SafeAreaView} from 'react-native';
import {OFF_WHITE} from '../../constants/colors';
import {styles} from './SafeAreaWrapper.styles';

const SafeAreaWrapper = ({children, upperColor, bottomColor}) => {
  return (
    <>
      <SafeAreaView
        style={[
          styles.upperSafeArea,
          {backgroundColor: upperColor || OFF_WHITE},
        ]}
      />
      <SafeAreaView
        style={[
          styles.bottomSafeArea,
          {backgroundColor: bottomColor || OFF_WHITE},
        ]}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default SafeAreaWrapper;
