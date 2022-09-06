import React,  {useState, useEffect, useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { DataContext } from "./context/DataContext"


import Header from "./components/Header"
import AddCandidateForm from "./components/AddCandidateForm"
import Footer from "./components/Footer"
import CandidateCard from "./components/CandidateCard"
import CandidateList from "./components/CandidateList"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Auth from "./components/Auth"

import ProtectedRoute from "./components/ProtectedRoute"


export default function App() {

    const { token, logout, user, addCandidate, changeCandidate } = useContext(DataContext)

    return (
      <>

        { token && <Navbar logout={logout}/>}

          <Header />
          
          <div className="content">
          <Routes>

            <Route path="/" 
            element = { token ? <Navigate to="/home"/> : <Auth />}
            />

            <Route path="/home" 
            element = {<ProtectedRoute token={token} redirectTo="/">
              <Home />
            </ProtectedRoute>
            }
            />

            <Route path="/add" 
            element = {<ProtectedRoute token={token} redirectTo="/">
              <AddCandidateForm submit={addCandidate} btnText="Add Candidate"/>
            </ProtectedRoute>
            }
            />

            <Route path="/candidateList" 
            element = { <ProtectedRoute token={token} redirectTo="/">
              <CandidateList submit={changeCandidate} /> 
              </ProtectedRoute> }
            /> 

            <Route path="/:_id" 
            element = { <ProtectedRoute token={token} redirectTo="/">
              <CandidateCard submit={changeCandidate} />
              </ProtectedRoute> }
              />

          </Routes>
          </div>

          <Footer />
      </>
    );
  }
  
  