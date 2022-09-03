import React, { useContext, } from "react"
import "../css/home.css"
import { DataContext } from '../context/DataContext'

export default function Home(){
    
    const {  user: {username}} = useContext(DataContext)

    return(

        // filter through candidatelist looking for status.NEW = new candidiate 

        <div className="home">
            <div className="home--content">
                <h1 className="title">Welcome, {username}!</h1>
                <h4>Theres Currently {}, New Candidates to View</h4>
                <hr/>
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>To provide HR heros with tools to help their teams succeed</p>
                </div>
                <hr/>
                <div className="about">
                    <h3>About the Site</h3>
                    <p>Human Resources Optimizations (HRO) is a tool we created to give HR heros a one stop shop for tracking candidates and important hiring information. 
                       Originally Made by Tony Herrera and Tyler Kitchens for the VSchool Level 5 Capstone, revamped and improved by Tyler Kitchens in the level 6 capstone.
                    </p>
                </div>
            </div>
        </div>
    )
}

 