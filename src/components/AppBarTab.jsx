import { StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.textTheme.colors.textPrimary,
    fontSize: theme.textTheme.fontSizes.body,
    fontFamily: theme.textTheme.fonts.main,
    fontWeight: theme.textTheme.fontWeights.bold,
    paddingRight: 3
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
});

const AppBarTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerRow} showsHorizontalScrollIndicator={false} horizontal>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.text}>Sign in</Text>
      </Link>
    </ScrollView>
  )
};

export default AppBarTab;