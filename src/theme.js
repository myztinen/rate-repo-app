import Constants from 'expo-constants';

export const textTheme = {
  colors: {
    textPrimary: '#ffffff',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 14,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
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