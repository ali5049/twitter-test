import {StyleSheet} from 'react-native';
import {hp, responsiveFontSize, wp} from '../../utils/reponsiveSizes';
import {LIGHT_GREY, RED} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: LIGHT_GREY,
    paddingHorizontal: wp(15),
    paddingVertical: hp(10),
    flexDirection: 'row',
  },
  avatar: {
    width: wp(35),
    height: hp(35),
    borderRadius: hp(20),
    marginRight: hp(10),
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: '700',
    width: wp(235),
  },
  company: {
    color: '#808080',
    fontWeight: '500',
  },
  content: {
    width: wp(300),
    marginTop: hp(5),
    marginBottom: hp(10),
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(20),
  },
  liked: {
    color: RED,
  },
  count: {
    fontSize: responsiveFontSize(12),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
