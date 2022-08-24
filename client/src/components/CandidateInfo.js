import React from 'react'

const CandidateInfo = (props) => {

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


  return (
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
</>
  )
}

export default CandidateInfo