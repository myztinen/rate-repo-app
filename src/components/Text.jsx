import { Text as NativeText, StyleSheet } from 'react-native';

import { textTheme } from '../theme';

const styles = StyleSheet.create({
  text: {
    color: textTheme.colors.textPrimary,
    fontSize: textTheme.fontSizes.body,
    fontFamily: textTheme.fonts.main,
    fontWeight: textTheme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: textTheme.colors.textSecondary,
  },
  colorPrimary: {
    color: textTheme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: textTheme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: textTheme.fontWeights.bold,
  },
  inputField: {
    fontWeight: textTheme.fontWeights.bold,
    borderWidth: 1,
    padding: 10,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;