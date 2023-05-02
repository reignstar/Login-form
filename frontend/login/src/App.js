import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login} from "./login";
import {Signup} from "./signup";
import {Navbar} from "./navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/create" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
