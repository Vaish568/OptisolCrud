import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleUser from "./SingleUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/:id" element={<SingleUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
