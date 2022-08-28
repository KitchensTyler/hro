import React, {useState, useEffect, useContext} from "react"
import {Routes, Route} from "react-router-dom"
import {DataContext} from "./DataContext"
import Header from "./components/Header"
import Home from "./components/Home"
import AddCandidateForm from "./components/AddCandidateForm"
import Footer from "./components/Footer"
import CandidateCard from "./components/CandidateCard"
import CandidateList from "./components/CandidateList"

function App() {
    const [candidates, setCandidates] = useState([])

    const {addCandidate, changeCandidate} = useContext(DataContext)

    return (
      <>
          <Header />
          <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/add" element = {<AddCandidateForm submit={addCandidate} btnText="Add Candidate"/>}/>
            <Route path="/candidateList" element = {<CandidateList submit={changeCandidate}/>}/> 
            <Route path="/candidateCard/:_id/" element = {<CandidateCard />}/>
          </Routes>
          </div>
          <Footer />
      </>
    );
  }
  
  export default App;