import React from 'react'

// function NameList() {
//      const name = ['kyel', 'damien', 'bryan']
//     return (
//         <div>
//             <h1>{name[0]}</h1>
//             <h1>{name[1]}</h1>
//             <h1>{name[2]}</h1>
//         </div>
//     )
// }

// export default NameList

// using a mapping to map the array method

// function List(){
//     const names = ['maami', 'kyel', 'bryan']
//     return(
//     <div>
//         {
//             names.map ( name => <h2>{name}</h2>)
//         }
//     </div>
//     ) 
// }
// export default List

function Person() {
    const Persons = [
        {
            id: 1,
            name: 'maami',
            Age: 18,
            Skills: 'sleeping'
        },
        {
            id: 2,
            name: 'bryan',
            age: 20,
            Skills: 'smiling'
        }
    ]
    const Person = Persons.map( Pesin => (
    <h2> i am {Pesin.name}, am{Pesin.Age} and i love {Pesin.Skills}</h2>
    )) 
    return <div>{Person}</div>
}
export default Person
