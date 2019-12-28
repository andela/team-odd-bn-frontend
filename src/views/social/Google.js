import '../../assets/css/socialLogin.scss';
import googleIcon from '../../assets/images/google_32px.png';
import socialLoginButton from '../../components/socialLoginButton';

const { GOOGLE_CALLBACK_URL } = process.env;

const Google = (props) => {
  const { buttonName } = props;
  return (
    socialLoginButton(GOOGLE_CALLBACK_URL, googleIcon, buttonName, buttonName)
  );
};

export default Google;
