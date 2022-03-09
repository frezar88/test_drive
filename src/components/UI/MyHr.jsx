import React from 'react';
import style from './MyHr.module.scss'

const MyHr = ({...props}) => {
    return (
        <>
            <hr {...props} className={style.hr}/>
        </>
    );
};

export default MyHr;