import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';


const useSingleRepositoryReviews = (id) => {
  console.log(id);
  const { data, loading, error } = useQuery(GET_REVIEWS, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });
  console.log(data);

  if (error) console.log(error);
  return { reviews: data?.repository, isLoading: loading };
};

export default useSingleRepositoryReviews;