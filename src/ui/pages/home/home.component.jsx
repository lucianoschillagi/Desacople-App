import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import MarketingText from '../../components/marketing-text/marketing-text.component';
import AvailableSongs from '../../components/available-songs/available-songs.component';
import Footer from '../../components/footer/footer.component';
import { Container } from './home.styles';

class HomePage extends Component {
  
   componentDidMount() {
      window.scrollTo(0, 0);
   } 

   render() {
      return (
         <Container>
				<Header/>
				<MarketingText/>
				<AvailableSongs/>
				<Footer/>
         </Container>
      )
   }
}

export default HomePage;
