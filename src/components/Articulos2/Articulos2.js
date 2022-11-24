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
        <div className={styles.pufi}>
            <h2>Pufi CART</h2>
            </div>
            <div className={styles.parrafo}>
            <p>Descripcion del producto. Este es un
                     texto simulado</p>
            </div>
            <div className={styles.ver}>
            <h4>...VER MAS</h4>
            </div>

        </div>
    );
};

export default Articulos2;