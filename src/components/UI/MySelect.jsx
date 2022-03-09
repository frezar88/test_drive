import React, { useMemo, useState} from 'react';
import {Select} from "antd";
import 'antd/dist/antd.compact.min.css';
import style from './Slider/MySelect.module.scss';


const MySelect = ({data, children,getState, ...props}) => {
    const [value,setValue]=useState(children)
    const change=(e)=>{
        getState(e)
        setValue(e)
    }


    useMemo(() => {
        let checkActiveModel = data.filter(item => item.active)
        let nameActiveModel = checkActiveModel.length ? checkActiveModel[0].name : children
        setValue(nameActiveModel)
    }, [data,children])

    return (
        <Select
            onChange={change}
            size={'large'}
            bordered={false}
            style={{boxShadow: 'none'}}
            dropdownClassName={style.drop}
            className={style.mySelect}
            {...props}
            value={value}
            defaultValue={children}>
            {
                data ? data.map(({name, id},index) =>
                    <Select.Option  key={id ? id:index} value={id}>{name}</Select.Option>
                ) : ''
            }
        </Select>
    );
};

export default MySelect;