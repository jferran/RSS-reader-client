import React, { useEffect, useState } from 'react'
import { getMyNewsService } from '../services/user.services'

function NewsList({id}) {
  const [myNews, setMyNews] = useState(null)
  useEffect(()=>{
    getMyNews()
  },[])
  const getMyNews = async () => {
    try {
      const response = await getMyNewsService(id)
      // console.log("News list en NewsList.jsx: ",response.data[0])
      console.log("News list en NewsList.jsx: ",response.data[0]._id.news)
      setMyNews(response.data[0])
      //console.log("myNews._id ===> ", myNews._id.news)
    } catch (error) {
      
    }
  }
  
  return (
    <div>
        <h2>NewsList {id}</h2>
        {myNews && myNews._id.news.map((element)=><div>{element._id}</div>)}    
    </div>
  )
}

export default NewsList