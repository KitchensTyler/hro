import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export const DataContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})




export default function DataContextProvider(props){

    // const { _id } = useParams()

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
            getCandidates()
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
        // const { _id } = useParams()
        userAxios.get(`api/candidates/candidateCard/${_id}`)
        .then(res => setOneCandidate(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    
    function searchCandidates(name){
        userAxios.get(`api/candidates/search?candidate=${name}`)
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err))
    }
    

    function getCandidates(){
        userAxios.get('/api/candidates/')
        .then(res => setCandidates(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }


    function addCandidate(newCandidate){
        userAxios.post("/api/candidates", newCandidate)
            .then( res => {
              setUserState(prevState => ({
                ...prevState,
                candidates: [...prevState.candidates, res.data]
              }))  
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteCandidate(candidateId){
        userAxios.delete(`api/candidates/${candidateId}`)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate._id !== candidateId))
        })
        .catch(err => console.log(err))
    }

    function editCandidate(updates, candidateId){
        axios.put(`/api/candidates/${candidateId}`, updates)
        .then(res => {
            setCandidates(prevCandidates => prevCandidates.map(candidate => candidate._id !== candidateId ? candidate : res.data))
        })
        .catch(err => console.log(err))
    }

    // function submit(newCandidate){
    //     addCandidate(newCandidate)
    // }

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
            userAxios,
    
        }}>
            {props.children}
        </DataContext.Provider>
    )

}


