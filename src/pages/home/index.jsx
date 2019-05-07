import React from 'react';
import {Link} from "react-router-dom"
// import './home.css';
import styles from '../../assets/stylesheets/header.module.css';

// import logo from './logo1.png'

const Home = () => (
    <div>

        <header className="header">
        <div className="top-menu">
        <img height="70px" src={logo}/>
        <ul>
            <li><Link to=''>ALL PRODUCTS</Link></li>
            <li><Link to='/about'>ABOUT US</Link></li>
            <li><Link to=''>LOG IN</Link></li>
            <li><Link to=''>SIGN UP</Link></li>
        </ul>
        </div>
        </header>
        
        <div className="main-container">
            <form action="" align="center">
                <h1>Quick Search for Your Perfect Product</h1>
                <h4>Innovate List Connect</h4>
                <input type="text" align="center" class="Rectangle_6"></input>
            </form>
        </div>
    </div>


 
  )

export default Home;

