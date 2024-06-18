import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/reponsiveSizes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(10),
    marginHorizontal: hp(15),
  },
  profleImage: {
    width: wp(35),
    height: hp(35),
    borderRadius: hp(25),
  },
});
