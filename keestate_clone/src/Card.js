import { Button } from '@material-ui/core'
import React from 'react'
import "./Card.css"

function Card({ src, title}) {
    return (
        <div className="card">
            <img src={src} alt=""/>
            <div className="card__info">
                <Button>{title}</Button>
            </div>
        </div>
    )
}

export default Card
