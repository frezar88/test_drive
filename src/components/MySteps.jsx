import React, {useRef, useState} from 'react';
import {
    AUTO_CENTER_ARRAY, MOD_ARRAY,
    MODEL_ARRAY,
    STEPS_ARRAY,
    SWIPER_BREAK_POINT_AUTO_CENTER,
    SWIPER_BREAK_POINT_MODELS, SWIPER_BREAK_POINT_MODIFICATION
} from "../utils/const";
import './MySteps.scss'
import {Steps, Button, message} from 'antd';
import SelectBlock from "./SelectBlock";
import DateSelection from "./DateSelection";
import PersonalInfo from "./PersonalInfo";

const {Step} = Steps;

const MySteps = ({userData,setUserData}) => {

    const formRef = useRef(null)
    const [current, setCurrent] = useState(0);
    const [load, setLoad] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [labelStep, setLabelStep] = useState({
        step0: 'Модель',
        step1: 'Автоцентр',
        step2: 'Модификация',
        step3: 'Дата и время',
        step4: 'Личные данные',
        name: '',
        phone: '',
        date: '',
        time: ''
    })

    const creatUserData = () => {
        setUserData({
            ...userData,
            model: labelStep.step0,
            center: labelStep.step1,
            mod: labelStep.step2,
            date: Math.round(new Date(labelStep.date + ' ' + labelStep.time) / 1000),
            person:
                {
                    name: labelStep.name,
                    phone: labelStep.phone.replaceAll(' ', '')
                }
        })
    }

    const next = () => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            setCurrent(current + 1);
        }, 1000)

    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const click = (e) => {
        formRef.current.submit()

        let currentPhoneLength = labelStep.phone.replaceAll(' ', '').replaceAll('(', '').replace(')', '').replaceAll('_', '').length
        if (labelStep.name.length > 3 && currentPhoneLength === 9) {
            setLoadingButton(true)
            sendData().then()

        }
    }
    const sendData =async () => {
        setTimeout(()=>{

            setLoadingButton(false)
            message.success('Сообщение отправлено');
            creatUserData()
        },2000)

    }

    return (
        <div className={'steps'}>

            <Steps current={current}>
                {STEPS_ARRAY.map(({id, title}, index) => (
                    <Step key={id} title={title} description={labelStep[`step${index}`]}/>
                ))}
            </Steps>
            <div className="steps-content">
                {
                    current === 0 ?
                        <SelectBlock
                            labelStep={labelStep}
                            setLabelStep={setLabelStep}
                            step={'1'}
                            swiperBreakPoint={SWIPER_BREAK_POINT_MODELS}
                            data={MODEL_ARRAY}
                        >{{title: 'Шаг 1: Выбирите модель', sel: 'Все модели'}}
                        </SelectBlock>
                        : ''

                }
                {
                    current === 1 ?
                        <SelectBlock
                            labelStep={labelStep}
                            setLabelStep={setLabelStep}
                            step={'2'}
                            swiperBreakPoint={SWIPER_BREAK_POINT_AUTO_CENTER}
                            data={AUTO_CENTER_ARRAY}
                        >{{
                            title: 'Шаг 2: Выберите автоцентр',
                            sel: 'Все автоцентры'
                        }}</SelectBlock>
                        : ''
                }
                {
                    current === 2 ?
                        <SelectBlock
                            labelStep={labelStep}
                            setLabelStep={setLabelStep}
                            step={'3'}
                            swiperBreakPoint={SWIPER_BREAK_POINT_MODIFICATION}
                            data={MOD_ARRAY}>{{
                            title: 'Шаг 3: Выберите модификацию',
                            sel: 'Все модификации'
                        }}</SelectBlock>
                        : ''
                }
                {
                    current === 3 ?

                        <DateSelection
                            labelStep={labelStep}
                            setLabelStep={setLabelStep}
                            step={'4'}
                        />
                        : ''
                }
                {
                    current === 4 ?
                        <PersonalInfo
                            labelStep={labelStep}
                            setLabelStep={setLabelStep}
                            step={'5'}
                            setCurrent={setCurrent}
                            formRef={formRef}
                        />
                        : ''
                }
            </div>
            <div className="steps-action">
                {current > 0 && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Назад
                    </Button>
                )}
                {current < STEPS_ARRAY.length - 1 && (
                    <Button type="primary" loading={load} onClick={() => next()}>
                        Дальше
                    </Button>
                )}
                {current === STEPS_ARRAY.length - 1 && (
                    // <Button type="submit" form="data" type="primary" onClick={() => message.success('Сообщение отправлено')}>
                    <Button loading={loadingButton ? true : false} form="data" type="primary" onClick={click}>
                        Отправить
                    </Button>
                )}
            </div>
        </div>
    );
};

export default MySteps;