import { Form } from "react-bootstrap";
import Chat from "./componets/Form/Chat/Chat";
import Navbar from "./componets/Navbar/Navbar";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    
     </>
  );
}

export default App;
