import React from 'react'
import Chip from 'react-md/lib/Chips'

export default function(props) {

  const { idea } = props

  return (
    <div className="col s6">
      <h3>{ idea.title }</h3>
      <p>Votes: { idea.votes } | { idea.created_at } | { idea.user.name }</p>
      <p>{ idea.description }</p>
      <Chip label={ idea.category.name } />
    </div>
  )

}