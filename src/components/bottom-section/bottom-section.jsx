import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/bottom-section.module.css';
import logo from '../../assets/png/logoBottom.png'

export default class BottomSection extends React.Component{
render(){
  return(
    <div className={styles.main_container}>
        <div><img src={logo}></img></div>
        
        <nav className={styles.navigation}> 
            <Link to="/about" className={styles.myLink}>About Us</Link>
            <Link to="" className={styles.myLink}>Terms of services</Link>
            <Link to="" className={styles.myLink}>Privacy policy</Link>
            <Link to="" className={styles.myLink}>Contact us</Link>
        </nav>
    </div>
    )
  }
}