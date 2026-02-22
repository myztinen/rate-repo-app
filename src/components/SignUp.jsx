import * as yup from 'yup';
import Text from './Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import { textTheme } from '../theme';
import useCreateUser from '../hooks/useCreateUser'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native';
import { formStyles } from './repositoryStyles';

const initialValues = {
  username: '',
  password: '',
  passwordAgain: '',

};
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must be longer than 1 character')
    .required('Username is required'),
  password: yup
    .string()
    .min(2, 'Password must be longer than 1 character')
    .required('Password is required'),
  passwordAgain: yup
    .string()
    .min(2, 'Password must be longer than 1 character')
    .oneOf([yup.ref('password')], 'Passwords must be identical')
    .required('Password is required'),
});

export const SignUpForm = ({ onSubmit }) => {
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
          formik.touched.username && formik.errors.username && formStyles.inputInError
        ]}
        placeholder="Username"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.password && formik.errors.password && formStyles.inputInError
        ]}
        placeholder="Password"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <TextInput
        style={[
          formStyles.inputField,
          formik.touched.passwordAgain && formik.errors.passwordAgain && formStyles.inputInError
        ]}
        placeholder="Password confirmation"
        placeholderTextColor={textTheme.colors.textSecondary}
        value={formik.values.passwordAgain}
        onChangeText={formik.handleChange('passwordAgain')}
        onBlur={formik.handleBlur('passwordAgain')}
        secureTextEntry
      />
      {formik.touched.passwordAgain && formik.errors.passwordAgain && (
        <Text style={{ color: 'red' }}>{formik.errors.passwordAgain}</Text>
      )}
      <Pressable style={formStyles.button} onPress={formik.handleSubmit}>
        <Text style={formStyles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const { submitCredentials } = useCreateUser();
  const { signIn } = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;

    try {
      await submitCredentials({ username, password });
      await signIn({ username, password });

      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;