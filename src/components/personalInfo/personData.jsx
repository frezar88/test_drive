import React from 'react';
import {Form} from "antd";
import MySelectName from "../UI/MySelectName/MySelectName";
import MySelectPhone from "../UI/MySelectPhone/MySelectPhone";
import style from './personData.module.scss'

const PersonData = ({formRef,setLabelStep,labelStep}) => {
    return (
        <Form className={style.form} ref={formRef} id={'form'}>
            <h2>Введите личные данные</h2>
            <div className={style.content}>
                <MySelectName labelStep={labelStep} setLabelStep={setLabelStep}/>
                <MySelectPhone labelStep={labelStep} setLabelStep={setLabelStep}/>
            </div>

        </Form>
    );
};

export default PersonData;