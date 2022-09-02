import React from "react"
import {Link} from "react-router-dom"
import "../css/navbar.css"

function Navbar(props){

const { logout } = props

    return(
        <div>
            <div>
                    <nav className="navbar">
                            <Link to="/"  className="home"><h1 className="navbar--label"> Home </h1></Link>
                            <Link to="/add"  className='navbar--center'> <h1 className="navbar--label">Add Candidate</h1> </Link>
                            <Link to="/candidateList"  > <h1 className="navbar--label">Candidate List</h1> </Link>
                            <button onClick={logout} className='logout'> Logout </button>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar