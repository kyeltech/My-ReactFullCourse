import React, { Component } from 'react'

 class heroError extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(Error) {
        return{
            hasError: true
        }
    }
    render() {
        if(this.state.hasError) {
            return('something went wrong')
        }
        return this.props.children
         
        
    }
}

export default heroError
