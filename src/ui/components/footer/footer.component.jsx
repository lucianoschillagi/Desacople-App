import React, { Component } from 'react';
import { Container, Link, Text, Copyright} from './footer.styles';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {currentYear: new Date().getFullYear()};
   }
	
  render() {
    	return (
			<Container>
				<Link href="mailto:luko.web@gmail.com?Subject=desacople-my-feedback">
					<Text>envíanos feedback :)</Text>
				</Link>
				<Copyright>© { this.state.currentYear }  ~ D e s a c o p l e</Copyright>
			</Container>
      )
   }
}

export default Footer;
