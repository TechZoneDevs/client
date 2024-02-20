'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = async () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
       console.log('holi')
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div>
                Log in with your email
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>Email:</label>
                    <input type="text" {...register('correo', { required: true, maxLength: 20 })} />
                    {errors.correo?.type === "required" && <p>This field is required</p>}
                    {errors.correo?.type === "maxLength" && <p>The max in the field is 20 characters</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type={showPassword ? "text" : "password"} {...register('password', { required: true })} />
                    {errors.password?.type === "required" && <p>This field is required</p>}
                </div>
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'} Password
                </button>
                <button type="submit" value='enviar'> Enviar </button>
            </form>
        </div>
    );
};

export default Login;
