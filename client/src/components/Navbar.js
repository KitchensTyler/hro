import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div>
            <div>
                    <nav className="navbar">
                        <Link to="/" style={{textDecoration:'none'}} > Home </Link>
                        <Link to="/add" style={{textDecoration:'none'}} > Add Candidate </Link>
                        <Link to="/search" style={{textDecoration:'none'}} > Search Candidates</Link>
                        <Link to="/candidateList" style={{textDecoration:'none'}} > Candidate List </Link>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar