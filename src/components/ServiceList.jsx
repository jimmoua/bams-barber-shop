import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./styles/Services.module.css";
import PropTypes from "prop-types";

function ServiceList({ serviceList, displayScheduleNow }) {
  const [cardList, setCardList] = React.useState([]);
  React.useEffect(() => {
    if(serviceList) {
      const l = [];
      serviceList.forEach(e => {
        l.push(
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
        setCardList(l);
      });
    }
  }, [serviceList, displayScheduleNow]);
  return(
    <div className={styles.serviceList}>
      {cardList}
    </div>
  );
}

ServiceList.propTypes = {
  displayScheduleNow: PropTypes.bool,
  serviceList: PropTypes.array
};

export default ServiceList;
