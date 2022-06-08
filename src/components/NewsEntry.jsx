import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveToFavouritesService, unsaveFromFavouritesService, writeCommentService } from '../services/user.services'
import Comments from './Comments'

function NewsEntry({article}) {
  const { favorite, seen } = article
  const { _id, guiid, content, pubDate, comments, title, feed } = article._id
  const [ favoriteState, setFavoriteState ] = useState(favorite)
  
  const navigate = useNavigate()

  const ref = useRef(null);
  
  useEffect(() => {
    
    const allImg = ref.current.querySelectorAll("img")
    allImg.forEach((img) => img.className = 'img-fluid')
  }, [article]);

  const handleSave = () => {
    try {
      saveToFavouritesService(_id)
      setFavoriteState(true)
    } catch (error) {
      navigate("/error")
    }
  }
  const handleUnsave = () => {
    try {
      unsaveFromFavouritesService(_id)
      setFavoriteState(false)
    } catch (error) {
      navigate("/error")
    }
  }
  return (
    <div>
      {/* <p>{_id}</p> */}
      <h3>{title}</h3>
      <div ref={ref} dangerouslySetInnerHTML={{__html: content}} />
      <p>{pubDate}</p>
      <p>{feed.name}</p>
      {favoriteState ? <button onClick={handleUnsave}>Unsave ♡</button> : <button onClick={handleSave}>Save ❤</button>}
      

      <div>
        {/* {comments.map((comment)=><p> comment id: {comment._id}, Comment: {comment.comment}, User: {comment.user.username}, Created at: {comment.createdAt}, Updated at: {comment.updatedAt}</p>)} */}
        <Comments newsId={_id} comments={comments}/>
      </div>
      
    </div>
  )
}

export default NewsEntry