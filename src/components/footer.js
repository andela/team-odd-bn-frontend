import React, { Component } from 'react';
import '../assets/css/footer.scss';
// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  render() {
    return (
      <footer data_testid="footer" className={ this.props.className || 'defaultFooter'}>
        <a className="footer-link" href="/">©2019 Barefoot Nomad</a>
      </footer>
    );
  }
}
export default Footer;
