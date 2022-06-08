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
  
  return (
    <div>
    <h3>Feeds shared by other users:</h3>
      {!fetching && sharedFeeds.map((element) => <p>{element.name} Shared by {element.sharedBy.length} users<button>Subscribe</button></p>) }
    </div>
  )
}

export default SharedFeedsByUsers