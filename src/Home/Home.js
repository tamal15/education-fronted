import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import BookGallery from './BookGallery/BookGallery';
import Choose from './Choose/Choose';
import Facility from './Facility/Facility';
import Features from './Features/Features';
import ScrollBar from './ScrollBar/ScrollBar';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';
import Visit from './Visit/Visit';

const Home = () => {
    return (
        <div style={{background:"#0E1621"}}>
            <Header></Header>
            <Banner></Banner>
            <Visit></Visit>
          <div className='container'>
         
            {/* <BookGallery></BookGallery> */}
            <Features></Features>
            <BookGallery></BookGallery>
            <Choose></Choose>
            <Facility></Facility>
            <TestimonialSlider></TestimonialSlider>
          </div>
            <Footer></Footer>
            <ScrollBar></ScrollBar>
            
        </div>
    );
};

export default Home;