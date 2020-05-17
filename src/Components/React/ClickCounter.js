import React, { Component } from 'react'
// import updateComponent from './withCounter'
// import UpdatedComponent from './withCounter'
import withCounter from './withCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0,
    //          Decrement :0
    //     }
    // }
    // IncrementCount = () => {
    //     this.setState(prevState => {
    //         return{count: prevState.count +1}
    //     })
    // }
    // here is how you can imcrement a count and how it can be impremented
    // DecrementCount = () => {
    //     this.setState(prevState => {
    //         return{Decrement:prevState.Decrement -1}
    //     })
    // }
    // here is how to decrement a count and how it can be impremented
    render() {  
         const { count, IncrementCount} = this.props
                // const { Decrement } = this.state
        return (
            <div>
                <button onClick={IncrementCount}>{this.props.name} Clicked {count} times</button> <br />
                {/* <button onClick={this.DecrementCount}> Decremented {Decrement} times</button>  */}
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
