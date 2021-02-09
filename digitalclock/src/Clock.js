import React ,{ useState } from 'react'

export default function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(updateTime , 1000);
    let timeStr = time.split(' ')[0]
    let period = time.split(' ')[1]
    return(
        <>
            <h1>{timeStr}</h1>
            <h1>{period}</h1>
        </>
    )
}