import React, { Component } from 'react'
import LifecycleB from '../React/LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Ezekiel"
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleA static GetDerivedStatFromProps')
        return null
        // is called everytime a component is been re-rendered and do not cause side effectsEX:https request, and it set the state
    }

    componentDidMount  () {
        console.log('LifecycleA ComponentDidMount')
    }
    shouldComponentUpdate () {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate (prevProps,  prevState ) {
        console.log('LifecycyleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name:"Kyeltech"
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA<br />
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}
// in lifecyle the methods are not rendered as written because the componentDidMount last after the render method is been called 

export default LifecycleA
