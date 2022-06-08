import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NewsList from '../components/NewsList'
import { getFeedNameService, refreshService } from '../services/user.services'

function FeedPage() {
    const {id} = useParams()
    const [feedName, setFeedName] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        getFeedName()
    }, [id])

    const getFeedName = async () => {
        try {
            const response = await getFeedNameService(id)
            setFeedName(response.data.name)
        } catch (error) {
            navigate("/error")
        }
        
    }
  return (
    <div>
        <h1>FeedPage: {feedName}</h1>
        
        <NewsList id={id}/>
    </div>
  )
}

export default FeedPage