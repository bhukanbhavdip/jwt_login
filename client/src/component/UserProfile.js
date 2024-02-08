import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
      })
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(!token){
        navigate("/login")
        }
    },)
    
    const handleUSerProfile = async()=>{
        const response=  await axios.post("http://localhost:8000/api/user-details",data,{
            headers: {
                Authorization: `jwt ${localStorage.getItem('token')}`
            }
        })
        console.log("response",response)
        setData(response.data.data) 
    }
    useEffect(()=>{
        if(token){
            handleUSerProfile();
        }
    },[])
    const handleLogout= ()=>{
        localStorage.clear();
        navigate('/login');
    }
  return (
    <>
        <div className="container mt-5">
            <strong>Hello {data.name}, Welcome to the DYNAMIC WORLD..!
            And Your Email Is : {data.email}
            </strong>

            
        </div>
        <button className='mt-5 mx-5 btn btn-primary' onClick={handleLogout}>
            Logout
        </button>
        
    </>
  )
}

export default UserProfile