import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username: '',
             Comments:'',
             topic:'React'
             
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }
    handleCommentChange = event => {
        this.setState({
            Comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
        }
        handleSubmit = (event) => {
                alert(`${this.state.Username} ${this.state.Comments} ${this.state.topic}`)
                event.preventDefault()
                // event.preverntDefault()helps in stopping the pahe from refreshing and keeps the user details on the form
        }
    render() {
        const { Username, Comments, topic} = this.state
        // destructing helps in making the load looks easier to read for you and other developer that may want to work on the project and here this.state is removed from the value property and just use the value and add this.state up here
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={Username} onChange={this.handleUserNameChange} />
                    </div>
             
                <div>
                    <label>Comments</label>
                    <textarea value={Comments} onChange={this.handleCommentChange}>

                    </textarea>
                </div>
                <div>
                    <label >Topics</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                    <option value="Angular"> Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    </select><br />
                    <button type='submit'>Submit</button>
                </div>
                </form>
        )
    }
}

export default Form
