import React, { useContext, useEffect, useState } from 'react'
import { SubscriptionsContext } from '../context/subscriptions.context'
import { getFeedsSharedByUsers, subscribeByIdService } from '../services/user.services'

function SharedFeedsByUsers() {
    const [sharedFeeds, setSharedFeeds] = useState(null)
  const [fetching, setFetching] = useState(true)
  const { mySubscriptions, getSubscriptions, sharedSubscriptions, getSharedSubscriptions } = useContext(SubscriptionsContext)

  useEffect(()=>{
    getSharedFeeds()
    getSharedSubscriptions()
  },[])
  const getSharedFeeds = async () => {
    const feedsFromUsers = await getFeedsSharedByUsers()
    setSharedFeeds(feedsFromUsers.data)
    setFetching(false)
  }
  
  const handleSubscribe = async (e) => {
    
    const id=e.target.value
 
    await subscribeByIdService(id)
    await getSubscriptions()
    
    
  }

  return (
    <div>
    <h3>Feeds shared by other users:</h3>
      {sharedSubscriptions && sharedSubscriptions.map((element) => <p><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.sourceUrl}&size=128`} alt=''/>{element.name} Shared by {element.sharedBy.length} users<button onClick={handleSubscribe} value={element._id}>Subscribe</button></p>) }
    </div>
  )
}

export default SharedFeedsByUsers