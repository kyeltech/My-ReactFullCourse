import React from 'react'

function Columns() {
    const items = [
    ]
    return (
       <React.Fragment>
           {items.map(item => (
               <React.Fragment key={item.id}>
                   <h1>Title</h1>
                   <p>{item.title}</p>
                   </React.Fragment>
// passing key 
           ))}
           <td> Ezekiel</td> 
           <td> Benjamin</td>
       </React.Fragment>
    )
}

export default Columns
