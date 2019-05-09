import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/pictures-section.module.css';


export default class SearchSection extends React.Component{
render(){
  return(
    <div className={styles.main_container}>
        <h1 className={styles.heading}>Most Popular Products</h1>
        <h2 className={styles.heading2}>This is the list of products that are most interested in users</h2>
    </div>
    )
  }
}