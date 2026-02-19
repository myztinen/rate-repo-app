import * as yup from 'yup';
import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { textTheme } from '../theme';
import useCreateReview from '../hooks/useCreateReview'
import { useNavigate } from 'react-router-native';


const styles = StyleSheet.create({

  inputField: {
    fontWeight: textTheme.fontWeights.normal,
    borderWidth: 1,
    padding: 3,
    color: textTheme.colors.textBlack,

  },
  inputInError: {
    borderColor: textTheme.colors.errorRed
  },
  containerColumn: {
    flex: 2,
    flexDirection: 'column',
    rowGap: 5,
    alignItems: 'stretch',
    padding: 10,
  },
  button: {
    width: '100%',
    backgroundColor: textTheme.backgrounds.blue,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: textTheme.colors.textPrimary,
    fontSize: textTheme.fontSizes.body,
    fontFamily: textTheme.fonts.main,
    fontWeight: textTheme.fontWeights.bold,
  }
});

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
    <View style={styles.containerColumn}>
      <TextInput
        style={[
          styles.inputField,
          formik.touched.ownerName && formik.errors.ownerName && styles.inputInError
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
          styles.inputField,
          formik.touched.repositoryName && formik.errors.repositoryName && styles.inputInError
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
          styles.inputField,
          formik.touched.rating && formik.errors.rating && styles.inputInError
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
          styles.inputField,
          formik.touched.text && formik.errors.text && styles.inputInError
        ]}
        placeholder="Review"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        onBlur={formik.handleBlur('text')}
        multiline
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
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