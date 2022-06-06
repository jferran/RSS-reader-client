import React from 'react'
import { useParams } from 'react-router-dom'
import NewsList from '../components/NewsList'

function FeedPage() {
    const {id} = useParams()
  return (
    <div>
        <h1>FeedPage</h1>
        <NewsList id={id}/>
    </div>
  )
}

export default FeedPage