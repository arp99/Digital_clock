import React from 'react'

export default function Clock(){
    let time = new Date().toLocaleTimeString();
    return(
        <>
            <h1>{time}</h1>
        </>
    )
}