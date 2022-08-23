import React from "react"

function CandidateCard(props){

    const {
        firstName,
        lastName, 
        applicationDate,
        applicationReviewed,
        resumeSubmitted,
        coverLetterSubmitted,
        preInterview,
        initialInterview,
        finalInterview,
        offerSent,
        hireDate
    }= props

    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <div>
                <p>Application Date:{applicationDate}</p>
                <p>Application Reviewed?{applicationReviewed ? "Yes" : "No"}</p>
            </div>
            <div>
                <p>Resume on file?{resumeSubmitted ? "Yes" : "No"}</p>
                <p>Cover Letter on file?{coverLetterSubmitted ? "Yes" : "No"}</p>
            </div>
            <div>
                <p>Was the pre-interview completed?{preInterview ? "Yes" : "No"}</p>
                <p>Was the pre-interview completed?{initialInterview ? "Yes" : "No"}</p>
                <p>Was the pre-interview completed?{finalInterview ? "Yes" : "No"}</p>
            </div>
            <div>
                <p>Was an offer sent?{offerSent ? "Yes" : "No"}</p>
                <p>Hire Date:{hireDate}</p>
            </div>
        </div>
    )
}



export default CandidateCard