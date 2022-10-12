import React from 'react';
import clock from "../../assets/clock.svg"
function SmCard({logo,time,details}) {
    return (
        <div className='sm-card'>
            <img src={logo} alt=""  style={{width:"32px"}}/>          
            <p className='card-time'>{time}</p>
            <p className='details'>{details}</p>
            
        </div>
    );
}

export default SmCard;