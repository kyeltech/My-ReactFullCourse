import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('regular component rendered')
        return (
            <div>
                Hello from BENji{this.props.name}
            </div>
        )
    }
}

export default RegComp
