import React, {useEffect, useState} from 'react';
import MyTitle from "./UI/MyTitle";
import style from './DateSelection.module.scss';
import MyCalendar from "./UI/MyCalendar";
import {TIME_ARRAY} from "../utils/const";
import {Select} from "antd";


const DateSelection = ({labelStep, setLabelStep}) => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()


    useEffect(() => {

    }, [date, time])

    const getDate = (value) => {
        let engDate = new Date(value).toLocaleDateString('en')
        let ruDate = new Date(value).toLocaleDateString('ru', {day: 'numeric', month: 'long', year: 'numeric'})
        setDate(ruDate)
        setLabelStep({...labelStep, step3: ruDate, date: engDate})
    }
    const change = (e) => {

        setLabelStep({...labelStep, step3: date + ' ' + e, time: e})
        setTime(e)


    }
    return (
        <div className={style.dateSelection}>
            <MyTitle>Шаг 4: Выберите дату и время</MyTitle>
            <div className={style.content}>
                <div>
                    <h3>Дата: {date}</h3>
                    <MyCalendar
                        getDate={getDate}
                    />
                </div>
                {
                    date
                        ? <div>
                            <h3>Время: {time}</h3>
                            <Select style={{width: '100%'}}
                                    value={time}
                                    onChange={change}
                                    defaultValue={'Выберите время'}>
                                {
                                    TIME_ARRAY.map(({id, name}, index) =>
                                        <Select.Option key={id ? id : index} value={name}>{name}</Select.Option>
                                    )
                                }
                            </Select>
                        </div>
                        : ''
                }

            </div>

        </div>
    );
};

export default DateSelection;