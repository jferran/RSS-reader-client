import React, { useEffect, useState } from 'react'
import { getMyNewsService } from '../services/user.services'
import NewsEntry from './NewsEntry'

function NewsList({id}) {
  console.log("id: ", id)
  const [myNews, setMyNews] = useState(null)
  
  useEffect(()=>{
    getMyNews()
  },[id])

  const getMyNews = async () => {
    try {
      console.log("hey")
      const response = await getMyNewsService(id)
      console.log("response.data!: ", response.data)
      
      setMyNews(response.data)
      console.log("after set")
      
      console.log("myNews:", myNews)
      
    } catch (error) {
      
    }
  }
  
  if(!myNews) return <p>Loading</p>
  else console.log("myNews!!!", myNews)
  
  return (
    <div>
        <h2>NewsList {id}</h2>
        
        {/* {myNews && <p>{myNews[0].feed}</p>} */}
        {/* {myNews && myNews.map((element)=><div><NewsEntry article={element}/><hr/></div>)}     */}
        {myNews && myNews.map((element)=><div><NewsEntry article={element}/><hr/></div>)}    
    </div>
  )
}

export default NewsList