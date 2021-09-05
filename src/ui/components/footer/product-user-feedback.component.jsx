import React from 'react';
import { Link, Text } from './footer.styles';

class ProductUserFeedback extends React.Component {

  render() {
    	return (
			<Link href="mailto:luko.web@gmail.com?Subject=desacople-my-feedback">
				<Text>envíanos feedback :)</Text>
			</Link>  
      )
   }
}

export default ProductUserFeedback;