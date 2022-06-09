import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { deleteCommentService } from '../services/user.services'

function Comment({commentProp}) {
    const {_id, comment, createdAt, updatedAt } = commentProp
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const handleDelete = async (e) => {
        try {
          await deleteCommentService(_id)
        } catch (error) {
          navigate("/error")
        }
      }
      console.log("commentProp", commentProp, "user", user._id)
  return (
    <div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{user.username}:</h5>
        <small>{createdAt===updatedAt ? <>Created at: </> : <>Updated at: </>} {updatedAt}</small>
      </div>
      <p class="mb-1">{comment}</p>
      {commentProp.user._id === user._id ? <button onClick={handleDelete}>Eliminar</button> : null}
    </div>
  )
}

export default Comment