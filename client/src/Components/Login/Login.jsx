
import { useRef } from 'react';
import { useNavigate,Link } from 'react-router-dom'
import './login.scss'


function Login() {
     
     const navigate = useNavigate();
     const emailRef = useRef();
     const passwordRef = useRef();
     

     function LoginME(e) {
          e.preventDefault();
          try {
               fetch("http://localhost:8000/api/auth/login",
                    {
                         method: "POST",
                         headers: { 'Content-Type': 'application/json' },
                         body: JSON.stringify({
                              "email": emailRef.current.value,
                              "password": passwordRef.current.value
                         })
                    })
                    .then((resp) => { return resp.json() })
                    .then((result) => {
                         localStorage.setItem("token", result.accessToken)
                         
                    })
                    .catch(
                         passwordRef.current.value="",
                         document.querySelector(".error").classList.add("animate")
                    )
          } catch {
               
               document.querySelector(".error").classList.add("animate")
               // passwordRef.current.value = "",
          }
     }

     return (

          <div className='login'>
               <p className='error'> Some Error Occurred</p>
               <div className='top'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"  alt="its the logo"></img>
                    
               </div>
               <div className='container'>
                    <form>
                         <h1>Sign In</h1>
                         <input className='inputEmail' ref={emailRef} type="email" placeholder = "Email or phone number"/>
                         <input className='inputpassword' ref={passwordRef} type="password" placeholder = "Password"/>
                         <button onClick={LoginME}>Sign In</button>
                         <p>New to Netflix? <Link className='gotoLogin' to={navigate("/register")}>Sign up now.</Link></p>
                         <p className='securityDesc'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                    </form>
               </div>
          </div>
     )
}

export default Login