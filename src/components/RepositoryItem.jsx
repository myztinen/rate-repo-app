import { View, StyleSheet } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 5
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
    borderRadius: 5

  },
  descriptionText: {
    color: theme.textTheme.colors.textSecondary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.normal,
  },
  header: {
    fontSize: theme.textTheme.fontSizes.subheading,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.bold,
  },
  badge: {
    backgroundColor: "#1519f4ff",
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
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    //width: '20%',

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
});

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryHeader item={item} styles={styles} />
      <RepositoryStats item={item} styles={styles} />
    </View>
  );
};

export default RepositoryItem;