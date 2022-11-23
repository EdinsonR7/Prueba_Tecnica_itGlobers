import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getValidations} from '../../redux/actions';
import styles from './Form.module.css'

const Form = () => {

    const dispatch = useDispatch();

    const [validar, setValidar] = useState({
        email:''
       
    })  

    const [errors, setErrors] = useState({});

    function handleOnChange(e){
        setValidar({
            ...validar,
            [e.target.name]: e.target.value,
          });
      
          setErrors(validationForm({ ...validar, [e.target.name]: e.target.value }));
    }


    function handleOnSubmit(e){
     e.preventDefault()
     dispatch(getValidations(validar))
    }

    const validationForm = validar => {
        let errors = {};

        if(!validar.email)errors.email = 'Campo requerido';
        else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(validar.email))
        errors.email = 'invalid format';
       
        


        return errors;

    };





    return (
        <div className={styles.container}>
        <div className={styles.form1}>
        <h6>NEWSLETTER</h6>
        </div>
        <div className={styles.suscrib}>
        <h1>SUSCRIBITE</h1>
        </div>
        <div className={styles.form2}>
        <p>Y enterate de todas las novedades</p>
        </div>
        <div className={styles.form}> 
        <form onSubmit={e => handleOnSubmit(e)}>
        <div className={styles.input}>  
        <input 
        type="text" 
        name="email"
        value={validar.email}
        onChange={e => handleOnChange(e)} 
        placeholder={'ingresa tu email         >'}
        /> 
        {errors.email ? <span>{errors.email}</span> : null}
        </div> 
        <div className={styles.button}>
        <button onClick={(e) => handleOnSubmit(e)}>...</button>
        </div>
        </form>
        </div>
        </div>
    );
};

export default Form;


// <div className={styles.container}>
// <form onSubmit={e => handleOnSubmit(e)}>
// <div className={styles.form}> 
// <div className={styles.form1}>
// <h6>NEWSLETTER</h6>
// </div>
// <div className={styles.suscrib}>
// <h1>SUSCRIBITE</h1>
// </div>
// <div className={styles.input}>  
// <input 
// type="text" 
// name="email"
// value={validar.email}
// onChange={e => handleOnChange(e)} 
// placeholder={'ingresa tu email         >'}
// /> 
// </div> 
// {errors.email ? <span>{errors.email}</span> : null}
// <div className={styles.form2}>
// <p>Y enterate de todas las novedades</p>
// </div>
// </div>
// </form>
// </div>