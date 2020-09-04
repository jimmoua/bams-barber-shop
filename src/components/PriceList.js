import React from "react";
import PriceCard from "./PriceCard";

function PriceList(){
  return(
    <div className="price">
      <PriceCard 
        haircut={{name: "Haircut + shave" , price:"25$" , time: "35min"}}
      />
      <PriceCard
        haircut={{name: "Haircut + taper" , price:"20$" , time: "30min"}}
      />
      <PriceCard
        haircut={{name: "Drop Fade" , price:"15$" , time: "25min"}}/>
            

    </div>

  );
}

export default PriceList;