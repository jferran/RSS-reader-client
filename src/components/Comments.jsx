import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { writeCommentService } from "../services/user.services";
import Comment from "./Comment";

function Comments({ newsId, comments }) {
  // const {_id, comment, createdAt, updatedAt} = comments

  const [comment, setComment] = useState("");
  const [commentForm, setCommentForm] = useState(false);

  const [commentsState, setCommentsState] = useState(comments);

  const [fetching, setFetching] = useState(false);

  const navigate = useNavigate();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const newComment = await writeCommentService(newsId, comment);
      setFetching(true)
      console.log("newComment:", newComment)
      setCommentsState([...commentsState, newComment.data])
      
      setFetching(false)
      //We have to refresh, rewrite article or comments
    } catch (error) {
      navigate("/error");
    }
    setCommentForm(false);
  };

  const handleOpenCommentForm = () => {
    setComment("");
    setCommentForm(true);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const deleteFromList = (id) => {
    setCommentsState(commentsState.filter((comment) => comment._id !== id))
  }
  console.log(commentsState)
  return (
    <div>
      <h1>Comments</h1>
      {fetching ? (
        <p>...Loading</p>
      ) : (
        commentsState.map((comment) => <Comment commentProp={comment} deleteFromList={deleteFromList}/>)
      )}
      <button onClick={handleOpenCommentForm}>Write a comment</button>

      {commentForm && (
        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="comment">Add Comment:</label>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleChange}
          ></input>
          <button type="submit">Post Comment</button>
        </form>
      )}
    </div>
  );
}

export default Comments;
