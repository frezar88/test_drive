import React, {useEffect, useState} from 'react';
import MyTitle from "./UI/MyTitle";
import style from "./Registered.module.scss"
import RegisteredContent from "./registred/RegisteredContent";
import MyButton from "./UI/MyButton/MyButton";
import MyModal from "./UI/modal/MyModal";


const Registered = ({setRegister}) => {
    const [localState, setLocalState] = useState({})
    useEffect(() => {
        let storage =JSON.parse(localStorage.getItem('testDrive'))
        if (storage){
            setLocalState(storage)
        }
    }, [])
    const click = () => {
        setRegister(false)

    }
    return (
        <div className={style.register}>
            <MyTitle style={{fontSize: '25px', textAlign: 'center'}}>Вы записаны на тест драйв</MyTitle>
            {
                Object.keys(localState).length !== 0
                ? <RegisteredContent localState={localState} />
                    :''
            }

            <MyButton onClick={click}>

                Отменить запись
            </MyButton>
            {/*<MyModal>*/}
            {/*    <div>*/}
            {/*        <MyTitle style={{fontSize:20}}>Вы уверены что хотите отменить запись?</MyTitle>*/}
            {/*        <hr/>*/}
            {/*        <div>*/}
            {/*            <button>Да</button>*/}
            {/*            <button>Нет</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</MyModal>*/}

        </div>
    );
};

export default Registered;