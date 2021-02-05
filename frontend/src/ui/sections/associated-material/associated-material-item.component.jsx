import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, 
			Title, 
			Description, 
			Source } from './associated-material-item.styles';


class AssociatedMaterialItem extends Component {

	render() {
   	return (
			<Container>
				<LinkTo to={this.props.externalPage} target="_blank">
					<Title>{this.props.title}</Title>
					<Description>{this.props.subtitle}</Description>
					<Source>{this.props.source}</Source>
				</LinkTo>
			</Container>
    )
  }
}

export default AssociatedMaterialItem

const LinkTo = styled(Link)`
text-decoration: none;
color: white;
`