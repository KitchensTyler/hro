import React from 'react'
import {Link} from "react-router-dom"

const Candidate = (props) => {
    const {firstName, lastName, _id} = props
  return (
    <>
        <Link className='can-card' to = {`/candidateCard/${_id}`}><h2>{firstName} {lastName}</h2></Link>
        <p> Id: {_id}</p>
    </>
  )
}

export default Candidate