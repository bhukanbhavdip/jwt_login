import Login from "./component/Login";
import Signup from "./component/Signup";
import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserProfile from "./component/UserProfile";

function App() {

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
    
      
    </>
  );
}

export default App;
