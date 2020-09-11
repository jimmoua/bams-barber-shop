import React from "react"


function PriceCard (props) {

   return (
       <div className="price-card">
           <h1>{props.haircut.name}</h1>
           <p>{props.haircut.price } . {props.haircut.time}</p>
        
           <hr/>
       </div>
   )
};
export default PriceCard