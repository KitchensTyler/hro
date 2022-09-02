import React, {useState, useContext} from "react"
import { DataContext } from "../context/DataContext"
import "../css/form.css"

export default function AddCandidateForm(props){
    const initInputs = {
        fullName: props.fullName || "", applicationDate: props.applicationDate || "", applicationReviewed: props.applicationReviewed === false ? false : true,
        resumeSubmitted: props.resumeSubmitted === false ? false : true, coverLetterSubmitted: props.coverLetterSubmitted === false ? false : true, initialInterview: props.initialInterview || "", followUpInterview: props.followUpInterview || "", 
        offerSent: props.offerSent === false ? false : true, hireDate: props.hireDate || ""
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
        // props.toggle()
    }


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label for="fullName"> Candidate Name </label>
                    <input
                        type="text"
                        name="fullName"
                        value={inputs.fullName}
                        onChange={handleChange}
                        placeholder="Full Name" />
                </div>
                <div className="input">
                    <label for="applicationDate"> Application Date: </label>
                    <input
                        type="date"
                        name="applicationDate"
                        value={inputs.applicationDate}
                        onChange={handleChange} />
                </div>
                <div className="input">
                    <label for="applicationReviewed"> Application Reviewed: </label>
                    <select name = "applicationReviewed"
                        value={inputs.applicationReviewed}
                        onChange={handleChange}
                        className='form-select'>
                            <option value="true">True</option>    
                            <option value="false">False</option>
                    </select> 
                </div>
                <div className="input">
                    <label for="resumeSubmitted"> Resume Submitted: </label>
                    <select name = "resumeSubmitted"
                        value={inputs.resumeSubmitted}
                        onChange={handleChange}
                        className='form-select'>
                            <option value="true">True</option>    
                            <option value="false">False</option>
                    </select> 
                </div>
                <div className="input">
                    <label for="coverLetterSubmitted"> Cover Letter Submitted: </label>
                    <select name = "coverLetterSubmitted"
                        value={inputs.coverLetterSubmitted}
                        onChange={handleChange}
                        className='form-select'>
                            <option value="true">True</option>    
                            <option value="false">False</option>
                    </select> 
                </div>
                <div className="input">
                    <label for="initialInterview"> Initial Interview Date: </label>
                    <input
                        type="date"
                        name="initialInterview"
                        value={inputs.initialInterview}
                        onChange={handleChange} />
                </div>
                <div className="input">
                    <label for="followUpInterview"> Follow-Up Interview Date: </label>
                    <input
                        type="date"
                        name="followUpInterview"
                        value={inputs.followUpInterview}
                        onChange={handleChange} />
                </div>    
                <div className="input">
                    <label for="offerSent"> Offer Letter Sent: </label>
                    <select name = "offerSent"
                        value={inputs.offerSent}
                        onChange={handleChange}
                        className='form-select'>
                            <option value="true">True</option>    
                            <option value="false">False</option>
                    </select> 
                </div>
                <div className="input">
                    <label for="hireDate"> Hire Date: </label>
                    <input
                        type="date"
                        name="hireDate"
                        value={inputs.hireDate}
                        onChange={handleChange} /> 
                </div>
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

