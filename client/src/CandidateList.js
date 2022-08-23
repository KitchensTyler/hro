import React, {useContext} from "react"
import { DataContext } from "./dataContext"
import CandidateCard from "./CandidateCard"


function CandidateList(){
    const {candidates} = useContext(DataContext)

    return(
        <div>
            { candidates.map(candidate => {
                return(
                    <CandidateCard 
                        {...candidate}
                        key = {candidate._id ? candidate._id : 1}
                    />
                )
            })}
        </div>
    )
}

export default CandidateList