import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/pictures-section.module.css';
import PictureInfo from '../picture-info/picture-info';
import img1 from '../../assets/png/Picture1.png'
import img2 from '../../assets/png/Picture2.png'
import img3 from '../../assets/png/Picture3.png'
import img4 from '../../assets/png/Picture4.png'
import img5 from '../../assets/png/Picture5.png'
import img6 from '../../assets/png/Picture6.png'


export default class SearchSection extends React.Component{
render(){
  return(
    <div className={styles.main_container}>
        <h1 className={styles.heading}>Most Popular Products</h1>
        <h2 className={styles.heading2}>This is the list of products that are most interested in users</h2>
        <div className={styles.components_info}>
            <div className={styles.component}>
                <PictureInfo img={img1} name="Hubstaff directory"/>
            </div>
            <div className={styles.component}>
                <PictureInfo img={img2} name="Jira 2017"/>
            </div>
            <div className={styles.component}>
                <PictureInfo img={img3} name="Slack Pro"/>
            </div>
        </div>
        <br/>
        <div className={styles.components_info}>
            <div className={styles.component}>
                <PictureInfo img={img4} name="TraveChat"/>
            </div>
            <div className={styles.component}>
                <PictureInfo img={img5} name="Network"/>
            </div>
            <div className={styles.component}>
                <PictureInfo img={img6} name="Time Camp"/>
            </div>
        </div>
    </div>
    )
  }
}