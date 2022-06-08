import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { writeCommentService } from '../services/user.services'

function Comments({newsId, comments}) {
    // const {_id, comment, createdAt, updatedAt} = comments
    const [comment, setComment] = useState('')
    const [commentForm, setCommentForm] = useState(false)
    const [commentsState, setCommentsState] = useState(comments)


    const handleCommentSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const newComment = await writeCommentService(newsId, comment)
          setCommentsState([...commentsState, newComment])
          //We have to refresh, rewrite article or comments
        } catch (error) {
            Navigate("/error")
        }
    
    
        setCommentForm(false)
      }
      const handleOpenCommentForm = () => {
        setComment('')
        setCommentForm(true)
      }

      const handleChange = (e) =>{
        setComment(e.target.value)
      }

  return (
    <div><h1>Comments</h1>
        {commentsState && commentsState.map((comment)=><p> comment id: {comment._id}, Comment: {comment.comment}, User: {comment.user.username}, Created at: {comment.createdAt}, Updated at: {comment.updatedAt}</p>)}
        <button onClick={(handleOpenCommentForm)}>Write a comment</button>
        {commentForm && 
          <form onSubmit={handleCommentSubmit}>
            <label htmlFor='comment'>Add Comment:</label>
            <input type='text' name='comment' value={comment} onChange={handleChange}></input>
            <button type='submit'>Post Comment</button>
          </form>
        }
    </div>
  )
}

export default Comments