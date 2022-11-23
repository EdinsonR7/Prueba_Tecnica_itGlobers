import React from 'react';
import images from "../../image/images";
import styles from './Colash.module.css'
const Colash = () => {
    return (
        <div>
          <div className={styles.text.text2}>
          <div className={styles.text2}>
          <h6>INSTAGRAM</h6>
          </div>
          <div className={styles.text}>
          <h1>#ESPUFI</h1>
          </div>
          </div>
        <div className={styles.colash}>
          {images.colash.map(e => <img src={e.name} alt="imagen" />)}     
        </div>
        </div>
    );
};

export default Colash;