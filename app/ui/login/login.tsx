'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from '../register/register';

const Login = async ({login, setLogin}: {login: boolean, setLogin: boolean}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const [registrarse, setRegistrarse] = useState(false)

    if(!login) return null

    const onSubmit = async (data: object) => {
       console.log('Data sumiteada')
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <button onClick={()=> setLogin(false)}>x</button>
            <div className="bg-white rounded-lg p-8 max-w-lg w-full">
                <div className="mb-4 text-xl font-bold">Log in with your email</div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-1">Email:</label>
                        <input type="text" {...register('correo', { required: true, maxLength: 20 })} className="w-full border border-gray-300 rounded px-3 py-2" />
                        {errors.correo?.type === "required" && <p className="text-red-500">This field is required</p>}
                        {errors.correo?.type === "maxLength" && <p className="text-red-500">The max in the field is 20 characters</p>}
                    </div>
                    <div>
                        <label className="block mb-1">Password:</label>
                        <input type={showPassword ? "text" : "password"} {...register('password', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                        {errors.password?.type === "required" && <p className="text-red-500">This field is required</p>}
                    </div>
                    <button type="button" onClick={togglePasswordVisibility} className="bg-blue-500 text-white px-4 py-2 rounded">
                        {showPassword ? 'Hide' : 'Show'} Password
                    </button>
                    <button type="submit" value='enviar' className="bg-green-500 text-white px-4 py-2 rounded">
                        Enviar
                    </button>
                </form>
                <div className="flex flex-col items-center justify-center">
                <p className="text-lg mb-4">You not have an acount?</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out" onClick={()=>{
                    setRegistrarse(true)
                }}>Registrate</button>
            </div>
            </div>
            <Register registrarse={registrarse} setRegistrarse={setRegistrarse}/>
        </div>
    );
};

export default Login;
