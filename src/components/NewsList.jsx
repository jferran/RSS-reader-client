import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyNewsService } from '../services/user.services'
import NewsEntry from './NewsEntry'

function NewsList({id}) {
  console.log("id: ", id)
  const [myNews, setMyNews] = useState(null)
  const [filteredNews, setFilteredNews] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    getMyNews()
  },[id])

  const getMyNews = async () => {
    try {
      console.log("hey")
      const response = await getMyNewsService(id)
      console.log("response.data!: ", response.data)
      
      setMyNews(response.data)
      setFilteredNews(response.data)
      console.log("after set")
      
      console.log("myNews:", myNews)
      
    } catch (error) {
      navigate("/error")
    }
  }

  const handleFilterAll = () => {
    setFilteredNews(myNews)
  }

  const handleFilterSeen = () => {
    setFilteredNews(
      myNews.filter((article)=>article.seen)
    )
  }

  const handleFilterNotSeen = () => {
    setFilteredNews(
      myNews.filter((article)=> !article.seen)
    )
  }


  
  const handleSpace = (event) => {
    console.log("space")
    if (event.key === " ") {
      const div = event.target.parentNode;
      
      const index = [...div].indexOf(event.target.parentNode);
      //div.elements[index + 1].focus();
      div.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  


  if(!myNews) return <p>Loading</p>
  else console.log("myNews!!!", myNews)
  
  return (
    <div>
        <h2>NewsList {id}</h2> {{id}!=='favourites' ? <><button onClick={handleFilterAll}>All</button><button onClick={handleFilterSeen}>Seen</button><button onClick={handleFilterNotSeen}>Not seen</button></> : null}
        
        {/* {myNews && <p>{myNews[0].feed}</p>} */}
        {/* {myNews && myNews.map((element)=><div><NewsEntry article={element}/><hr/></div>)}     */}
        <div>
          {filteredNews && filteredNews.map((element, index)=><NewsEntry key={element._id} onKeyDown={handleSpace} article={element}/>)}
        </div>    
    </div>
  )
}

export default NewsList