import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.scss'

function Register() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

     const navigate = useNavigate();

     const emailRef = useRef();
     const passwordRef = useRef();

     function handelEmail() {
          if (regex.test(emailRef.current.value)) {
               setEmail(emailRef.current.value);
               document.querySelector(".messageTag").style.opacity = 0;
          }
          else {
               document.querySelector(".messageTag").style.opacity = 1;
          }
     }

     function Registration() {
          document.querySelector(".messageBox").style.opacity = 1;
          try {
               fetch("http://localhost:8000/api/auth/register", {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         username: email,
                         email: email,
                         password: password,
                    }) // body data type must match "Content-Type" header

               }).then().then(() => {
                    navigate('/login');
                    // navigate("/login")
               }
               ).catch(() => {
                    document.querySelector(".error").classList.add("animate");  
               }
               )
          }
          catch (err) {
               document.querySelector(".error").classList.add("animate")
          }

     }

     function handelpassword(e) {
          e.preventDefault();
          if (passwordRef.current.value.length > 8) {
               setPassword(passwordRef.current.value)
               console.log("executing");
               Registration();
               document.querySelector(".messageTag").style.opacity = 0;
          }
          else {
               document.querySelector(".messageTag").style.opacity = 1;
          }
     }

     return (
          <div className='register'>
               <div className='messageBox'>
                    <p className='sucess'>Success!!!!</p>
                    <p className='error'> Some Error Occurred</p>
               </div>
               <div className='top'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="its the logo"></img>
                    <button className='loginBtn' onClick={() => { navigate("/login") }}> Sign In</button>
               </div>
               <div className='container'>
                    <h1>Unlimted Movies , TV show's and more</h1>
                    <h3>Watch anywhere , cancel anytime</h3>
                    <p>
                         Ready to watch enter your email to create or restart your membership.
                    </p>
                    {!email ?
                         (<div className='input'>
                              <span className='messageTag'>Enter a valid email</span>
                              <input type='email' placeholder="Email address" ref={emailRef} />
                              <button className='registerBtn' onClick={handelEmail}>Get Started
                                   <i class="fa-solid fa-angle-right"></i></button>
                         </div>)
                         :
                         (<form className='input'>
                              <span className='messageTag'>Password must be greater then 8 charecter</span>
                              <input type='password' placeholder="password" ref={passwordRef} />
                              <button className='registerBtn' onClick={handelpassword}> Start </button>
                         </form>
                         )}

               </div>
          </div>
     )
}

export default Register