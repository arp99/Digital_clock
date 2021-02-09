import React ,{ useState } from 'react'

export default function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(updateTime , 1000);
    return(
        <>
            <h1>{time}</h1>
        </>
    )
}