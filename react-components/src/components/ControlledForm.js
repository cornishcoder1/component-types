import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "",
        category: 'website',
        comment: '',
      }
    }

HandleNameChange = (event) => {
    this.setState ({
        name: event.target.value
    })
}

HandleCategory = (event) => {
    console.log(event)
    this.setState ({
        category: event.target.value
    })
}

HandleComment = (event) => {
    this.setState ({
        comment: event.target.value
    })
}

HandleSubmit = (event) => {
    event.prevent.Default();
    console.log(this.state)
}

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.HandleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    value={this.state.name} 
                    onChange={this.HandleNameChange} 
                    id='id-name' 
                    name='name' 
                    type="text"/>
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select 
                    value={this.state.category} 
                    onChange={this.HandleCategory} 
                    id='category' 
                    name='category' >

                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General enquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea 
                    value={this.state.comment} 
                    onChange={this.HandleComment} 
                    id='id-comments' 
                    name='comments' />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default ControlledForm