import React from 'react';
import images from "../../image/images";
import styles from './Articulos2.module.css'
//sofaPlaya
const Articulos2 = () => {
    return (
        <div>
        <div className={styles.articulo3}>
           {images.articules3.map(e => <img src={e.name} alt="imagen" />)}
           </div> 
        <div className={styles.articulo4}>
        {images.articules4.map(e => <img src={e.name} alt="imagen" />)}
        </div>
        </div>
    );
};

export default Articulos2;