import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
// import React,{useState} from 'react';

// function Heading() {
//     const [menu, setmenu] = useState(false)
//     function menuopen(e) {
//       e.preventDefault()
//       setmenu(true)
//     }
//     function close(){
//       setmenu(false)
//     }  
// }                                                  

function Heading() {
    const [menu, setmenu] = useState(false)
    function menuopen(e) {
        e.preventDefault()
        setmenu(true)
    }
    function close() {
        setmenu(false)
    }
    return (
        <>
            <div className='tesla'>
                <div className='header'>
                    <img src='images/logo.svg'></img>
                    <ul>
                        <li><a href="">Model S</a></li>
                        <li><a href="">Model 3</a></li>
                        <li><a href="">Model X</a></li>
                        <li><a href="">Model Y</a></li>
                        <li><a href="">Solar Roof</a></li>
                        <li><a href="">Solar Panels</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="" onClick={menuopen}>Menu</a></li>
                    </ul>
                    <ul className='Menu' style={{ right: (menu === false) ? "-255px" : "0" }}>
                        <CloseIcon className='close' onClick={close} />
                        <li><a href=''> Model S </a></li>
                        <li><a href=''> Model 3 </a></li>
                        <li><a href=''> Model X </a></li>
                        <li><a href=''> Model Y </a></li>
                        <li><a href=''> Solar Roof </a></li>
                        <li><a href=''> Solar Panels </a></li>
                        <li><a href=''>Existing Inventory</a></li>
                        <li><a href=''>Used Inventory</a></li>
                        <li><a href=''>Trade In</a></li>
                        <li><a href=''>Test Drive</a></li>
                        <li><a href=''>Powerwall</a></li>
                        <li><a href=''>Commercial Energy</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Heading