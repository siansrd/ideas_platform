import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Login extends Component {

  renderField(field) {
    return(
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input}></input>
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

export default reduxForm({
  form: 'loginForm'
})(Login)