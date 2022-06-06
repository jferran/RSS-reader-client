import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchFeedService } from '../services/user.services'

function AddFeed() {
  const [url, setUrl] = useState('')
  const [foundFeeds, setFoundFeeds] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
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

      {foundFeeds!=null && foundFeeds.map((element, index)=> <div>{index}: {element.title} {element.url}, {element.favicon}</div>)}
    
    </div>
  )
}

export default AddFeed