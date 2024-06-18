import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../utils/reponsiveSizes';
import {BLACK} from '../../constants/colors';

export const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(14),
    color: BLACK,
  },
});
