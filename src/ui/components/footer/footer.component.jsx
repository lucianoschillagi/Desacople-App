import React, { Component } from 'react';
import ProductUserFeedback from './product-user-feedback.component';
import ProductCopyright from './product-copyright.component';
import { Container } from './footer.styles';

class Footer extends Component {
	
  render() {
    	return (
			<Container>
				<ProductUserFeedback/>
				<ProductCopyright/>
			</Container>
      )
   }
}

export default Footer;
