import React, {useState, useEffect} from "react"
import axios from "axios"

export const DataContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})



export default function DataContextProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token")  || "",
        candidates: [],
        errMsg: ""
       }

    const [userState, setUserState] = useState(initState)   
    const [candidates, setCandidates] = useState([])
    const [oneCandidate, setOneCandidate] = useState([])
    const [updateCandidate, setUpdateCandidate] = useState({})
   
    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            })) 
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err =>handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            getCandidates: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState( prevState => ({
            ...prevState, 
            errMsg: ""
        }))
    }
    
    function getOneCandidate(_id){
        axios.get(`api/candidates/${_id}`)
        .then(res => setOneCandidate(res.data))
        .catch(err => console.log(err))
    }

    
    function searchCandidates(name){
        axios.get(`api/candidates/search?candidate=${name}`)
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err))
    }
    

    function getCandidates(){
        axios.get("/api/candidates")
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err))
    }

    function addCandidate(newCandidate){
        axios.post("/api/candidates", newCandidate)
            .then(res => {
                setCandidates(prevCandidates => [...prevCandidates, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteCandidate(candidateId){
        axios.delete(`api/candidates/${candidateId}`)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate._id !== candidateId))
        })
        .catch(err => console.log(err))
    }

    function editCandidate(updates, candidateId){
        axios.put(`api/candidates/${candidateId}`, updates)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.map(candidate => candidate._id !== candidateId ? candidate : res.data))
        })
        .catch(err => console.log(err))
    }


    return(
        <DataContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            resetAuthErr,
            candidates,
            setCandidates,
            getCandidates,
            editCandidate,
            deleteCandidate,
            addCandidate,
            getOneCandidate,
            oneCandidate,
            updateCandidate,
            setUpdateCandidate,
            searchCandidates,
            userAxios
        }}>
            {props.children}
        </DataContext.Provider>
    )

}

