import React from 'react';
import images from "../../image/images";
import styles from './Articulos2.module.css'
//sofaPlaya
const Articulos2 = () => {
    return (
        <div className={styles.articulos2}>
           {images.articules2.map(e => <img src={e.name} alt="imagen" />)} 
        </div>
    );
};

export default Articulos2;