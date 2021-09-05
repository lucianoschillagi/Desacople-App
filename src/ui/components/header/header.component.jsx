import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, 
         ProductName,
         ProductContainer,
         LogoContainer,
         Logo as ProductLogo } from './header.styles.js';
import logo from '../../../assets/desacople-logo.png';

class Header extends Component {
	
  render() {
		return (
				<Container id="cover">

					{/* LOGO */}
					<LogoContainer>
						<Link to={{
							pathname: "/",
							data: "song_001" }}>
							<ProductLogo 	
								src={logo}
								alt="logo-desacople"
							/>
						</Link> 
					</LogoContainer>
					
					{/* PRODUCT NAME */}
					<ProductContainer>
						<ProductName>   
							desacople
						</ProductName>
					</ProductContainer>

				</Container> 
			
		);
   }
}

export default Header;



