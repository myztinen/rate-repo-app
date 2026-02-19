import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [createReview, { data, loading, error }] = useMutation(CREATE_REVIEW);

    const submitReview = async ({ ownerName, repositoryName, rating, text }) => {
        const result = await createReview({
            variables: {
                review: {
                    ownerName,
                    repositoryName,
                    rating: Number(rating),
                    text,
                },
            },
        });

        return result;
    };

    return { submitReview, data, loading, error };
};

export default useCreateReview;
