import React, { Component } from 'react';
import styles from './Logo.css';
import imageLogo from '../../../images/react.svg';


const Logo = () => {
    return(
       <h2 className={styles.center}>
           <img className={styles.logo} width="128" height="90.5" src={imageLogo}/>
       </h2>     
    );
}

export default Logo;