import React from 'react';
import images from "../../image/images";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
        <div className={styles.pufi}>
            <div className={styles.redesparr}>
            <h5>SIGUENOS EN</h5>
            </div>
            <div className={styles.redes}>
            {images.footer.map(e => <img src={e.name} alt="imagen" />)}
            </div>
         <h1>Pufi</h1>
         <div className={styles.h6}>
         <h6>
            <span>PUFI RAIN</span>
            <span>PUFI PUFF</span>
            <span>PUFI CART</span>
            <span>PUFI NAP</span> 
         </h6>
         </div>
         <div className={styles.contactosh6}>
          <h6>
           <span>CONTACTO</span> 
           <span>AYUDA</span>
           <span>COMO COMPRAR</span>
           <span>TERMINOS & CONDICIONES</span>
         </h6>
         </div>
            <div className={styles.qr}>
            <div className={styles.seguro}>   
            <h6>COMPRA 100% SEGURA</h6>
            </div>
            {images.qr.map(e => <img src={e.name} alt="imagen" />)}
            </div>
        
        </div>
        </div>
    );
};

export default Footer;