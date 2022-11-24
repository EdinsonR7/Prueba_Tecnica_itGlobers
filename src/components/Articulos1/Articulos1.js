import React from 'react';
import images from "../../image/images";
import styles from './Articulos1.module.css'

//Bolsas
const Articules1 = () => {
    return (
        <div>
        <div className={styles.articulos1}>
             {images.articules1.map(e => <img src={e.name} alt="imagen" />)}
        </div>
        <div className={styles.articulos2}>
            {images.articules2.map(e => <img src={e.name} alt="imagen" />)}
            </div>
            <div className={styles.pufi}>
            <h2>Pufi PUFF</h2>
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

export default Articules1;