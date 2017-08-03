import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createComment } from '../actions'

class CommentNew extends Component {

  renderTextField(field) {
    const { meta: { touched, error }} = field
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        { touched ? error : "" }
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          label="Comment"
          name="comment"
          component={ this.renderTextField }
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

}

function validate(values){
  const errors = {}
  if(!values.comment) {
    errors.comment = "Please enter a comment"
  }

  return errors
}

export default reduxForm({
  form: 'newCommentForm'
})( connect( null, { createComment })(CommentNew) )