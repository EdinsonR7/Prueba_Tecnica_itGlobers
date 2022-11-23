import React from 'react';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import images from "../../image/images";

const LandingPage = () => {
    return (
        <div>
           <div>
            <div className={styles.container}>
            <div className={styles.landing}>  
            {images.landingPage.map(e => <img src={e.name} alt="imagen" />)}
            </div> 
            <div className={styles.textoencima2}>
            <h2>Pufi</h2>
            </div>
            <div className={styles.textoencima}>
            <h1>ESTAR COMODO, NUNCA FUE TAN FACIL.</h1>  
            </div>
           <div className={styles.textoencima3}>
            <h4>MI CUENTA ▼  |  MI COMPRA ▼</h4>
           </div>
           <div className={styles.boton}>
           <Link className={styles.link}>SHOP</Link>
           </div>
           </div>
            </div>
        </div> 
    );
};

export default LandingPage;



