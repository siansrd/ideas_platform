import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Login extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field; 
    return(
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input}></input>
        <p>{ touched ? error : "" }</p>
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          label="Email"
          name="email"
          component={ this.renderField }
        />
        <Field
          label="Password"
          name="password"
          component={ this.renderField }
        />
        <button type="submit">Login</button>
      </form>
    )
  }

}

function validate(values) {
  const errors = {}
  if(!values.email) {
    errors.email = "Enter and email address"
  }
  if(!values.password) {
    errors.password = "Enter a password"
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(Login)