import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  containerColumn: {
    flex: 2,
    flexDirection: 'column',
    rowGap: 5,
    alignItems: 'flex-start',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  ratingStyle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: theme.textTheme.colors.primary,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: theme.textTheme.fontSizes.body,
    fontWeight: theme.textTheme.fontWeights.bold,
    color: theme.textTheme.colors.primary,
  },
  descriptionText: {
    color: theme.textTheme.colors.textSecondary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.normal,
  },
  reviewText: {
    color: theme.textTheme.colors.textBlack,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.normal,
  },
  header: {
    fontSize: theme.textTheme.fontSizes.subheading,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.bold,
    color: theme.textTheme.colors.textBlack,
  },
  badge: {
    backgroundColor: theme.textTheme.colors.primary,
    marginLeft: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },
  badgeText: {
    color: theme.textTheme.colors.textPrimary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.normal,
  },
  buttonText: {
    color: theme.textTheme.colors.textPrimary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.bold,
    textAlign: 'center'
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  statColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    rowGap: 2,
  },
  statText: {
    color: theme.textTheme.colors.textPrimary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.normal,
  },
  list: {
    padding: 10,
    backgroundColor: theme.textTheme.backgrounds.grey,
  },
  pickerStyle: {
    backgroundColor: theme.textTheme.backgrounds.normal,
    borderRadius: 6,
    marginBottom: 10,
    overflow: 'hidden',
    borderColor: theme.textTheme.colors.textBlack,
    borderWidth: 1
  },
  searchStyle: {
    height: 10,
    backgroundColor: theme.textTheme.backgrounds.normal,
    borderRadius: 6,
    marginBottom: 10,
    overflow: 'hidden',
    borderColor: theme.textTheme.colors.textBlack,
    borderWidth: 1
  },
});

export const formStyles = StyleSheet.create({

  inputField: {
    fontWeight: theme.textTheme.fontWeights.normal,
    borderWidth: 1,
    padding: 3,
    color: theme.textTheme.colors.textBlack,

  },
  inputInError: {
    borderColor: theme.textTheme.colors.errorRed
  },
  containerColumn: {
    flex: 2,
    flexDirection: 'column',
    rowGap: 5,
    alignItems: 'stretch',
    padding: 10,
  },
  button: {
    width: '100%',
    backgroundColor: theme.textTheme.backgrounds.blue,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.textTheme.colors.textPrimary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.bold,
  }
});

export default styles;
