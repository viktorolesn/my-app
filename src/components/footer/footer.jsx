import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/bottom-section.module.css';

export default class Footer extends React.Component{
render(){
  return(
  <footer className={styles.myFooter}>
    © 2018 Find Parrot
  </footer>
    )
  }
}