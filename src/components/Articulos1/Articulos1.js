import React from 'react';
import images from "../../image/images";
import styles from './Articulos1.module.css'

//Bolsas
const Articules1 = () => {
    return (
        <div>
        <div>
        <h2>Pufi RAIN</h2>
        </div> 
        <div>
        <p>Descripcion del producto. Este es un texto simulado</p>
        </div>
        <div>
        <h4>VER MAS</h4>
        </div>   
        <div className={styles.articulos1}>
             {images.articules1.map(e => <img src={e.name} alt="imagen" />)}
        </div>
        <div className={styles.articulos2}>
            {images.articules2.map(e => <img src={e.name} alt="imagen" />)}
            </div>
        </div>
    );
};

export default Articules1;