import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message: 'hello'
        }
        // this.handleMe = this.handleMe.bind(this)
    }
    // handleMe() {
    //     this.setState({
    //         message:'you are leaving'
    //     })
    //     console.log(this)
    // }
    // the last method will be using Arrow Function in class Compoent
    handleMe = () => {
        this.setState({
            message:'ok its fine'
        })
    }
    // when the button is clicked the message changes ffrom it present state to another using setState so it causes eevery component to re-render
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* using binding */}
                {/* <button onClick={this.handleMe.bind(this)}>click</button>  */}
                {/* using Arrow Function */}
                {/* <button onClick={() => this.handleMe()}> CLICK Now</button> */}
                {/* binding in the constructor and also in the render method automatically */}
                <button onClick={this.handleMe}> please click</button>
            </div>
        )
    }
}

export default EventBind
