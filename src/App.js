import React from "react";
import './App.css';
import ApiDelete from "./Components/ApiDelete";
import ApiGet from "./Components/ApiGet"
import ApiPost from "./Components/ApiPost";
function App() {
  return (
    <div className="App">
      
      <h1>React App</h1>
      <ApiPost />
      <ApiGet />
      <ApiDelete/>
    </div>
  );
}

export default App;
