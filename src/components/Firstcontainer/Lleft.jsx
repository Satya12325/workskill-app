import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function Left(props) {
    return (
        <div className='copyrightContainer'>
            <h3>Copywriting 101</h3>
            <p>Build a real product with a team of frontend developers, backend developers</p>
            <div className='rating-paragraph'>
            <Rating name="read-only" value={4.9} readOnly />
            <p ><span style={{color:"#FAC711",fontWeight: 600}}> 4.9 </span> 1200 ratings </p>
            </div>
        </div>
    );
}

export default Left;