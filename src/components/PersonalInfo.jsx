import React from 'react';
import style from './PersonalInfo.module.scss'
import PreviousSelect from "./personalInfo/previousSelect";
import PersonData from "./personalInfo/personData";
import MyHr from "./UI/MyHr";
import MyTitle from "./UI/MyTitle";


const PersonalInfo = ({labelStep,setCurrent,formRef,setLabelStep}) => {

    return (
        <div>
            <MyTitle>Шаг 5: Заполните персональные данные</MyTitle>
            <div className={style.personalInfo}>

                <PreviousSelect
                    labelStep={labelStep}
                    setCurrent={setCurrent}
                />
                <MyHr />
                <PersonData
                    labelStep={labelStep}
                    setLabelStep={setLabelStep}
                    formRef={formRef}
                />

            </div>
        </div>

    );
};

export default PersonalInfo;