import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div>
            <div>
                    <nav className="overlay-content">
                        <Link to="/" style={{textDecoration:'none'}} >Home</Link>
                        <Link to="add" style={{textDecoration:'none'}} >Add Candidate</Link>
                        <Link to="search" style={{textDecoration:'none'}} >Search</Link>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar