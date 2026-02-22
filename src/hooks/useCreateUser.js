import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

    const submitCredentials = async ({ username, password }) => {
        const result = await createUser({
            variables: {
                user: {
                    username,
                    password
                },
            },
        });

        return result;
    };

    return { submitCredentials, data, loading, error };
};

export default useCreateUser;
