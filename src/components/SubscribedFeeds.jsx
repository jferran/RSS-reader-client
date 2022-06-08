import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubscriptionsContext } from '../context/subscriptions.context'
import { getMyFeedsService, shareFeedService, unshareFeedService, unSubscribeFeedService } from '../services/user.services'

function SubscribedFeeds() {
    const { mySubscriptions, getSubscriptions, getSharedSubscriptions } = useContext(SubscriptionsContext)
    const [myFeeds, setMyFeeds] = useState(null)
    const navigate = useNavigate()
  // useEffect(()=>{
  //   getMyFeeds()
  // },[])
  // const getMyFeeds = async () => {
  //   try {
  //     const response = await getMyFeedsService()
  //     setMyFeeds(response.data)
  //   } catch (error) {
  //     navigate("/error")
  //   }
  // }
  const handleShare = async (e) => {
    const feedID=e.target.value
    await shareFeedService(feedID)
    await getSubscriptions()
    await getSharedSubscriptions()
  }
  const handleUnshare = async (e) => {
    const feedID=e.target.value
    await unshareFeedService(feedID)
    await getSubscriptions()
    await getSharedSubscriptions()
  }
  const handleUnsubscribe = async (e) => {
    const feedID=e.target.value
    await unSubscribeFeedService(feedID)
    await getSubscriptions()
    await getSharedSubscriptions()
  }

  return (
    <div><h2>SubscribedFeeds</h2>
    {mySubscriptions !== null && mySubscriptions.map((element) => 
    
        <div><p><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.feed.sourceUrl}&size=128`} alt=''/> {element.feed.name}</p>
            {element.shared ? <button onClick={handleUnshare} value={element._id}>Unshare</button> : <button onClick={handleShare} value={element._id}>Share</button> }
            
            <button onClick={handleUnsubscribe} value={element._id}>Unsubscribe</button>
        </div>)}
    </div>

    


  )
}

export default SubscribedFeeds