import React from 'react';
import './About.css';


function About() {
    return (
        <div className="about">
            <div className="about__info">
                <h1>
                    Who we are?
                </h1>
                <p>
                    We are an early-stage education-tech startup founded in 2020.
                    We are building a college social platform that focuses on the gamification educationin college.
                </p>
            </div>     
            <div className="about__team">
                <h1>Founding Team</h1>
                <h2>Joel Vinay Kumar, co-founder(CTO)</h2>
                <p>
                    Post-graduation from IIITH in 2019 and have 2 years of experience in building SaaS products.

                </p>
            </div>
            <div className="about__team">
                <h2>Thakur Ujwal Singh, co-founder(CBO)</h2>
                <p>
                    MBA from IIM Sirmaur in 2020 and have 3 years of experience in ed-tech
                    sector and e-commerce.

                </p>
            </div>
            <div className="about__team">
                <h2>Roopesh P, founding team(CMO)</h2>
                <p>
                     MBA from IIM Sirmaur in 2020, B.Tech from SRM University 2012 and have 3
                    years of experience in the staffing industry and ed-tech.
                </p>
            </div>
            
            
        </div>
    )
}

export default About
