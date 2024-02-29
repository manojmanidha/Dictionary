import './App.css';
import { useEffect, useState } from "react";

  const dicvar = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  

function App() {
  const [term , setTerm]= useState('');
  const [result , setResult]= useState(null)

  const SearchWord=()=>{
    let loweterm = term.toLowerCase()
    let dicword = dicvar.find(word=>word.word.toLowerCase()===loweterm)

    if(dicword){
      setResult(dicword.meaning)
    }else{
      setResult('Word not found in the dictionary.')
    }
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input 
      type="text"
      value={term}
      onChange={(e)=>setTerm(e.target.value)}
      placeholder='Search for a word...'></input>
      <button onClick={SearchWord}>Search</button>
      <h3>Definition:</h3>
      {result && <p>{result}</p> }
    </div>
  );
}

export default App;
