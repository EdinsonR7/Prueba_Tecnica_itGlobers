import React from 'react';
import images from "../../image/images";
import styles from './Articulos3.module.css'

//sombrilla
const Articulos3 = () => {
    return (
        <div>
        <div className={styles.articulo5}>
           {images.articules5.map(e => <img src={e.name} alt="imagen" />)}  
        </div>
        <div className={styles.articulo6}>
        {images.articules6.map(e => <img src={e.name} alt="imagen" />)}  
        </div>
        </div>
    );
};

export default Articulos3;