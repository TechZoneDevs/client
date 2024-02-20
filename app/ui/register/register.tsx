import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <div>
            <form>
                <div>
                    <h1>
                        Create your account
                    </h1>
                </div>
                <div>
                    <label>
                        First Name
                    </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>
                        Last Name
                    </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input type='email'/>
                </div>
            </form>
        </div>
    );
};