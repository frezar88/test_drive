import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import MySlide from "./MySlide";
import style from './MySliderSwiper.module.scss'
import './MySliderSwiper.scss'


const MySliderSwiper = ({data, getState,swiperBreakPoint, ...props}) => {

    const [swiper, setSwiper] = useState();


    useEffect(() => {
        let swipeToSlide = data.find(item => item.active)
        swipeToSlide = swipeToSlide ? swipeToSlide.id : 0
        if (swiper) {

            swiper.slideTo(swipeToSlide, 1000)
            swiper.activeIndex=swipeToSlide

        }
    }, [data, swiper])


    return (
        <div className={style.swiperCont} style={{position: "relative", padding: '0  40px'}}>
            <Swiper
                speed={500}
                onSwiper={(swiper) => setSwiper(swiper)}
                initialSlide={'5'}
                watchOverflow={true}
                className={style.swiper}
                navigation={true}
                mousewheel={true}
                spaceBetween={1}
                slidesPerView={'auto'}
                modules={[Navigation, Mousewheel]}
                // onInit={(swiper) => {
                //     swiper.params.navigation.prevEl = prevRef.current;
                //     swiper.params.navigation.nextEl = nextRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
                breakpoints={
                    swiperBreakPoint
                }
            >
                {
                    data ? data.map(({img, name, id, active,fill,map,phone,features},index) =>
                            <SwiperSlide key={id}>
                                <MySlide
                                    features={features}
                                    index={index}
                                    phone={phone}
                                    map={map}
                                    fill={fill}
                                    active={active}
                                    id={id}
                                    getState={getState}
                                    img={img}
                                    name={name}
                                />
                            </SwiperSlide>
                        )
                        :
                        false
                }
                {/*<div className={['swiper-button-prev', style.prev].join(' ')} ref={prevRef}/>*/}
                {/*<div className={['swiper-button-next', style.next].join(' ')} ref={nextRef}/>*/}
            </Swiper>
        </div>
    );
};

export default MySliderSwiper;