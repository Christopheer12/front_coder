import { Form } from "react-bootstrap";
import Chat from "./componets/Form/Chat/Chat";
import Historial from "./componets/Historial/Historial";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    
    <div className="App">
     <Navbar/>
     <Form/>
    
     <Chat/>
     
    </div>
  );
}

export default App;
