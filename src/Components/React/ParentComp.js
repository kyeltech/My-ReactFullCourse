import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
constructor(props) {
super(props)

this.state = {
name: 'Zikyel'
}
}
componentDidMount(){
setInterval(() =>{
this.setState({
name:'Zikyel'
})
}, 2000)         
}
render() {
console.log('****************Parent Component*************************')
return (
<div>
call me kyel
<MemoComp name={this.state.anme}/>
{/* <RegComp name={this.state.name}/> */}
{/* <PureComp name={this.state.name}/> */}
</div>
)
}
}


export default ParentComp
