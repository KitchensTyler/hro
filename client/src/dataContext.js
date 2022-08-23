import React, {useState, useEffect} from "react"
import axios from "axios"

const DataContext = React.createContext()

function DataContextProvider(props){

    const [candidates, setCandidates] = useState([])

    function getCandidates(){
        axios.get("/origin/search")
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCandidates()
    },[])

    return(
        <DataContext.Provider value={{
            candidates,
        }}>
            {props.children}
        </DataContext.Provider>
    )

}


export {DataContextProvider, DataContext}