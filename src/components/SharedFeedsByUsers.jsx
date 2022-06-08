import React, { useEffect, useState } from 'react'
import { getFeedsSharedByUsers } from '../services/user.services'

function SharedFeedsByUsers() {
    const [sharedFeeds, setSharedFeeds] = useState(null)
  const [fetching, setFetching] = useState(true)

  useEffect(()=>{
    getSharedFeeds()
  },[])
  const getSharedFeeds = async () => {
    const feedsFromUsers = await getFeedsSharedByUsers()
    setSharedFeeds(feedsFromUsers.data)
    setFetching(false)
  }

  const handleSubscribe = async () => {
      
  }

  return (
    <div>
    <h3>Feeds shared by other users:</h3>
      {!fetching && sharedFeeds.map((element) => <p><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.sourceUrl}&size=128`} alt=''/>{element.name} Shared by {element.sharedBy.length} users<button onClick={handleSubscribe}>Subscribe</button></p>) }
    </div>
  )
}

export default SharedFeedsByUsers