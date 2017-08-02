import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

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

  render() {
    return (
      <form>
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
})(IdeaNew)