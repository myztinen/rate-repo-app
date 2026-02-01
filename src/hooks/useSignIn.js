import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [authenticate, { data, error }] = useMutation(AUTHENTICATE);

  if (error) console.log(error);

  const signIn = async ({ username, password }) => {
    const result = await authenticate({
      variables: { credentials: { username, password } },
    });
    const accessToken = result?.data?.authenticate?.accessToken;
    if (accessToken) {
      await authStorage.setAccessToken(accessToken);
      await apolloClient.resetStore();
    }
    return result;
  };

  return { signIn, data };
};

export default useSignIn;
