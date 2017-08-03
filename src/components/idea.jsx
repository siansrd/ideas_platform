import React from 'react'
import Chip from 'react-md/lib/Chips'

export default function(props) {

  const { idea } = props

  return (
    <div className="col s6">
      <h3>{ idea.title }</h3>
      <p>{ idea.description }</p>
      <p>{ idea.created_at }</p>
      <p>{ idea.user.name }</p>
      <Chip label={ idea.category.name } />
    </div>
  )

}