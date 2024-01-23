import {Link} from "react-router-dom"
import { Ref, useRef, useState } from "react";
import axiosClient from "../axios.client";
import { useStateContext } from "../contexts/ContextProvider";
import {createRef} from "react";

export default function Login() {

    const emailRef = createRef()
    const passwordRef = createRef()
    const [errors, setErrors] = useState(null)
    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }
          axiosClient.post('/login', payload)
            .then(({data}) => {
              setUser(data.user)
              setToken(data.token);
            })
            .catch((err) => {
              const response = err.response;
              if (response && response.status === 422) {
                setMessage(response.data.message)
              }
            })

    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                    Logging into your account
                    </h1>
                    <input ref={emailRef} type="email" placeholder="Email Address"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
