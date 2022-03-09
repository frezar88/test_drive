import React from 'react';
import style from "./previousSelect.module.scss"

const PreviousSelect = ({labelStep,setCurrent}) => {
    const goToBack=(e)=>{
        let stepData=e.target.attributes['data-step'].value
        setCurrent(+stepData)
    }
    return (
        <div className={style.previousSelect}>

            <ul>
                <li>Модель:
                    <span data-step={'0'} onClick={goToBack}>{' '+labelStep.step0}</span>
                </li>
                <li>Автоцентр:
                    <span data-step={'1'} onClick={goToBack}>{' '+labelStep.step1}</span>
                </li>
                <li>Модификация:
                    <span data-step={'2'} onClick={goToBack}>{' '+labelStep.step2}</span>
                </li>
                <li>Дата визита:
                    <span data-step={'3'} onClick={goToBack}>{' '+labelStep.step3}</span>
                </li>
            </ul>
        </div>
    );
};

export default PreviousSelect;