import "./Navbar.scss"


import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
     const [scrolling, setIsScrolling] = useState(true)

     function active() {
          document.querySelector(".options").classList.toggle("active")
          console.log(window.pageYOffset);
     }
     window.onscroll = () => {
          setIsScrolling(window.pageYOffset === 0 ? true : false);
          // console.log("is moved")
          return () => { window.onscroll = null }
     }

     return (

          <div className={scrolling ? "nav_bar scrolled" : "nav_bar"}>
               <div className="container">
                    <div className="left">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="its the logo"></img>
                         <Link className="nav_content" to="/"><span>Home</span></Link>
                         <Link className="nav_content" to="/series"><span>Series</span></Link>
                         <Link className="nav_content" to="/movies"><span>Movies</span></Link>
                         <Link className="nav_content" to="/newandpopular"><span>New and Popular</span></Link>
                         <Link className="nav_content" to="/mylist"><span>My List</span></Link>
                         
                    </div>
                    <div className="right">
                         <i class="fa-solid fa-magnifying-glass" />
                         <span>KID</span>
                         <i class="fa-solid fa-bell" />
                         <img
                              width="100%"
                              src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw" alt="user profile" />


                         <div className="extra_options" onClick={active}>
                              <span class="fa-solid fa-ellipsis-vertical" />
                              <div className="options">
                                   <span>Settign</span>
                                   <span>Logout</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar