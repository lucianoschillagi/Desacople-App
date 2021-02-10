import React, { Component } from 'react'
import { Container, Link, Text, Copyright} from './footer.styles'

class Footer extends Component {
	
  render() {
    return (
      <Container>
					<Link href="mailto:luko.web@gmail.com?Subject=desacople-my-feedback">
						<Text>send feedback!</Text>
					</Link>
					<Copyright>© 2 0 2 1  ~ D e s a c o p l e</Copyright>
      </Container>
    )
  }
}

export default Footer
