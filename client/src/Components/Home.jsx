import "../CSS/Home.css"
import Navbar from "./NavBar/Navbar"
import Featured from './Feature/Feature';
import List from "./List/List";
import { useEffect, useState } from "react";


const Home = (type) => {

     const [list, setList] = useState([]);
     const [genre, setGenre] = useState(null);


     useEffect(() => {

          const getRandomList = () => {

               try {
                    // `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, 
                    fetch("http://localhost:8000/api/list ").then((resp) => { return resp.json() }).then((data) => { setList(data)})
                    // , {
                    //      method: 'GET',
                    //      headers: {
                    //           'Content-Type': 'application/json',
                    //           'token': "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmZlOGEyOTA0YzQ0OTk4YTYwMTM5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzUyMTQ3NywiZXhwIjoxNjczOTUzNDc3fQ.Dxj2dA3C-saoSEhNYgolXz7AhHYJ-c_-gNbRCQjQHDU"
                    //      }
                    // }
                    // console.log("responce", responce);
               }
               catch (err) {
                    console.log("err", err);
               }
          }
          getRandomList();
     }, [type, genre])
     return (
          <div>
               <div className="Home">
                    <Navbar />
                    <Featured type={type} />
                    {/* calling full list 10 times  */}
                    {list.map((list) => (
                         <List list={list} />
                    ))}
                    
               </div>
          </div>
     )
}

export default Home