import React from 'react'
import AddFeed from '../components/AddFeed'
import SharedFeedsByUsers from '../components/SharedFeedsByUsers'
import SubscribedFeeds from '../components/SubscribedFeeds'

function ManageFeeds

() {
  return (
    <div><h1>ManageFeeds</h1>
    <AddFeed/>
    <SubscribedFeeds/>
    <SharedFeedsByUsers/>
    </div>
  )
}

export default ManageFeeds

