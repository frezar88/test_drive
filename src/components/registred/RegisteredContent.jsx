import React from 'react';
import style from "./RegisteredContent.module.scss";

const RegisteredContent = ({localState}) => {
    return (
        <div className={style.content}>
            <div className={style.row}>

                <div className={style.item}>
                    <p>Модель: <span>{' '+localState.model}</span></p>
                </div>
                <div className={style.item}>
                    <p>Автоцентр: <span>{' '+localState.center}</span></p>
                </div>
                <div className={style.item}>
                    <p>Модификация: <span>{' '+localState.mod}</span></p>
                </div>

            </div>
            <div className={style.row}>
                <div className={style.item}>
                    <p>Дата и время:
                        <span>{' '+
                            new Date(+localState.date * 1000).toLocaleDateString('ru',) + ' ' +
                            new Date(+localState.date * 1000).toLocaleTimeString('ru', {
                                hour: "numeric",
                                minute: 'numeric'
                            })
                        }</span>
                    </p>
                </div>
                <div className={style.item}>
                    <p>Выше имя: <span>{' '+localState.person.name}</span></p>
                </div>
                <div className={style.item}>
                    <p>Ваш телефон: <span>{' '+localState.person.phone}</span></p>
                </div>

            </div>
        </div>
    );
};

export default RegisteredContent;