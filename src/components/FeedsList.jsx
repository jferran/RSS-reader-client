import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyFeedsService } from '../services/user.services'

function FeedsList() {
  const [myFeeds, setMyFeeds] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    getMyFeeds()
  },[])

  const getMyFeeds = async () => {
    try {
      const response = await getMyFeedsService()
      setMyFeeds(response.data)
    } catch (error) {
      if(error.response.status===401){
        navigate("/login")
        //enviar el usuario al login cuando no hay token
      }
      else{
        navigate("/error")
      }
    }
  }
  console.log(myFeeds)
  return (
    <div>
    <h1>FeedsList</h1>
    {myFeeds === null && <h3>...Loading</h3>}
    {/* {myFeeds !== null && myFeeds} */}
    {/* {myFeeds !== null && myFeeds.map((element) => <div>{element._id.name}</div>)} */}
    
    
    </div>
  )
}

export default FeedsList