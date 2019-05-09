import React from 'react';
import {Link} from "react-router-dom"
import styles from '../../assets/stylesheets/search-section.module.css';
import IconHint from '../../assets/png/icon.png'
import IconCategory from '../../assets/png/icon_category.png'

export default class SearchSection extends React.Component{
render(){
  return(
    <div className={styles.main_container} >
        <form action="" align="center">
            <h1 className={styles.Quick_Search}>Quick Search for Your <span className={styles.h1Color}>Perfect Product</span></h1>
            <h4 className={styles.Innovate_List}>Innovate <span className={styles.h4Span}>·</span> List <span className={styles.h4Span}>·</span> Connect</h4>
            <div className={styles.searchBoxWhole}>
                <div>
                    <select class={styles.SearchSelect}>
                        <option>Category</option>
                        <option>Category 1</option>
                    </select>
                </div>
                <div>
                    <input type="text" align="center" class={styles.SearchBox}></input>
                </div>
                <div>
                    <input type="submit" value="START SEARCHING" class={styles.SearchButton}></input>
                </div>
            </div>
        </form>

        <div className={styles.mainButtonsContainer}>
            <button className={styles.myButtons}><span className={styles.firstIcon}> All categories</span></button>
            <button className={styles.myButtons}><span className={styles.secondIcon}> How it works</span></button>
        </div>
    </div>
    )
  }
}