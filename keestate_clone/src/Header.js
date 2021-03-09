import React from 'react'
import './Header.css'
import { } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./Form"


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon"
                src="https://keestep.com/static/media/logo.b82f7861.png" alt="" />
            </Link>
            
    
            

            <div className="header__center">

            </div>

            <div className="header__right">
                <Link to ="/" style={{ textDecoration: 'none',hover:{color:'rgb(218, 73, 29)'}}}>
                    <p>Home</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none'}}>
                    <p>About</p>
                </Link>
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <p>Contact Us</p>
                </Link>
                
               
            </div>

        </div>
    )
}

export default Header
