import React from "react";
import { Aside } from "./components/Aside";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Main } from "./components/Main";
import { InputForm } from "./components/InputForm";
import { useState } from "react";

function App() {
  // const [sentences, setSentences] = useState([]); // State to manage sentences

  // // Function to add a new sentence
  // const addSentence = (sentence) => {
  //   setSentences([...sentences, sentence]);
  // };
  return (
    <>
      <div className="container bg-zinc-100">
        <AppBar />
        {/* <InputForm addSentence={addSentence} /> */}

        <Routes>
          <Route path="/expert" element={<Aside />} />
          <Route path="/polzov" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
