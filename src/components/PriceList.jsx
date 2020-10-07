import React from "react";
import PriceCard from "./PriceCard";
import axios from "axios";
import apiUri from "../api/apiUri";

function PriceList() {
  const [cardList, setCardList] = React.useState([]);
  React.useEffect(() => {
    const fetchList = async() => {
      await axios.get(`${apiUri}/api/styles`)
        .then(response => {
          const list = [];
          response.data.forEach(e => {
            list.push(
              <PriceCard
                key={e.id}
                haircut={{
                  name: e.styleName,
                  price: e.price,
                  time: e.ect
                }}
              />
            );
          });
          setCardList(list);
        });
    };
    fetchList();
  }, []);
  return(
    <div className="price">
      {cardList}
    </div>
  );
}

export default PriceList;
