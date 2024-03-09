'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from '../register/register';
import styles from './login.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { montserrat } from '../fonts';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';


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
            
                <div className={styles.header}>
                    <h1 className = {`${montserrat.className}`} style = {{ fontSize: '20px'}}>Iniciar Sesion</h1>
                    <button onClick={()=> setLogin(!login)} className = {styles.closeBtn}>
                    <CloseIcon sx = {{ height: '20px', color: 'red'}}/>
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className= {styles.form}>
                    <div className = {styles.inputDiv}>
                        <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>Correo</label>
                        <input type="text" {...register('correo', { required: true, maxLength: 20 })} className={styles.input} />
                        {errors.correo?.type === "required" && <p className={styles.error}>Este campo es necesario</p>}
                        {errors.correo?.type === "maxLength" && <p className={styles.error}>Máximo 20 caracteres</p>}
                    </div>
                    <div className = {styles.inputDiv}>
                        <label className={`${montserrat.className}`} style = {{width: '100%', fontSize: '15px'}}>Contraseña</label>
                        <div className = {styles.passwordDiv}>
                        <input type={showPassword ? "text" : "password"} {...register('password', { required: true })} className={styles.inputPass}  />
                        <button onClick={togglePasswordVisibility} className={styles.toggleBtn}>
                        <VisibilityIcon sx = {{ height: '15px'}}/>
                    </button>
                        </div>
                        {errors.password?.type === "required" && <p className={styles.error}>Este campo es necesario</p>}
                    </div>
                    <div className = {styles.buttons}>

                    <button type="submit" className={styles.submitBtn}>
                        Iniciar Sesion
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                        <GoogleIcon sx = {{height: '18px'}}/>
                        Iniciar Sesion con Google
                    </button>
                    <button className={styles.submitBtn} onClick={()=>{
                    setRegistrarse(!registrarse);
                    setLogin(!login);
                }}>Registrate</button>
                </div>
                </form>
            { registrarse && <Register registrarse={registrarse} setRegistrarse={setRegistrarse}/>}
            </div>
        </div>
    );
};

export default Login;
