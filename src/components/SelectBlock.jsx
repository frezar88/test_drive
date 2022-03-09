import React, { useEffect, useState} from 'react';
import SelectTopBlock from "./selectBrand/SelectTopBlock";
import MySliderSwiper from "./UI/Slider/MySliderSwiper";
import style from './SelectBlock.module.scss'


const SelectBlock = ({data, children,swiperBreakPoint,step,labelStep,setLabelStep}) => {
    const [stateBlock, setStateBlock] = useState(data)

    useEffect(()=>{
     if (step && stateBlock){
         switch (step) {
             case '1':
                 let model =stateBlock.find(item=>item.active)
                 if (model){
                     setLabelStep({...labelStep,step0:model.name})
                 }
                 break;
             case '2':
                 let autoCenter =stateBlock.find(item=>item.active)
                 if (autoCenter){
                     setLabelStep({...labelStep,step1:autoCenter.name})
                 }
                 break;
             case '3':
                 let modification =stateBlock.find(item=>item.active)
                 if (modification){
                     setLabelStep({...labelStep,step2:modification.name})
                 }
                 break;
             default :
                 break;
         }
     }


    },[stateBlock])


    const getStateModelSlider = (brand) => {
        let stateInTheSelectedCarSlider = data.map((item) => ({...item, active: +brand === +item.id, fill: true}))
        setStateBlock(stateInTheSelectedCarSlider)

    }
    const getStateModelSelect = (id) => {
        let stateInTheSelectedCarSelect = data.map((item) => ({...item, active: +id === +item.id, fill: true}))
        setStateBlock(stateInTheSelectedCarSelect)
    }

    return (
        <div className={style.selectBlock}>
            <SelectTopBlock getState={getStateModelSelect} data={stateBlock}>{children}</SelectTopBlock>
            <MySliderSwiper getState={getStateModelSlider} data={stateBlock} swiperBreakPoint={swiperBreakPoint}/>
        </div>
    );
};

export default SelectBlock;