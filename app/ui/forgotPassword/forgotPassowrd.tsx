import React from 'react';
import styles from './forgotPassword.module.css';
import { montserrat } from '../fonts';
import CloseIcon from '@mui/icons-material/Close';

export default function ForgotPassword({forgotPassModal, setForgotPassModal}: {forgotPassModal:boolean, setForgotPassModal: Function}){
    return(
        <div className={styles.holeModal}>
            <div className={styles.holeDiv}>
            <div className = {styles.header}>
            <h1 className = {`${montserrat.className}`} style = {{ fontSize: '20px'}}>ForgotPassword View</h1>
            <button onClick = {() => setForgotPassModal(!forgotPassModal)} className = {styles.closeBtn}>
                    <CloseIcon sx = {{ height: '20px', color: 'red'}}/>
            </button>
            </div>
            </div>
            
        </div>
    )
}