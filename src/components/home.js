import React from 'react';
import {Link} from "react-router-dom"
import './home.css';
import logo from './logo1.png'

const Home = () => (
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
    <div className="main-container">
    <h1 align="center">Quick Search for Your Perfect Product</h1>
    <h4 align="center">Innovate List Connect</h4>
    <form action="">
    <input type="text"  ></input>
    </form>
    </div>


    </header>
  )

export default Home;

