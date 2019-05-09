import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../assets/png/1logo.png'
import styles from '../../assets/stylesheets/header.module.css';

export default class Header extends React.Component{
render(){
  return(<header  className={styles.header} style={styles}>
    <div className={styles.header_logo}>
          <img src={logo}></img>
    </div>
     <nav className={styles.nav}>
       <div className={styles.topNav} id="myTopNav"> 
            <Link to="" className={styles.myLink}>ALL PRODUCTS</Link>
            <Link to="/about" className={styles.myLink}> ABOUT US</Link>
            <div className={styles.linkBorder}><Link to="" className={styles.myLink}>LOG IN</Link></div>
            <Link to="" className={styles.myLink}>SIGN UP</Link>
       </div>
     </nav>
  </header>
    )
  }
}



// const Header = () => (
//   <header  className={styles.header} style={styles}>
//     <div className={styles.header_logo}>
//           <img src={logo}></img>
//     </div>
//      <nav className={styles.nav}>
//        <div className={styles.topNav} id="myTopNav"> 
//             <Link to="" className={styles.myLink}>ALL PRODUCTS</Link>
//             <Link to="" className={styles.myLink}> ABOUT US</Link>
//             <div className={styles.linkBorder}><Link to="" className={styles.myLink}>LOG IN</Link></div>
//             <Link to="" className={styles.myLink}>SIGN UP</Link>
//        </div>
//      </nav>
//   </header>
//   )

// export default Header;

