import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubscriptionsContext } from '../context/subscriptions.context'
import { searchFeedService, subscribeFeedService } from '../services/user.services'

function AddFeed() {
  const [url, setUrl] = useState('')
  const [foundFeeds, setFoundFeeds] = useState(null)
  //const [fetching, setFetching] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const { getSubscriptions } = useContext(SubscriptionsContext)
  const navigate = useNavigate()

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    //we call API too search for things
    try {
      const response = await searchFeedService(url)
      console.log("response: ", response.data)
      setFoundFeeds(response.data)

    } catch (error) {
      if(error.response.status === 400 || error.response.status === 401){
        setErrorMessage(error.response.data.errorMessage)
    } else {
        navigate("/error")
    }
    }

  }
  const handleSubscribe = async (e) => {
    
    const feedUrl=e.target.value
    const title = e.target.title
    //const favicon = e.target.favicon
    //const parent = e.target.parentElement
    await subscribeFeedService(feedUrl, title)
    await getSubscriptions()
    
  }


  return (
    <div>
      <h1>AddFeed</h1>

      <form onSubmit={handleAdd}>
        <label>Url:</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={handleUrlChange}
        />

        
        <button type="submit">Search</button>
      </form>

      {foundFeeds!=null && foundFeeds.map((element, index)=> <div>{index}: <img src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.url}&size=128`} alt=''/> {element.title} {element.url}, {element.favicon} <button onClick={handleSubscribe} value={element.url} title={element.title}>Subscribe</button></div>)}

    </div>
  )
}

export default AddFeed