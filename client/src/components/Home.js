import React from "react"
import "../css/home.css"

function Home(){
    

    return(
        <div className="home">
            <div className="home--content">
                <h1 className="title">Welcome</h1>
                <hr/>
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>To provide HR heros with tools to help their teams succeed</p>
                </div>
                <hr/>
                <div className="about">
                    <h3>About the Site</h3>
                    <p>Human Resources Optimizations (HRO) is a tool we created to give HR heros a one stop shop for tracking candidates and important hiring information. 
                        Made by Tony Herrera and Tyler Kitchens for the VSchool Level 5 Capstone. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home