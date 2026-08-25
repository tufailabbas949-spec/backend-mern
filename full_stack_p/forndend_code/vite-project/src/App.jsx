import React from "react"
import {Route,Routes } from "react-router-dom"
import Feed from "./components/Feed"
import Create from "./components/Create"
import Welcome from "./components/Welcome"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<h1>home page</h1>}></Route>
      <Route path="/create" element={<Create />} >
      <Route path="welcome" element={<Welcome/>} />
      </Route>

      <Route path="/users" element={<Feed />} />
    </Routes>
    </>
  )
}
export default App
