import { useLocation,useNavigate } from "react-router-dom"
import "./watch.scss"

function Watch() {

     const navigate = useNavigate()
     const location = useLocation();
     const movie = location.id;
     console.log(movie);
     return (
          <div className='watch'>
               <div className='backbtn' onClick={()=>{navigate("/")}}>
                    <i class="fa-solid fa-arrow-left" />
                    <span>Home</span>
               </div>
               <div className="videoDiv">
               <video className='video' autoPlay progress controls src='https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4'> </video>
               </div>
          </div>
     )
}

export default Watch