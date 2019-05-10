import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/header.module.css';
import Header from '../../components/header/header';
import SearchSection from '../../components/search-section/search-section';
import PicturesSection from '../../components/pictures-section/pictures-section';
import SliderSection from '../../components/slider-section/slider-section';
import BottomSection from '../../components/bottom-section/bottom-section';
import Footer from '../../components/footer/footer';

const Home = () => (
    <div>
        <Header/> 
        <SearchSection/>
        <PicturesSection/>
        <SliderSection/>
        <BottomSection/>
        <Footer/>
    </div>
)

export default Home;

