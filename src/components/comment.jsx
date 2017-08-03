import React from 'react'

export default function(props) {

  const { comment } = props.comment

  return (
    <div className="comment" key={comment.id}> 
      <blockquote>
        <p>{comment.text}</p>
        <p>{comment.user.name}</p>
        <p>{comment.created_at}</p>
      </blockquote>
    </div>
  )

}

