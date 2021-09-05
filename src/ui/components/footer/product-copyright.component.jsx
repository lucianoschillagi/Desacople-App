import React from 'react';
import { Copyright } from './footer.styles';

class ProductCopyright extends React.Component {

   constructor(props) {
      super(props);
      this.state = {currentYear: new Date().getFullYear()};
   }

  render() {
    	return (
         <Copyright>© { this.state.currentYear }  ~ D e s a c o p l e</Copyright> 
      )
   }
}

export default ProductCopyright;