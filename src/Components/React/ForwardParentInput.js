import React, { Component } from 'react'
import ForwardInput from './ForwardInput'

export class ForwardParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <ForwardInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Forward  Input</button>
            </div>
        )
    }
}

export default ForwardParentInput
