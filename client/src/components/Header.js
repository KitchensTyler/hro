import React from "react"
import Navbar from "./Navbar"
import '../css/Header.css'

function Header(){
    return(
        <>
            <div className="header">
                <h1>HRO</h1>
                <h4>Human Resources Optimizations</h4>
            </div>
            <Navbar/>
        </>
    )
}

export default Header