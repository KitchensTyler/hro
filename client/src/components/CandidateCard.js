import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { DataContext } from "../DataContext"

export default function CandidateCard(props){

    const {_id} = useParams()

  /// cards will be displayed by mapping through candidate list and using the _id <div>
        //     { candidateList.map(candidate => {
        //         return(
        //           
        //                 {...candidatelist}
        //                 key = {candidate._id ? candidate._id : 1}
        //             />
        //         )
        //     })}
        // </div>

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
        hireDate
    }= props

    console.log("applicationdate", applicationDate)
    
    return(
        <div>
            <h2> {lastName}, {firstName} </h2>
            <div>
                <p> Application Date:{applicationDate} </p>
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
        </div>
    )
   
}



