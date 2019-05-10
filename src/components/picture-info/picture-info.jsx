import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../assets/png/1logo.png'
import styles from '../../assets/stylesheets/picture-info.module.css';

export default class PictureInfo extends React.Component{
render(){
  return(
    <div className={styles.info_container}>
        <div className={styles.image_container}>
            <img src={this.props.img}></img>
        </div>
        <div className={styles.name_container}>
            <h4>{this.props.name}</h4>
        </div>
    </div>
    )
  }
}