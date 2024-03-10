'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Login from '../login/login';
import styles from './register.module.css';
import { montserrat } from '../fonts';
import CloseIcon from '@mui/icons-material/Close';

export default function Register({registrarse, setRegistrarse, forgotPassModal, setForgotPassModal}: {registrarse: boolean, setRegistrarse: Function, forgotPassModal: boolean, setForgotPassModal: Function}){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, setLogin] = useState(false)
    const onSubmit = function(){
        console.log('sumiteado');
    };

    return(
        <div className={styles.holeModal}>
            <form onSubmit = {handleSubmit(onSubmit)} className={styles.holeDiv}>
                <div className = {styles.header}>
                <h1 className = {`${montserrat.className}`} style = {{ fontSize: '20px'}}>Regístrate</h1>
                    <button onClick = {() => setRegistrarse(!registrarse)} className = {styles.closeBtn}>
                    <CloseIcon sx = {{ height: '20px', color: 'red'}}/>
                    </button>
                </div>
                <div className = {styles.inputDiv}>
                    <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>
                        First Name
                    </label>
                    <input type='text' className={styles.input} {...register('firstName', { required: true, maxLength: 48})}/>
                    {errors.firstName?.type === "required" && <p className={styles.error}>This field is required</p>}
                    {errors.firstName?.type === "maxLength" && <p className={styles.error}>The max in the field is 48 characters</p>}
                </div>
                <div className = {styles.inputDiv}>
                    <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>
                        Last Name
                    </label>
                    <input type='text' className={styles.input} {...register('lastName', { required: true, maxLength: 48})}/>
                    {errors.lastName?.type === "required" && <p className={styles.error}>This field is required</p>}
                    {errors.lastName?.type === "maxLength" && <p className={styles.error}>The max in the field is 48 characters</p>}
                </div>
                <div className = {styles.inputDiv}>
                    <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>
                        Email
                    </label>
                    <input type='email' className={styles.input} {...register('email', { required: true, maxLength: 48})}/>
                    {errors.email?.type === "required" && <p className={styles.error}>This field is required</p>}
                    {errors.email?.type === "maxLength" && <p className={styles.error}>The max in the field is 48 characters</p>}
                </div>
                <div className = {styles.inputDiv}>
                    <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>
                        Password
                    </label>
                    <input type='password' className={styles.input} {...register('password', { required: true, maxLength: 48})}/>
                    {errors.password?.type === "required" && <p className={styles.error}>This field is required</p>}
                    {errors.password?.type === "maxLength" && <p className={styles.error}>The max in the field is 48 characters</p>}
                </div>
                <div className = {styles.buttons}>
                <button type="submit" className={styles.submitBtn}>
                        Registrarse
                </button>
                <button type="button" className={styles.submitBtn} onClick = {() => {
                    setRegistrarse(!registrarse);
                    setForgotPassModal(!forgotPassModal);
                }}>
                ¿Olvidaste la contraseña?
                </button>
                <button type="button" className={styles.submitBtn}>
                Ingresa a tu cuenta
                </button>
                </div>
            </form>
        </div>
    );
};