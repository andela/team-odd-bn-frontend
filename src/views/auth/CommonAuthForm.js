import React from 'react';
import '../../assets/css/signup.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ICON from '../../assets/images/icon-combined.png';
import Facebook from '../social/Facebook';
import Google from '../social/Google';

const CommonAuthForm = ({
  submit,
  data,
  extraInfoData,
  socialData,
  introNote,
  components,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      submit(data);
    }}
  >
    <div className="authContainer">
      <div className="signupBox">
        <div className="barefootIcon">
          <img alt="icon" src={ICON} />
        </div>
        <div key="introNote" className="introNote">
          <div>{introNote}</div>
        </div>
        {components.map((i) => i)}
        <div key="authFormextraInfo" className="authFormextraInfo">
          <div>
            <div>
              {extraInfoData.displayText1}
              &nbsp; &nbsp;
              <Link to={extraInfoData.link1}>{extraInfoData.displayText2}</Link>
            </div>
            <div>
              <Link to={extraInfoData.link2}>{extraInfoData.displayText3}</Link>
            </div>
          </div>
          <div>
            <hr className="orLine" />
            or
            <hr className="orLine" />
          </div>
        </div>
        {[
          <Google buttonName={socialData.displayGoogleText} />,
          <Facebook buttonName={socialData.displayFacebookText} />,
        ].map((i, index) => (
          <div key={index}>
            <div>
              <div className="socialBtn">{i}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </form>
);
CommonAuthForm.propTypes = {
  submit: propTypes.func,
  components: propTypes.array,
  data: propTypes.object,
};
CommonAuthForm.defaultProps = {
  submit: null,
  components: null,
  data: null,
};
export default CommonAuthForm;
