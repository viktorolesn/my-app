import React from 'react';
import {Link} from "react-router-dom"
// import './home.css';
import styles from '../../assets/stylesheets/header.module.css';
import Header from '../../components/header/header';
import Search from '../../components/search-section/search-section';
import SearchSection from '../../components/search-section/search-section';

const Home = () => (
    <div>
        <Header></Header> 
        <SearchSection></SearchSection>
    </div>
)

export default Home;

