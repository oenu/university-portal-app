import { useState } from "react";
import logo from "./Assets/logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
