import React from 'react';
import style from './MyButton.module.scss'

const MyButton = ({children,...props}) => {
    return (
       <button className={style.button} {...props} >{children}</button>
    );
};

export default MyButton;