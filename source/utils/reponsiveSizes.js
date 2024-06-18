import {Dimensions, I18nManager, PixelRatio} from 'react-native';
const {isRTL} = I18nManager;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const dimensionPercentToDP = (valuePercent, dimensionValue) =>
  PixelRatio.roundToNearestPixel(
    (dimensionValue * Number(valuePercent.toFixed(5))) / 100,
  );

/**
 * Function to calcualte width percentage to DP
 * Default iphone 15 width is 375
 * Function takes width as number parameter
 */
const wp = width => {
  const widthPercent = (width / 375) * 100;
  return dimensionPercentToDP(widthPercent, SCREEN_WIDTH);
};

/**
 * Function to calcualte height percentage to DP
 * Default iphone 15 height is 813
 * Function takes height as number parameter
 */
const hp = height => {
  const heightPercent = (height / 813) * 100;
  return dimensionPercentToDP(heightPercent, SCREEN_HEIGHT);
};

/**
 * Function to calcualte the responsive font sizes
 * Function takes fontSize as number parameter
 */
const responsiveFontSize = fontSize => {
  if (!isRTL) {
    return PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale());
  }
  return (
    PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale()) - 2
  );
};

export {hp, responsiveFontSize, wp};
