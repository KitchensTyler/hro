import React, {useState, useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { useNavigate, useParams } from 'react-router-dom'
import AddCandidateForm from './AddCandidateForm'
import "../css/info.css"

const CandidateInfo = (props) => {

    const navigate = useNavigate()
  

    

    const {deleteCandidate, editCandidate, setUpdateCandidate} = useContext(DataContext)

    const {
        fullName, 
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

        function changeCandidate(updates, candidateId){
            editCandidate(updates, candidateId)
            console.log(setUpdateCandidate)
            setUpdateCandidate({
                fullName:"",
                applicationDate: "",
                applicationReviewed: "",
                resumeSubmitted: "",
                coverLetterSubmitted: "",
                initialInterview:  "",
                followUpInterview: "",
                offerSent: "",
                hireDate: ""
            })
            setEditToggle(false)
        }

    function remove(){
        deleteCandidate(_id)
        navigate("/candidateList")
    }

    function handleChange(event){
        const {name, value} = event.target
        setUpdateCandidate(prevThing => ({...prevThing, [name]: value}))
    }

    function back(){
        navigate("/candidateList")
    }

  return (
    <div className="container">
        { !editToggle ?
            <>
                <h2> {fullName}</h2>
                <hr/>
                <p> ID #: {_id} </p>
                <div>
                    <p> Application Date: {new Date(applicationDate).toLocaleDateString()} </p>
                    <p> Application Reviewed? {applicationReviewed ? "Yes" : "No"} </p>
                </div>
                <div>
                    <p> Resume on file? {resumeSubmitted ? "Yes" : "No"} </p>
                    <p> Cover Letter on file? {coverLetterSubmitted ? "Yes" : "No"} </p>
                </div>
                <div>
                    <p> Initial Interview Date: {new Date(initialInterview).toLocaleDateString()} </p>
                    <p> Follow-Up Interview Date: {new Date(followUpInterview).toLocaleDateString()} </p>
                </div>
                <div>
                    <p> Was an offer letter sent? {offerSent ? "Yes" : "No"} </p>
                    <p> Effective Hire Date: {new Date(hireDate).toLocaleDateString()} </p>
                </div>
                <hr/>
                <div className="buttons">
                    <button onClick={back}>Back</button>
                    <button onClick={toggle}>Edit</button>
                    <button onClick={remove}>Delete</button>
                </div>
            </>
            :
            <>
                <AddCandidateForm {...props} submit={changeCandidate} btnText="SubmitEdit" onchange={handleChange}/>
                <button onClick={toggle}>Exit</button>
            </>
        }
    </div>
  )
}

export default CandidateInfo