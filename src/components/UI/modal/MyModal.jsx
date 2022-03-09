import React from 'react';
import style from './MyModal.module.scss'

const MyModal = ({children}) => {
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;