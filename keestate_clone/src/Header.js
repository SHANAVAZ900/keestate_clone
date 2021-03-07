import React from 'react'
import './Header.css'
import { } from "@material-ui/core"


function Header() {
    return (
        <div className="header">
            <img className="header__icon"
            src="https://keestep.com/static/media/logo.b82f7861.png" alt="" />

            <div className="header__center">

            </div>

            <div className="header__right">
                <p>Home</p>
                <p>About</p>
                <p>Contact Us</p>
               
            </div>

        </div>
    )
}

export default Header
