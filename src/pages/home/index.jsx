import React from 'react';
import {Link} from "react-router-dom"
// import './home.css';
import styles from '../../assets/stylesheets/header.module.css';
import Header from '../../components/header/header';
import SearchSection from '../../components/search-section/search-section';
import PicturesSection from '../../components/pictures-section/pictures-section';

const Home = () => (
    <div>
        <Header></Header> 
        <SearchSection></SearchSection>
        <PicturesSection></PicturesSection>
    </div>
)

export default Home;

