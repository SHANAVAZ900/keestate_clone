import React from 'react';
import "./Home.css";
import Banner from './Banner'
import Card from "./Card"
import Form from "./Form"


function Home() {
    return (
        <div className="home">
            {/* Banner */}
            <Banner />

            <div className="home__section">
                <Card src="https://keestep.com/static/media/discussion.d31f13e2.png" title="Book a Demo"/>
                <Card src="https://www.growthengineering.co.uk/wp-content/uploads/2014/07/gamify-your-goals.jpg" title="Book a Demo"/>
                <Card src="https://coreaxis.com/wp-content/uploads/2020/10/when-to-use-gamification.jpg" title="Book a Demo"/>

            </div>

            <Form />

        

        </div>
    )
}

export default Home

