import {Dimensions} from 'react-native';
import {hsv2rgb} from 'react-native-redash/lib/typescript/v1';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#434343', // black01
  secondary: '#CDCDD2', // gray

  // colors
  blueUp: '#2E499C',
  blueDown: '#00C7CC',
  white: '#FFFFFF',
  black: '#1E1F20',

  colorSwitch: '#0000004D',
  //Main Color
  mainColor01: '#2E499C',
  mainColor02: '#00C7CC',

  //Linear Gradient
  colorLinearGradient1: '#2E499C',
  colorLinearGradient2: '#00C7CC',

  //Dải màu
  daiMau01: '#7B61FF',
  daiMau02: '#FF7B82',
  daiMau03: '#FFF5D9',

  daiMau04: '#7B61FF',
  daiMau05: '#DDD6FF',
  daiMau06: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 12,
  radius: 30,
  padding: 16,
  padding2: 20,

  // font sizes
  fontsize1: 21,
  fontsize2: 18,
  fontsize3: 16,
  fontsize4: 14,
  fontsize5: 12,
  // app dimensions
  width,
  height,
  shadownss: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

export const FONTS = {
  h1: {
    fontFamily: 'SVN-Gilroy',
    fontSize: SIZES.fontsize1,
    lineHeight: 20,
  },
  h2: {
    fontFamily: 'SVN-Gilroy',
    fontSize: SIZES.fontsize2,
    lineHeight: 18.9,
  },
  h3: {
    fontFamily: 'SVN-Gilroy',
    fontSize: SIZES.fontsize3,
    lineHeight: 16.8,
  },
  h4: {
    fontFamily: 'SVN-Gilroy',
    fontSize: SIZES.fontsize4,
    lineHeight: 14.7,
  },
  h5: {
    fontFamily: 'SVN-Gilroy',
    fontSize: SIZES.fontsize5,
    lineHeight: 12.6,
  },
};
const AppThemes = {SIZES, COLORS, FONTS};
export default AppThemes;
