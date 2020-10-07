import React from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import apiUri from "../api/apiUri";
import styles from "./styles/Services.module.css";
import PropTypes from "prop-types";

function ServiceList({ displayScheduleNow }) {
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
                  key: e.id,
                  name: e.styleName,
                  price: e.price,
                  time: e.ect
                }}
                display={displayScheduleNow}
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

ServiceList.propTypes = {
  displayScheduleNow: PropTypes.bool
};

export default ServiceList;
