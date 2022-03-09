import React from 'react';
import style from './MyTitle.module.scss'

const MyTitle = ({children,...props}) => {
    return (
            <h6 className={style.h6}{...props}>{children}</h6>
    );
};

export default MyTitle;