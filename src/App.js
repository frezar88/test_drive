import React, {useEffect, useState} from 'react';

import MySteps from "./components/MySteps";
import Registered from "./components/Registered";


const App = () => {
    const [userData, setUserData] = useState({})
    const [register,setRegister]=useState(false)

    useEffect(() => {
        if (Object.keys(userData).length !== 0) {
          localStorage.setItem('testDrive',JSON.stringify(userData))
            setRegister(true)
        }

    }, [userData])
    useEffect(()=>{
     let localStorageTestDrive = localStorage.getItem('testDrive')
        if (localStorageTestDrive){
            setRegister(true)
        }
    },[])
    return (
        <>
            {
                ! register
                    ? <MySteps userData={userData} setUserData={setUserData}/>
                    : <Registered setRegister={setRegister}/>
            }

        </>


    );
};

export default App;