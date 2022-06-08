import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyFeedsService, shareFeedService, unshareFeedService, unSubscribeFeedService } from '../services/user.services'

function ManageFeeds() {
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
      navigate("/error")
    }
  }
  const handleShare = (e) => {
    const feedID=e.target.value
    shareFeedService(feedID)
  }
  const handleUnshare = (e) => {
    const feedID=e.target.value
    unshareFeedService(feedID)
  }
  const handleUnsubscribe = (e) => {
    const feedID=e.target.value
    unSubscribeFeedService(feedID)
  }

  return (
    <div><h1>ManageFeeds</h1>
    {myFeeds !== null && myFeeds.map((element) => 
    
        <div><p>{element.feed.name}</p>
            {element.shared ? <button onClick={handleUnshare} value={element._id}>Unshare</button> : <button onClick={handleShare} value={element._id}>Share</button> }
            
            <button onClick={handleUnsubscribe} value={element._id}>Unsubscribe</button>
        </div>)}
    </div>

    


  )
}

export default ManageFeeds