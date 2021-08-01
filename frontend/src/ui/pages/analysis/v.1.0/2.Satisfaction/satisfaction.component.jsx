import React, { Component } from 'react';
import Header from '../../../../components/header/header.component';
import Satisfaction_CoverSection from './satisfaction-cover.component';
import Satisfaction_ActorsSection from './satisfaction-actors.component';
import Satisfaction_ListenSection from './satisfaction-listen.component';
import Satisfaction_LyricsSection from './satisfaction-lyrics.component';
import Satisfaction_AssociatedSection from './satisfaction-associated.component';
import Satisfaction_Highlighted from './satisfaction-highlighted.component';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';

// Imported Styles
// import { Container } from './analysis.styles';
// import { StyledSpinner } from '../../../utils/spinner';

class Satisfaction_Page extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Satisfaction_CoverSection/>
				<Satisfaction_ActorsSection/>
				{/* <Satisfaction_ListenSection/> */}
				<Satisfaction_LyricsSection/>
				{/* <Satisfaction_AssociatedSection/>
				<Satisfaction_Highlighted/>
				<BlackHoleSection/> */}
			</div>
		);
	}
}

export default Satisfaction_Page;
