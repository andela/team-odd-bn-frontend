import '../../assets/css/socialLogin.scss';
import facebookIcon from '../../assets/images/facebook_32px.png';
import socialLoginButton from '../../components/socialLoginButton';

const { FACEBOOK_CALLBACK_URL } = process.env;

const Facebook = (props) => {
  const { buttonName } = props;
  return (
    socialLoginButton(FACEBOOK_CALLBACK_URL, facebookIcon, buttonName, buttonName)
  );
};

export default Facebook;
