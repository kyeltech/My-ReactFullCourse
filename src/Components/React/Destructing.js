import React, {Component} from 'react'
import Welcome from './Welcome'



export default class Destructing extends Component {
    render() {
        const {name , heroName} = this.props
        return (
            <div>
                <h1> Welcome {name} swager {heroName}</h1>
            </div>
        )
    }
}

// // destructing in the parameter using jsx in function component
// const Para = ({Mame, HeroName}) => {
// return(
//     <div>
//         <h1>
//             Hello {name}, swager {HeroName}
//         </h1>
//     </div>
// )
// }
// export Default Para