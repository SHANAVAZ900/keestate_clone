import { Button } from '@material-ui/core'
import React from 'react'
import "./Card.css"

function Card({ src, title}) {
    return (
        <div className="card" variant="outlined">
            <img src={src} alt=""/>
            <div className="card__info" variant="outlined">
                <Button>{title}</Button>
            </div>
        </div>
    )
}

export default Card
