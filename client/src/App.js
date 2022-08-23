import React from "react"
import {Routes, Route} from "react-router-dom"
import {DataContextProvider} from "./dataContext"
import Navbar from "./Navbar"
import Home from "./Home"
import AddCandidate from "./AddCandidate"
import Search from "./Search"
import Footer from "./Footer"

function App() {
    return (
      <>
        <DataContextProvider>
          <Navbar />
          <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="add" element = {<AddCandidate />}/>
            <Route path="search" element = {<Search />}/>
          </Routes>
          </div>
          <Footer />
        </DataContextProvider>
      </>
    );
  }
  
  export default App;