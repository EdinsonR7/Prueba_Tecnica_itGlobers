import React from "react";
import images from "../../image/images";
import styles from './Articulos.module.css'
import { Link } from "react-router-dom";

const Articulos = () => {
  return (
    <div>
      <div className={styles.articulos}>
       <div className={styles.textoencima2}>
       <h2>Pufi ALMOHADA</h2>
       </div>
       <div className={styles.text1}>
       <p>Descripcion del producto. este es un texto simulado</p>
       </div>
       <div className={styles.textoencima}>
       <h4>...VER MAS</h4>
       </div>
       <div className={styles.image}>
       {images.articules.map(e => <img src={e.name} alt="imagen" />)}
       </div>
       <div className={styles.image2}>
        {images.articules0.map(e => <img src={e.name} alt="imagen" />)}</div>
       </div>
       <div className={styles.link}>
        <Link>SHOP</Link>
       </div>
      </div>

  );
};

export default Articulos;
