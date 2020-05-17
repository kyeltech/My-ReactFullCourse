import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCount extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          Hover: 0
    //     }
    // }
    // MouseHover = () => {
    //     this.setState(prevState =>  {
    //         return{Hover: prevState.Hover +1}
    //     })
        //  when you move or hover over a text it impplements the number of times
    // }
    
    render() { 
        const { count, incrementCount } = this.props
        return (
             <h2 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times </h2>
        )
    }
}

export default withCounter(HoverCount, 10)
