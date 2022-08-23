import React, {useContext, useEffect} from "react"
import { DataContext } from "../DataContext"
import CandidateCard from "./CandidateCard"
import Candidate from "./Candidate"


function CandidateList(props){


    const {getCandidates, candidates} = useContext(DataContext)
    const {firstName, lastName, _id} = props

    useEffect(() => {
        getCandidates()
        console.log("candidates", candidates)
    }, [])

    return(
        
        <div>
           {candidates.map( candidate => (
            <Candidate {...candidate}
            key={candidate._id}
            />
           ))}
        </div>
        
    )
}

export default CandidateList

///candidate list will return firstname, lastname, and _id. clicking onto the names or id should open up the card for each specific employee via <Link />. 