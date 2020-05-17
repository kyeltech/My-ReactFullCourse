import React from 'react'
 

function Personal() {
    const names = [
        'Kyel', 'Maami', 'Bryan', 'kyel'
    ]
    // const Personal = names.map(name => <h2 key={name}>{name}</h2>)
    // return (
    //     <div>
    //          {Personal}  
    //     </div>

    // what if there is double name? it means you will have to pass in the index
    const Personal = names.map((name, index) => <h2 key={index}>{index} {name}</h2>) 
    return (
        <div>
            {Personal}
        </div>
    )
}

export default Personal
