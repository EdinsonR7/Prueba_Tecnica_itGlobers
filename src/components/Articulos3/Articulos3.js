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
        <div className={styles.pufi}>
            <h2>Pufi NAP</h2>
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

export default Articulos3;