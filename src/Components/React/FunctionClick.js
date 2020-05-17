import React from 'react'

 function Click() {
     

    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>CLick</button>
        </div>
    )
}
export default  Click;
