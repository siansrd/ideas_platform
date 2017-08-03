import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class CommentNew extends Component {

  render() {
    return (
      <div>Comments Form</div>
    )
  }

}

export default reduxForm({
  form: 'newCommentForm'
})(CommentNew)