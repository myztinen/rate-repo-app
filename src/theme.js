import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const textTheme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#586069',
    primary: '#0366d6',
    textBlack: '#000000',
    errorRed: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 14,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  backgrounds: {
    normal: '#ffffff',
    blue: '#0366d6',
  },
};

export const appBarTheme = {
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  colors: {
    backgroundColor: '#24292e',
  },
};


export default { textTheme, appBarTheme };