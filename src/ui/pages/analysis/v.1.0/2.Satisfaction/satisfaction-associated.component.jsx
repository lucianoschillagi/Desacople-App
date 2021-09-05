import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';

import Satisfaction_AssociatedItem from './satisfaction-associated-item.component';

class Satisfaction_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<Satisfaction_AssociatedItem 
						title="Satisfaction by Devo - Official Video"
						subtitle="Devo covers 'Satisfaction'"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=jadvt7CbH1o"/>
											
					<Satisfaction_AssociatedItem
						title="Satisfaction by Devo - Live "
						subtitle="Live at TV Show"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=04pbtf5t_LU"/>

					<Satisfaction_AssociatedItem
						title="The Rolling Stones - (I Can't Get No) Satisfaction"
						subtitle="Live- Ireland 1965"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<Satisfaction_AssociatedItem
						title="Devo, The Making of Satisfaction"
						subtitle="Mark Mothersbaugh about Satisfaction"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=cx-QeWWFiUc"/>
						
				</ContainerCentered>
			</Container>
		);
   }
}

export default Satisfaction_AssociatedSection;