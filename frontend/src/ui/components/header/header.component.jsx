import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, 
         ProductName,
         ProductContainer,
         LogoContainer,
         Logo } from './header.styles.js';
import logo from '../../../assets/desacople-logo.png';

class Header extends Component {

	// Header props:
	// handleSelect (function)

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleSelect(e)
	}

  render() {
		return (
		<div>
			<Container id="cover">

				<LogoContainer>
					<Link to={{
						pathname: "/",
						data: "song_001" }}>
						<Logo
								src={logo}
								alt="logo-desacople"
						/>
					</Link> 
				</LogoContainer>
				
				<ProductContainer>
					<ProductName>   
					desacople
					</ProductName>
				</ProductContainer>

			</Container> 
		</div>
		);
   }
}

export default Header



