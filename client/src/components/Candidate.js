import React from 'react'
import {Link} from "react-router-dom"
import "../css/candidate.css"

const Candidate = (props) => {
    const {fullName, _id} = props
  return (
    <>
      < div className="card">
        <Link className='can-card' to = {`/${_id}`} style={{textDecoration:"none", color:"white"}}><h2>{fullName}</h2></Link>
        <p> Id: {_id}</p>
      </div>
    </>
  )
}

export default Candidate