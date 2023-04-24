import React from 'react';
import record from './Video/Record.mp4'


export function Record(){
    return(
        <div>
            <video controls autoply width={"600px"} height={"500px"}> 
                <source src={record} />
            </video>
        </div>
    )
}