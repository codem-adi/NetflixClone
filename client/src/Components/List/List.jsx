import { useRef, useState } from "react"
import "./List.scss"
import ListItem from "./ListItem/ListItem"

function List({ list }) {
     const listRef = useRef();
     const [moved, setMoved] = useState(false);
     const [slideNumber, setSlideNumber] = useState(0);
     
     
     // console.log("its type from list", type )
     function handleClick(direction) {
          setMoved(true);
          let distance = listRef.current.getBoundingClientRect().x - 50;
          if (direction === "previous" && slideNumber > 0) {
               setSlideNumber(slideNumber - 1);
               // console.log("previous", distance, listRef.current.childElementCount)
               listRef.current.style.transform=`translateX(${230+distance+'px'})`;
          }
          if (direction === "next" && slideNumber < listRef.current.childElementCount-6) {
               // console.log("next", distance )
               setSlideNumber(slideNumber + 1);
               listRef.current.style.transform = `translateX(${-230 + distance + 'px'})`
          }
          
     }
     return (
          <div className='list'>
               <span className='listTitle'>{list.title}</span>
               <div className='wrapper'>    
                    <i class="fa-solid fa-chevron-left previous" style={{display:!moved && "none"}} onClick={() =>handleClick('previous') } />
                    <div className="container" ref={listRef}>
                         {
                              list.content.map((item, i) => (
                                   <ListItem index={i} item={item} />
                         ))}
                    </div>
                    <i class="fa-sharp fa-solid fa-chevron-right next" onClick={() => handleClick('next')} />
               </div>
               
          </div>
     )
}

export default List