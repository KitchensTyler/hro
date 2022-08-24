import React, {useContext, useEffect} from "react"
import { DataContext } from "../DataContext"
import Candidate from "./Candidate"


function CandidateList(){


    const {getCandidates, candidates} = useContext(DataContext)

    useEffect(() => {
        getCandidates()
        console.log("candidates", candidates)
    }, )

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