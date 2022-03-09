import React from 'react';
import style from './MySlide.module.scss'
import 'swiper/css';
import {EnvironmentOutlined, PhoneOutlined} from "@ant-design/icons";

const MySlide = ({img, name, getState, id, active, fill, map, phone, index, features, ...props}) => {
    const click = (e) => {
        getState(e.currentTarget.attributes['data-model-id'].value)
    }
    return (
        <>

            <div
                onClick={click}
                data-model-id={id}
                className={
                    !fill
                        ? active ? [style.slide, style.active].join(' ') : [style.slide].join(' ')
                        : active ? [style.slide, style.active].join(' ') : [style.noActive].join(' ')

                }
                {...props}
            >
                <img src={img} alt={name}/>
                <p>{name}</p>
                {map && phone ?
                    <div className={style.links}>
                        <div className={style.child}>
                            <a rel="noreferrer" target={'_blank'} href={map}>Показать на карте</a>
                            <EnvironmentOutlined className={style.icon}/>
                        </div>
                        <div className={style.child}>
                            <a rel="noreferrer" target={'_blank'} href={`tel:${phone}`}>{phone}</a>
                            <PhoneOutlined className={style.icon}/>
                        </div>

                    </div>
                    : ''
                }
                {
                    features
                        ? <div className={style.features}>
                            <div>{features.engine}</div>
                            <div>{features.transmission}</div>
                            <div>{features.drive}</div>
                        </div>
                        : false
                }
                <div className={style.selectSlide}></div>
            </div>


        </>

    );
};

export default MySlide;