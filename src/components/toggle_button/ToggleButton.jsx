import React, { useState } from 'react'
import "./toggleButton.css"

const ToggleButton = () => {

    const [active, setActive] = useState(true);

    const changeToggle = () => {
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