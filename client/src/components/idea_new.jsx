import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createIdea } from '../actions'

class IdeaNew extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        { touched ? error : "" }
      </div>
    )
  }

  onSubmit(values){
    const newValues = { ...values, ["category_id"]: 41, ["user_id"]: 43, ["votes"]: 0, ["views"]:0 }
    this.props.createIdea(newValues)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={ this.renderField }
        />
        <Field
          label="Summary"
          name="summary"
          component={ this.renderField }
        />
        <Field
          label="Idea"
          name="description"
          component={ this.renderField }
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

}

function validate(values){
  const errors = {}
  if(!values.title) {
    errors.title = "Please enter a title"
  }
  if(!values.summary) {
    errors.summary = "Please enter a summary"
  }
  if(!values.description) {
    errors.description = "Please enter an idea"
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'newIdeaForm'
})( connect( null, { createIdea } )(IdeaNew) )