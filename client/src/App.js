import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Routes, Route} from "react-router-dom"
import {DataContextProvider} from "./DataContext"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddCandidateForm from "./components/AddCandidateForm"
import Search from "./components/Search"
import Footer from "./components/Footer"
import CandidateCard from "./components/CandidateCard"
import CandidateList from "./components/CandidateList"

function App() {
    const [candidates, setCandidates] = useState([])

    return (
      <>
        <DataContextProvider>
          <Navbar />
          <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/add" element = {<AddCandidateForm />}/>
            <Route path="/search" element = {<Search />}/>
            <Route path="/candidateList" element = {<CandidateList />}/> 
            <Route path="/candidateCard/:_id/" element = {<CandidateCard />}/>
          </Routes>
          </div>
          <Footer />
        </DataContextProvider>
      </>
    );
  }
  
  export default App;