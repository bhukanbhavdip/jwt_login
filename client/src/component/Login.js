import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate=useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    // const [err,seterr]=useState(false)
    const handleOnChange=(e)=>{
        const {name,value} = e.target
        setData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response =  await axios.post("http://localhost:8000/api/login",data)
            console.log("response",response)
            if(response.data.error){
                toast.error(response.data.message);
                console.log(response.data.message);
                setData({
                    email: "",
                    password: ""
                })
                // seterr(true)
            }
            if(response.data.success){
                toast.success(response.data.message);
                localStorage.setItem("token",response.data.token);
                navigate("/user-profile")
            }
        } catch (error) {
            
        }
        
    }
    console.log("data",data);
//   useEffect(() => {
//    if(token){
//     navigate('/user-profile')
//    }
//   }, [])
  

    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <form onSubmit={handleSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label"   htmlFor="email">Email</label>
                                            <input type="email" id="email"  value={data.email} name='email' className="form-control form-control-lg" onChange={handleOnChange} />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label"   htmlFor="password">Password</label>
                                            <input type="password" id="password" name='password' value={data.password} className="form-control form-control-lg" onChange={handleOnChange} />
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        </form>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <Link to="/" className="text-white-50 fw-bold">Sign Up</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login