import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';


const useSingleRepository = (id) => {
  console.log(id);
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });
  console.log(data);

  if (error) console.log(error);
  return { repository: data?.repository, loading };
};

export default useSingleRepository;