import React from 'react'

export

const Metrics = (props) => {

    return(
        <div>
            {props.text.map(x=>
              <ul>
               <li>{x}</li>
               </ul>
               )}
        </div>
    )
}

export default Metrics