import { StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from '@apollo/client';
import theme from '../theme';
import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';


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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });
  const isSigned = Boolean(data?.me);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };


  return (
    <ScrollView contentContainerStyle={styles.containerRow} showsHorizontalScrollIndicator={false} horizontal>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      {isSigned ? (
        <Link to="/">
          <Text style={styles.text} onPress={signOut}>Sign out</Text>
        </Link>
      ) : (
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
      )}
    </ScrollView>
  )
};

export default AppBarTab;
