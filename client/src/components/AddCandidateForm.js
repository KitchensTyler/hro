import React, {useState, useContext} from "react"
import { DataContext } from "../DataContext"


export default function AddCandidateForm(props){
    const initInputs = {
        firstName: props.firstName || "", lastName: props.lastName || "", applicationDate: props.applicationDate || "", applicationReviewed: props.applicationReviewed || true,
        resumeSubmitted: props.resumeSubmitted || true, coverLetterSubmitted: props.coverLetterSubmitted || true, initialInterview: props.initialInterview || "", followUpInterview: props.followUpInterview || "", 
        offerSent: props.offerSent || false, hireDate: props.hireDate || ""
    }
    const {addCandidate} = useContext(DataContext)
    const [inputs, setInputs] = useState(initInputs)
    
    
    function handleChange(e){
        console.log(e.target.type)
        const {name, value, type} = e.target
        setInputs(prevInputs => {
            if(type === "select-one"){
                return {...prevInputs, 
                    [name]: value === "true" ? true : false}
            }
            return {...prevInputs, [name]: value}})
    }

    function handleSubmit(e){
        e.preventDefault()
        setInputs(initInputs)
        props.submit(inputs, props._id)
        props.toggle()
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name" />

                <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name" />


            <label for="resumeSubmitted"> Resume Submitted: </label>
                <select name = "resumeSubmitted"
                value={inputs.resumeSubmitted}
                onChange={handleChange}
                className='form-select'>
                    <option value="true">True</option>    
                    <option value="false">False</option>
                </select> 

            <label for="coverLetterSubmitted"> Cover Letter Submitted: </label>
                <select name = "coverLetterSubmitted"
                value={inputs.coverLetterSubmitted}
                onChange={handleChange}
                className='form-select'>
                    <option value="true">True</option>    
                    <option value="false">False</option>
                </select> 

            <label for="applicationDate"> Application Date: </label>
                <input
                type="date"
                name="applicationDate"
                value={inputs.applicationDate}
                onChange={handleChange} />


            <label for="applicationReviewed"> Application Reviewed: </label>
                <select name = "applicationReviewed"
                value={inputs.applicationReviewed}
                onChange={handleChange}
                className='form-select'>
                    <option value="true">True</option>    
                    <option value="false">False</option>
                </select> 

            <label for="initialInterview"> Initial Interview Date: </label>
                <input
                type="date"
                name="initialInterview"
                value={inputs.initialInterview}
                onChange={handleChange} />

            <label for="followUpInterview"> Follow-Up Interview Date: </label>
                <input
                type="date"
                name="followUpInterview"
                value={inputs.followUpInterview}
                onChange={handleChange} />

            <label for="offerSent"> Offer Letter Sent: </label>
                <select name = "offerSent"
                value={inputs.offerSent}
                onChange={handleChange}
                className='form-select'>
                    <option value="true">True</option>    
                    <option value="false">False</option>
                </select> 

            <label for="hireDate"> Hire Date: </label>
                <input
                type="date"
                name="hireDate"
                value={inputs.hireDate}
                onChange={handleChange} /> 

        <button>{props.btnText}</button>
            </form>
        </div>
    )
}

