'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from '../register/register';
import styles from './login.module.css';

const Login = ({login, setLogin}: {login: boolean, setLogin: Function}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const [registrarse, setRegistrarse] = useState(false)

    if(!login) return null

    const onSubmit = (data: object) => {
       console.log('Data sumiteada')
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    

    return (
        <div className = {styles.holeModal}>
            <div className={styles.holeDiv}>
            <button onClick={()=> setLogin(!login)}>x</button>
                <div className={styles.header}>Log in with your email</div>
                <form onSubmit={handleSubmit(onSubmit)} className= {styles.form}>
                    <div className = {styles.input}>
                        <label className={styles.label}>Email:</label>
                        <input type="text" {...register('correo', { required: true, maxLength: 20 })} className={styles.input} />
                        {errors.correo?.type === "required" && <p className={styles.error}>This field is required</p>}
                        {errors.correo?.type === "maxLength" && <p className={styles.error}>The max in the field is 20 characters</p>}
                    </div>
                    <div className = {styles.input}>
                        <label className={styles.label}>Password:</label>
                        <input type={showPassword ? "text" : "password"} {...register('password', { required: true })} className={styles.input}  />
                        {errors.password?.type === "required" && <p className={styles.error}>This field is required</p>}
                    </div>
                    <button type="button" onClick={togglePasswordVisibility} className={styles.submitBtn}>
                        {showPassword ? 'Hide' : 'Show'} Password
                    </button>
                    <button type="submit" value='enviar' className="bg-green-500 text-white px-4 py-2 rounded">
                        Enviar
                    </button>
                </form>
                <div className={styles.footer}>
                <p className="text-lg mb-4">You not have an acount?</p>
                <button className={styles.registerBtn} onClick={()=>{
                    setRegistrarse(true)
                }}>Registrate</button>
            </div>
            <Register registrarse={registrarse} setRegistrarse={setRegistrarse}/>
            </div>
        </div>
    );
};

export default Login;
