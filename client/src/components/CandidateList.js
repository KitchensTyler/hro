import React, {useState, useContext, useEffect} from "react"
import { DataContext } from "../DataContext"
import Candidate from "./Candidate"
import "../css/list.css"

function CandidateList(){

    const {getCandidates, candidates, searchCandidates} = useContext(DataContext)
    const [input, setInput] = useState({name:''})

    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInputs => {
            return{
                ...prevInputs,
                [name]:value
            }
        })
        
    }

    function handleSearch(e){
        e.preventDefault()
        console.log(input.name)
        if(input.name === ''){
            console.log("not filtered")
            getCandidates()
        }else{
            console.log(`filtered by ${input.name}`)
            searchCandidates(input.name)
        }
    }

    useEffect(() => {
        getCandidates()
        console.log("candidates", candidates)
    }, [])

    return(        
        <div className="content">
            <form onSubmit={handleSearch} className="search">
                <input name="name" value={input.name} onChange={handleChange} placeholder="Search by Name"/>
                <button>Search</button>
            </form>
            <hr/>
            <div className="candidate">
           {candidates.map( candidate => (
            <Candidate {...candidate}
            key={candidate._id}
            />
           ))}
           </div>
        </div>
        
    )
}

export default CandidateList

///candidate list will return firstname, lastname, and _id. clicking onto the names or id should open up the card for each specific employee via <Link />. 