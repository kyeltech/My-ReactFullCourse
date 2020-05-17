import React, { Component } from 'react'
import FwardingInputRef from './FwardingInputRef'

 class FRParent extends Component {
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
                <FwardingInputRef ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParent
