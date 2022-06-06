import React, { useState } from 'react'
import "./toggleButton.css"
import pdf_file from '../../pdf/002.pdf'

const ToggleButton = () => {

    const [active, setActive] = useState(true);

    const changeToggle = () => {
        /* active && window.open(pdf_file) */
        setActive(act => !act); 
    }


    return (
        <div className={active ? 'tb' : 'tb active'} onClick={changeToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default ToggleButton