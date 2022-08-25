import React, {useState, useContext} from 'react'
import { DataContext } from '../DataContext'
import { useNavigate } from 'react-router-dom'
import AddCandidateForm from './AddCandidateForm'

const CandidateInfo = (props) => {

    const navigate = useNavigate()

    const {deleteCandidate, editCandidate} = useContext(DataContext)

    const {
        firstName,
        lastName, 
        applicationDate,
        applicationReviewed,
        resumeSubmitted,
        coverLetterSubmitted,
        initialInterview,
        followUpInterview,
        offerSent,
        hireDate,
        _id
    }= props

    const [editToggle, setEditToggle] = useState(false)

        function toggle(){
            setEditToggle(prevToggle => !prevToggle)
            console.log(toggle)
        }

    function remove(){
        deleteCandidate(_id)
        navigate("/candidateList")
    }

  return (
    <div>
        { !editToggle ?
            <>
                <h2> {lastName}, {firstName} </h2>
                <p> ID #: {_id} </p>
                <div>
                    <p> Application Date: {applicationDate} </p>
                    <p> Application Reviewed? {applicationReviewed ? "Yes" : "No"} </p>
                </div>
                <div>
                    <p> Resume on file? {resumeSubmitted ? "Yes" : "No"} </p>
                    <p> Cover Letter on file? {coverLetterSubmitted ? "Yes" : "No"} </p>
                </div>
                <div>
                    <p> Initial Interview Date: {initialInterview} </p>
                    <p> Follow-Up Interview Date: {followUpInterview} </p>
                </div>
                <div>
                    <p> Was an offer letter sent? {offerSent ? "Yes" : "No"} </p>
                    <p> Effective Hire Date: {hireDate} </p>
                </div>
                <div>
                    <button onClick={toggle}>Edit</button>
                    <button onClick={remove}>Delete</button>
                </div>
            </>
            :
            <>
                <AddCandidateForm {...props} submit={editCandidate} toggle={toggle} _id={_id} btnText="SubmitEdit"/>
                <button onClick={toggle}>X</button>
            </>
        }
    </div>
  )
}

export default CandidateInfo