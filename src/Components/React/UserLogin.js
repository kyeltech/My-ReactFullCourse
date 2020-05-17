import React, { Component } from 'react'

export class UserLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        //  to display nothing( it evaluate the right if its true however if its not it evaluate the left)
        return this.state.isLoggedIn && <div>i am in</div>
        // tenary 
        // return this.state.isLoggedIn ? (
        //     <div> welcome back</div>
        // ) : (
        //     <div> you are leaving</div>
        // )
         
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div> welcome back</div>
        // } else {
        //     message = <div> you are leaving</div>
        // }
        // return (
        //     <div>{message}</div>
        // )
        // if(this.state.isLoggedIn) {
        //     return (
        //          <div>kyel is LoggedIn</div>
        //     )
        // } else {
        //     return (

        //     <div>kyel is LoggedOut </div>
        //     )
        } 
    }


export default UserLogin
