import React, {useState, useEffect} from "react"
import axios from "axios"


const DataContext = React.createContext()

function DataContextProvider(props){

    const [candidates, setCandidates] = useState([])


    function getCandidates(){
        axios.get("http://localhost:9000/candidates")
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err))
    }

    function addCandidate(newCandidate){
        axios.post("http://localhost:9000/candidates", newCandidate)
            .then(res => {
                setCandidates(prevCandidates => [...prevCandidates, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteCandidate(candidateId){
        axios.delete(`http://localhost:9000/candidates/${candidateId}`)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate._id !== candidateId))
        })
        .catch(err => console.log(err))
    }

    function editCandidate(updates, candidateId){
        axios.put(`http://localhost:9000/candidates/${candidateId}`, updates)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.map(candidate => candidate._id !== candidateId ? candidate : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCandidates()
    },[])

    return(
        <DataContext.Provider value={{
            candidates,
            setCandidates,
            getCandidates,
            editCandidate,
            deleteCandidate,
            addCandidate,
        }}>
            {props.children}
        </DataContext.Provider>
    )

}


export {DataContextProvider, DataContext}