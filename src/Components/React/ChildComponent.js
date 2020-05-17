import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>parent</button> */}
            {/* passing the paremeter with an arrow function */}
            <button onClick={() =>props.greetHandler('child')}>parent</button>
        </div>
    )
}

export default ChildComponent
