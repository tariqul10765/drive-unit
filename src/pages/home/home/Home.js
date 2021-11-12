import React from 'react';
import Footer from '../../shared/footer/Footer';
import Banner from '../banner/Banner';
import NewCars from '../new-cars/NewCars';
import Products from '../products/Products';
import Reviews from '../reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewCars></NewCars>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;