import React from "react";
import { Aside } from "./components/Aside";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Main } from "./components/Main";

function App() {
  return (
    <>
    <div className="container bg-zinc-100">
      <AppBar/>
      
      <Routes>
        <Route path="/expert" element={<Aside/>}/>
        <Route path="/polzov" element={<Main/>}/>
      </Routes>
    </div>

  
    </>
  );
}

export default App;
