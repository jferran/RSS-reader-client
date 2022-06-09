import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { markAsRead, saveToFavouritesService, unsaveFromFavouritesService, writeCommentService } from '../services/user.services'
import Comments from './Comments'

function NewsEntry({article, updateAsRead}) {
  const { favorite, seen } = article
  const { _id, guiid, content, pubDate, comments, title, feed } = article._id
  const [ favoriteState, setFavoriteState ] = useState(favorite)
  const navigate = useNavigate()
  
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     console.log(title)
//     const position = window.pageYOffset;
//     setScrollPosition(position);
//     console.log("position:", position)
// };
// useEffect(() => {
//   window.addEventListener('scroll', handleScroll, { passive: true });

//   return () => {
//       window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

  

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

  const handleMarkAsRead = () => {
    markAsRead(_id)
    updateAsRead(_id)
  }

  
  return (
    <div className='list-group-item list-group-item-action' id={`heading-${_id}`}>
      {/* <p>{_id}</p> */}
      <div onClick={handleMarkAsRead} class="d-flex w-100 justify-content-between" type="button" data-toggle="collapse" data-target={`#collapse-${_id}`} aria-expanded="false" aria-controls={`collapse-${_id}`}>
        <h5 class="mb-1">{title}</h5>
        {/* <small>{pubDate}</small> */}
      </div>

          
      <div id={`collapse-${_id}`} class="mb-1 collapsed"  className="collapse" aria-labelledby={`heading-${_id}`} data-parent="#newsList">
        <p ref={ref} dangerouslySetInnerHTML={{__html: content}}/>
        <div>
          {/* {comments.map((comment)=><p> comment id: {comment._id}, Comment: {comment.comment}, User: {comment.user.username}, Created at: {comment.createdAt}, Updated at: {comment.updatedAt}</p>)} */}
          <Comments newsId={_id} comments={comments}/>
        </div>
      </div>
        <div className="d-flex w-100 justify-content-between">
          <small>{feed.name}</small>
          <small>{pubDate}</small>
        </div>
        
        <p>{seen ? 'Seen' : 'Not Seen'}</p>
        {favoriteState ? <button onClick={handleUnsave}>Unsave ♡</button> : <button onClick={handleSave}>Save ❤</button>}
      
    </div>
  )
  return (
    <div>
      {/* <p>{_id}</p> */}
      <h3>{title}</h3>
      <div ref={ref} dangerouslySetInnerHTML={{__html: content}} />
      <p>{pubDate}</p>
      <p>{feed.name}</p>
      <p>{seen ? 'Seen' : 'Not Seen'}</p>
      {favoriteState ? <button onClick={handleUnsave}>Unsave ♡</button> : <button onClick={handleSave}>Save ❤</button>}
      

      <div>
        {/* {comments.map((comment)=><p> comment id: {comment._id}, Comment: {comment.comment}, User: {comment.user.username}, Created at: {comment.createdAt}, Updated at: {comment.updatedAt}</p>)} */}
        <Comments newsId={_id} comments={comments}/>
      </div>
      
    </div>
  )
}

export default NewsEntry