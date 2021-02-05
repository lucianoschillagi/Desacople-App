// Imported Modules
import React, { Component } from 'react';
import Header from '../../../../components/header/header.component';
import Satisfaction_CoverSection from './satisfaction-cover.component';
import Satisfaction_ActorsSection from './satisfaction-actors.component';
import Satisfaction_LyricsSection from './satisfaction-lyrics.component';
import Satisfaction_AssociatedSection from './satisfaction-associated.component';
import Satisfaction_Highlighted from './satisfaction-highlighted.component';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';


// Imported Components
// import Header from '../../components/header/header.component';
// import CoverSection from '../../sections/cover/cover.component';
// import ActorsSection from '../../sections/actors/actors.component';
// import ListenSection from '../../sections/listen/listen-section.component';
// import LyricsSection from '../../sections/lyrics/lyrics.component';
// import AssociatedMaterialSection from '../../sections/associated-material/associated-material.component';
// import HighlightedSection from '../../sections/highlighted/highlighted.component';
// import BlackHoleSection from '../../sections/black-hole/black-hole.component';

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
				<Satisfaction_LyricsSection/>
				<Satisfaction_AssociatedSection/>
				<Satisfaction_Highlighted/>
				<BlackHoleSection/>
			</div>
		);
	}
}

export default Satisfaction_Page;
