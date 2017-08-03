import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createIdea, fetchCategories } from '../actions'
import SelectField from 'react-md/lib/SelectFields';

class IdeaNew extends Component {

  constructor() {
    super()
    this.renderSelect = this.renderSelect.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      categoryId: 200
    }
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

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

  handleCategoryChange(value) {
    const category = this.props.categories.find((cat) =>{
      return cat.name === value.toLowerCase()
    })
    this.setState({categoryId: category.id})
  }

  onSubmit(values){
    const newValues = { 
      ...values, 
      ["user_id"]: this.props.user.id, 
      ["votes"]: 0, 
      ["views"]:0,
      ["category_id"]: this.state.categoryId
    }
    this.props.createIdea(newValues, () => {
      this.props.history.push('/dashboard')
    })
  }

  renderSelect() {
    return this.props.categories.map((category, i) => {
      return category.name.toUpperCase()
    })
  }

  render() {
    
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={ this.renderTextField }
        />
        <Field
          label="Summary"
          name="summary"
          component={ this.renderTextField }
        />
        <Field
          label="Idea"
          name="description"
          component={ this.renderTextField }
        />
        <SelectField
           id="category"
           label="Category"
           placeholder="Select Category"
           menuItems={ this.renderSelect() }
           value={ this.state.categoryId }
           onChange={ this.handleCategoryChange }
           required
           errorText="A state is required"
           className="md-cell"
           itemLabel="name"
           itemValue="abbreviation"
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

function mapStateToProps( { user, categories } ) {
  return { user, categories }
}

export default reduxForm({
  validate,
  form: 'newIdeaForm'
})( connect( mapStateToProps, { createIdea, fetchCategories } )(IdeaNew) )