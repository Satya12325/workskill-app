import React from 'react';
import Left from './Lleft';
import product from "../../assets/product.svg"
import Enrollcontainer from './Enrollcontainer';
import SmCard from './Card';
import Right from './Right';

function Firstcontainer(props) {
    return (
        <div className='mainContainer'>
            <Left/>
            
                <img src={product} alt="" />
            
                       
                <Enrollcontainer/>
           
            
                <Right/>
            
        </div>
    );
}

export default Firstcontainer;