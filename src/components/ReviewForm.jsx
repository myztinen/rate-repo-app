import * as yup from 'yup';
import Text from './Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import { textTheme } from '../theme';
import useCreateReview from '../hooks/useCreateReview'
import { useNavigate } from 'react-router-native';
import { formStyles } from './repositoryStyles';


const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};
const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is mandatory'),
  repositoryName: yup
    .string()
    .required('Repository name is mandatory'),
  rating: yup
    .number()
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be maximum 100')
    .required('Rating is required'),
  text: yup
    .string()
    .min(2, 'Password must be longer than 1 character')
});

export const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <View style={formStyles.containerColumn}>
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.ownerName && formik.errors.ownerName && formStyles.inputInError
        ]}
        placeholder="Repository owner name"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.repositoryName && formik.errors.repositoryName && formStyles.inputInError
        ]}
        placeholder="Repository name"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.rating && formik.errors.rating && formStyles.inputInError
        ]}
        placeholder="Rating between 0 and 100"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.text && formik.errors.text && formStyles.inputInError
        ]}
        placeholder="Review"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        onBlur={formik.handleBlur('text')}
        multiline
      />
      <Pressable style={formStyles.button} onPress={formik.handleSubmit}>
        <Text style={formStyles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const { submitReview } = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await submitReview({ ownerName, repositoryName, rating, text });
      navigate(`/repository/${data.createReview.repositoryId}`, { replace: true });
    } catch (e) {
      console.log(e);
    }
  };
  return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;