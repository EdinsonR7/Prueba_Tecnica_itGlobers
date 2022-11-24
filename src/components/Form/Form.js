import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValidations } from '../../redux/actions';
import styles from './Form.module.css'

const Form = () => {

  const dispatch = useDispatch();
  const email = useSelector(state => state.email)

  const [validar, setValidar] = useState({ email: '' })
  const [errors, setErrors] = useState({});

  function handleOnChange(e) {
    setValidar({ ...validar, [e.target.name]: e.target.value });
    setErrors(validationForm({ ...validar, [e.target.name]: e.target.value }));
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    let response = email.find((valor) => valor.email === validar.email)
    if (response) return alert("Este correo ya se encuentra registrado")
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(validar.email)) return alert("Debe ingresar un correo electronico valido")
    dispatch(getValidations(validar))
    setValidar({ email: "" })
  }

  const validationForm = validar => {
    let errors = {};

    if (!validar.email) errors.email = 'Campo requerido';
    else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(validar.email))
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


