import React from 'react'


const How = () => {
      //with jsx//
    // return (
    //     <div>
    //         <h1>
    //                 and also JSx
    //         </h1>
    //     </div>
    // )
      // without JSX//
  return React.createElement(
'div',
{id:"hello", class:"dummyclass"},
   React.createElement( 'h1', null, 'hello from me')
  )
}
export default How