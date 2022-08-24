import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../DataContext"
import CandidateInfo from "./CandidateInfo"

export default function CandidateCard(props){

    const {_id} = useParams()
    const { getOneCandidate, oneCandidate} = useContext(DataContext)
    
    useEffect(() => {
        getOneCandidate(_id)
        console.log(oneCandidate)
    }, )

    
    return(
      
        <div>
            {oneCandidate.map( candidate => (
                <CandidateInfo {...candidate}
                key={candidate._id} />
            ))}
           </div>
    )
   
}



