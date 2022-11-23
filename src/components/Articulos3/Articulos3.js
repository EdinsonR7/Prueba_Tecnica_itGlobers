import React from 'react';
import images from "../../image/images";
import styles from './Articulos3.module.css'

//sombrilla
const Articulos3 = () => {
    return (
        <div className={styles.articulos3}>
           {images.articules3.map(e => <img src={e.name} alt="imagen" />)}  
        </div>
    );
};

export default Articulos3;