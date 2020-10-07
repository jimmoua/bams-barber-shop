import React from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import apiUri from "../api/apiUri";
import styles from "./styles/Services.module.css";

function ServiceList() {
  const [cardList, setCardList] = React.useState([]);
  React.useEffect(() => {
    const fetchList = async() => {
      await axios.get(`${apiUri}/api/styles`)
        .then(response => {
          const list = [];
          response.data.forEach(e => {
            list.push(
              <ServiceCard
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
    <div className={styles.serviceList}>
      {cardList}
    </div>
  );
}

export default ServiceList;
