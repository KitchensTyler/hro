import React, {useState, useContext, useEffect} from "react"
import { DataContext } from "../DataContext"
import Candidate from "./Candidate"


function CandidateList(){

    const {getCandidates, candidates} = useContext(DataContext)
    const [input, setInput] = useState({name:``})

    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value}})
    }

    function handleSearch(e){
        e.preventDefault()
        console.log(input)
    }

    useEffect(() => {
        getCandidates()
        console.log("candidates", candidates)
    }, [])

    return(        
        <div>
            <form onSubmit={handleSearch}>
                <input name="name" value={input.name} onChange={handleChange} placeholder="Search by Name"/>
                <button>Search</button>
            </form>
            <div>
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