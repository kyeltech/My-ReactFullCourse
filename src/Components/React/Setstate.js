import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props){
         super(props)
         this.state = {
            count: 0
         }
        }
        increment() {
            // incrementing just once(1)
            // this.setState({
            //     count: this.state.count +1
            // },
            // // callback function for setstate(it all in calling back the previous value before update )
            // () => {
            //     console.log('callback value', this.state.count)
            // }
            // )
            // incrementing by 5times
            this.setState(prevState => ({
                count:prevState.count +1
            }))
            console.log(this.state.count)
        }
        incrementFive(){
            this.increment()
            this.increment()
            this.increment()
            this.increment()
            this.increment()
        }
    render() {
        return (
            <div>
            <div>
                Count -{this.state.count} 
            </div>
            <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        )
    }
}
export default Counter
