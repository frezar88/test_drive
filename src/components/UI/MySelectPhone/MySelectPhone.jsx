import React, {useState} from 'react';
import {Form,} from "antd";
import PrefixSelector from "./PrefixSelector";
import MaskedInput from "antd-mask-input";
import style from './MySelectPhone.module.scss'

const MySelectPhone = ({labelStep,setLabelStep}) => {
    const [value, setValue] = useState('')
    const change = (e) => {

        setValue(e.target.value.replaceAll('_', ''))
        setLabelStep({...labelStep,phone:e.target.value})
    }
    return (
        <Form.Item
            className={style.item}

            name="phone"
            label="Номер телефона"
            rules={[
                {required: true, message: 'Пожалуйста введите ваш номер телефона!',},
                {min: 12, message: 'Не верно указан номер телефона'},
                {max: 12, message: 'Не верно указан номер телефона'},
                {pattern:/(^[0-9]{2})(\s)([0-9]{3})([\s])([0-9]{2})([\s])([0-9]{2})/,message: 'Не верно указан номер телефона'}
            ]}
        >
            <MaskedInput
                mask={'11 111 11 11'}
                onChange={change}
                value={value.replaceAll('_','')}
                addonBefore={<PrefixSelector/>}
                name="phone"
                size="14"/>
        </Form.Item>
    );
};

export default MySelectPhone;