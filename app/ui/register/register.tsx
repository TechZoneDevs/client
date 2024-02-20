import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = function(){
        console.log('sumiteado');
    };

    return(
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <form onSubmit = {handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <h1 className="mb-4 text-xl font-bold">
                        Create your account
                    </h1>
                </div>
                <div>
                    <label className="mb-4 text-xl font-bold">
                        First Name
                    </label>
                    <input type='text' {...register('firstName', { required: true, maxLength: 48})}/>
                    {errors.firstName?.type === "required" && <p className="text-red-500">This field is required</p>}
                    {errors.firstName?.type === "maxLength" && <p className="text-red-500">The max in the field is 48 characters</p>}
                </div>
                <div>
                    <label className="mb-4 text-xl font-bold">
                        Last Name
                    </label>
                    <input type='text'{...register('lastName', { required: true, maxLength: 48})}/>
                    {errors.lastName?.type === "required" && <p className="text-red-500">This field is required</p>}
                    {errors.lastName?.type === "maxLength" && <p className="text-red-500">The max in the field is 48 characters</p>}
                </div>
                <div>
                    <label className="mb-4 text-xl font-bold">
                        Email
                    </label>
                    <input type='email' {...register('email', { required: true, maxLength: 48})}/>
                    {errors.email?.type === "required" && <p className="text-red-500">This field is required</p>}
                    {errors.email?.type === "maxLength" && <p className="text-red-500">The max in the field is 48 characters</p>}
                </div>
                <div>
                    <label className="mb-4 text-xl font-bold">
                        Password
                    </label>
                    <input type='password' {...register('password', { required: true, maxLength: 48})}/>
                    {errors.password?.type === "required" && <p className="text-red-500">This field is required</p>}
                    {errors.password?.type === "maxLength" && <p className="text-red-500">The max in the field is 48 characters</p>}
                </div>
            </form>
        </div>
    );
};