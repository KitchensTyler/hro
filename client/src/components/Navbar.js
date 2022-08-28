import React from "react"
import {Link} from "react-router-dom"
import "../css/navbar.css"

function Navbar(){

    return(
        <div>
            <div>
                    <nav className="navbar">
                            <Link to="/" style={{textDecoration:'none'}} className="home"><h1 className="navbar--label"> Home </h1></Link>
                            <Link to="/add" style={{textDecoration:'none'}} className='navbar--center'> <h1 className="navbar--label">Add Candidate</h1> </Link>
                            <Link to="/candidateList" style={{textDecoration:'none'}} > <h1 className="navbar--label">Candidate List</h1> </Link>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar