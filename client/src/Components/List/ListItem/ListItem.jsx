import { useEffect, useState } from "react"
import "./listItem.scss"
import { Link } from "react-router-dom";

function ListItem({ index, item }) {

     const [isHovered, setIsHovered] = useState(false)
     const [movie, setMovie] = useState([]);
     // const trailer = "https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4"
     useEffect((() => {
          const getMovieList = () => {
               try {
                    fetch(`http://localhost:8000/api/movies/find/${item}`, {
                         headers: { 'Content-Type': 'application/json' }
                    }).then((resp) => { return resp.json() }).then((data) => {
                         setMovie(data)
                    })
               } catch (err) {
                    console.log(err);
               }
          }
          getMovieList();
     }), [index, item])
     // console.log(item, " movie ", movie)

     // console.log("from list item",movieList)
     return (
          <Link className="link" to={{ pathname: "/watch", id: movie.img  }}>
               <div className="listItem"
                    // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
               >
                    {/* {console.log("movie ", movie)} */}

                    <img src={movie.img} alt="movie poster" />

                    {
                         isHovered && (
                              <>
                                   <video src={movie.trailer} autoPlay={true} loop />
                                   <div className="listItemInfo">
                                        <div className="icons">
                                             <span class="fa-sharp fa-solid fa-play play" />
                                             <span class=" fa-solid fa-plus addToList" />
                                             <span class="fa-solid fa-thumbs-up liked" />
                                             <span class="fa-solid fa-thumbs-down disliked" />
                                        </div>
                                   </div>
                                   <div className="movieDetails">
                                        <span>1 hour 14 mins</span>
                                        <span className="limit">{movie.limit}</span>
                                        <span>{movie.year}</span>
                                   </div>
                                   <div className="movieDiscription">{movie.desc}</div>
                                   <div className="genre">{movie.genre}</div>
                              </>
                         )
                    }
               </div >
          </Link>
     )
}

export default ListItem



// createdAt : "2023-01-12T13:29:56.394Z"
// desc : "test discription"
// genre : "action"
// img : "https://i0.wp.com/s.enavabharat.com/wp-content/uploads/2022/11/An-Action-Hero-.jpg"
// imgTitle : "Action Hero MOVIE"
// isSeries : true
// limit : 16
// title : "pitcher4"
// trailer : "https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4"
// updatedAt : "2023-01-12T13:29:56.394Z"
// video : "https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4"
// year : "2022"