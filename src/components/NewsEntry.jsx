import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveToFavouritesService, writeCommentService } from '../services/user.services'

function NewsEntry({article}) {
  const { favorite, feed, seen } = article
  const { _id, guiid, content, pubDate, comments } = article._id
  const [comment, setComment] = useState('')
  const [commentForm, setCommentForm] = useState(false)
  const navigate = useNavigate()
  const handleCommentSubmit = (e) => {
    e.preventDefault()

    try {
      writeCommentService(_id, comment)
      //We have to refresh, rewrite article or comments
    } catch (error) {
        navigate("/error")
    }


    setCommentForm(false)
  }
  const handleOpenCommentForm = () => {
    setComment('')
    setCommentForm(true)
  }
  const handleSave = () => {
    try {
      saveToFavouritesService(_id)
    } catch (error) {
      navigate("/error")
    }
  }
  return (
    <div>
      <p>{_id}</p>
      <div dangerouslySetInnerHTML={{__html: content}} />
      {/* {<div>{content}</div>} */}
      <p>{pubDate}</p>
      <button onClick={handleSave}>Save</button>
      <div>
      <h3>Comments:</h3>
        {comments.map((comment)=><p>{comment}</p>)}
        <button onClick={(handleOpenCommentForm)}>Write a comment</button>
        {commentForm && 
          <form onSubmit={handleCommentSubmit}>
            <label htmlFor='comment'>Add Comment:</label>
            <input type='text' name='comment'></input>
            <button type='submit'>Post Comment</button>
          </form>
        }
          

      </div>
      
    </div>
  )
}

export default NewsEntry