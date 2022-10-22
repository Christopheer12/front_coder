import React, { useEffect, useState } from "react";
import Chat from "../componets/Form/Chat/Chat";
import Form from "../componets/Form/Form";
import Listado from "../componets/Listado/Listado";
import Navbar from "../componets/Navbar/Navbar";

const Dashboard = () => {

const [productos, setProductos] = useState([]);
const variable = "hola";

useEffect(() => {
 fetch("http://localhost:8080/productos")
    .then((res) => res.json())
    .then((res) => setProductos(res));
}, []);




  return <div>

     <Navbar/>
     
   <Listado items= {productos}/>
   <Form/>
     <Chat/>
  
  </div>;
};

export default Dashboard;
