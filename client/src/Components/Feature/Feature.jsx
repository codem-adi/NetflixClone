import "./feature.scss"
const movieInfo = require("../../Assits/movieInfo.png")


function Featured({ type }) {
     return (
          <div className="feature">
               {/* {console.log(type.type)} */}
               {type && (
                    <div className="category">
                         
                         {type.type?<span className="contentType">{type.type}</span>:""}
                         {type.type?<select name="genre" id="genre"> 
                              <option>Genre</option>
                              <option value="adventure">Adventure</option>
                              <option value="comedy">Comedy</option>
                              <option value="crime">Crime</option>
                              <option value="fantasy">Fantasy</option>
                              <option value="historical">Historical</option>
                              <option value="horror">Horror</option>
                              <option value="romance">Romance</option>
                              <option value="si-fi">Si-Fi</option>
                              <option value="thriller">Thriller</option>
                              <option value="western">Western</option>
                              <option value="animation">Animation</option>
                              <option value="drama">Drama</option>
                              <option value="documentary">Documentary</option>
                              <option value="anime">Anime</option>
                         </select>:""}
                    
               </div>)

               }
               <img
                    src="https://images.ctfassets.net/22n7d68fswlw/oHRHazxmnY34UH8xaugVV/1a33831ae2bcbb77bbd6a1721ed7d199/KANTARA-01.jpg"
                    alt="background"></img>

               <div className="info">
                    <img
                         src={movieInfo}
                         alt="background"></img>
                    <span className="description">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta aut, nesciunt voluptatem iure veritatis quas. Animi laborum officia praesentium iure. Unde soluta harum odit quis non veritatis aut maiores atque quo ullam possimus, dolores magnam esse mollitia, deserunt numquam aspernatur! Quibusdam exercitationem nostrum ut fugiat iusto nihil libero velit.
                    </span>
                    <div className="buttons">
                         <button className="play"><i class="fa-sharp fa-solid fa-play"></i>Play</button>
                         <button className="more"><i class="fa-solid fa-info"></i>Info</button>

                    </div>
               </div>
          </div>
     )
}

export default Featured;