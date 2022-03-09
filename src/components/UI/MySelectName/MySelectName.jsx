import React, {useState} from 'react';
import {Form, Input} from "antd";
import style from './MySelectName.module.scss'


const MySelectName = ({setLabelStep,labelStep}) => {
    const [value, setValue] = useState('')
    const change = (e) => {
        setValue(e.target.value.replaceAll('_', ''))
        setLabelStep({...labelStep,name:e.target.value.replaceAll('_', '')})
    }
    return (
        <Form.Item
            className={style.item}

            name="name"
            label="Ваше имя"
            rules={[
                {required: true, message: 'Пожалуйста введите ваше имя!',},
                {min: 3, message: 'Слишком короткое имя',},
            ]}
        >
            <Input
                value={value}
                onInput={change}
                mask={''}
                type={'text'}
                style={{width: '100%'}}
                name="phone"
                size="20"/>
        </Form.Item>
    );
};

export default MySelectName;