import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/slider-section.module.css';



export default class SliderSection extends React.Component{
render(){
  return(
    <div className={styles.main_container}>
        <h1 className={styles.heading}>Testimonials</h1>
        <h2 className={styles.heading2}>What our customers told about us</h2>
    </div>
    )
  }
}