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

  onSubmit(values) {
    const newValues = {
      ...values,
      ["idea_id"]: this.props.ideaId,
      ["user_id"]: this.props.user.id

    }
    this.props.createComment(newValues)
  }

  render() {

    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Comment"
          name="text"
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

function mapStateToProps( { user } ){
  return { user }
}

export default reduxForm({
  validate,
  form: 'newCommentForm'
})( connect( mapStateToProps, { createComment })(CommentNew) )