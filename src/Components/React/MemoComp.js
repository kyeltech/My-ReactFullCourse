import React from 'react'

function MemoComp({name}) {
    console.log('this is a memo Component')
    return (
        <div>
           {name} 
        </div>
    )
}

export default React.memo(MemoComp)
