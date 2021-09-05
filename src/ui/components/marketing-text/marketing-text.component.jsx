import React from 'react';
import { Container, 
         ContainerCentered,
         Title,
         Subtitle
        } from './marketing-text.styles';
 
class MarketingText extends React.Component {

  render() {
      return (
         <Container>
           <ContainerCentered>
            	<Title>
               	¿De qué están hechas las buenas canciones?
            	</Title>
            	<Subtitle>
               	Explora el engranaje de una canción
            	</Subtitle>
            </ContainerCentered> 
         </Container> 
      )
   }
}

export default MarketingText;
