import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const { data, loading, refetch, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeyword
    },

  });

  if (error) console.log(error);
  return { repositories: data ? data.repositories : undefined, loading, refetch };
};

export default useRepositories;


