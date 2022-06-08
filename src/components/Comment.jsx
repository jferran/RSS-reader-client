import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Comment({commentProp}) {
    const {_id, comment, createdAt, updatedAt } = commentProp
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const handleDelete = async (e) => {
        try {
          //await deleteCommentService()
        } catch (error) {
          navigate("/error")
        }
      }
  return (
    <div>Comment
    
    <p> comment id: {_id}, Comment: {comment}, User: {user.username}, Created at: {createdAt}, Updated at: {updatedAt} {commentProp.user._id === user._id ? <button onClick={handleDelete}>Eliminar</button> : null}</p>
    </div>
  )
}

export default Comment