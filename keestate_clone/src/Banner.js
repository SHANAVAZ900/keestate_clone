import React from 'react';
import "./Banner.css";
import {Button} from "@material-ui/core";





function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Power your college into the digital</h1>
                <h4>The most advanced & interactive digital platform for Graduate,Post-Graduate colleges</h4>
                <Button variant='outlined'>Learn More</Button>
               
            </div>
            <div className="banner__middle">


            </div>
            <div className="banner__right">
                <img  src="https://www.viewsonic.com/library/wp-content/uploads/2019/08/LB0064-hero-compressed.png" alt="" />
            </div>
           


            
        </div>
    )
}

export default Banner
