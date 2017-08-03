import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

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

  onSubmit(values) {
    this.props.fetchUser(values.email, () => {
      this.props.history.push('/dashboard')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
})(connect(null, {fetchUser})(Login))
