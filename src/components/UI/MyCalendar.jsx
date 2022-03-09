import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.scss'


const MyCalendar = ({getDate}) => {
    const [value, setValue] = useState(new Date());
    const  onChange =(valueChange)=>{
        setValue(valueChange)
        getDate(valueChange)
    }
    return (
        <div>
            <Calendar
                showNeighboringMonth={false}
                minDate={new Date()}
                prev2Label={null}
                next2Label={null}
                navigationAriaLive={"polite"}
                minDetail={'month'}
                locale={'ru-RU'}
                onChange={onChange}
                value={value}

            />
        </div>
    );
};

export default MyCalendar;