import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInForm } from '../components/SignIn';

describe('SignInForm', () => {
  it('calls onSubmit succeed with correct parameters', async () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <SignInForm onSubmit={onSubmit} />,
    );

    fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign In'));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});
