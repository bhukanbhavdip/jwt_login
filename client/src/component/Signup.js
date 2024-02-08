import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    console.log(data)
    const handleSubmit = async (e) => {

        e.preventDefault();
            const response = await axios.post("http://localhost:8000/api/sign-up", data)
            console.log("response", response)
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/login')
            }
            if (response.data.error) {
                toast.error(response.data.message);
                setData({
                    name: "",
                    email: "",
                    password: "",
                })
            }
    }
    return (
        <>
            <section className="vh-100 bg-image"
                style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="name" >Your Name</label>
                                                <input type="text" id="name" name='name' value={data.name} className="form-control form-control-lg" onChange={handleOnChange} />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <label className="form-label"  htmlFor="email">Your Email</label>
                                                <input type="email" id="email" value={data.email} name='email' className="form-control form-control-lg" onChange={handleOnChange} />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="password">Your Password</label>
                                                <input type="password" id="password" value={data.password} name='password' className="form-control form-control-lg" onChange={handleOnChange} />
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <u>Terms of service</u>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Sign Up</button>
                                            </div>

                                        </form>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                                            className="fw-bold text-body"><u>Login here</u></Link></p>


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

export default Signup