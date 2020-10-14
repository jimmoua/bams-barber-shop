import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./styles/Services.module.css";
import PropTypes from "prop-types";

function ServiceList({ serviceList, displayScheduleNow, setService }) {
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
            setService={setService}
          />
        );
        setCardList(l);
      });
    }
  }, [serviceList, displayScheduleNow, setService]);
  return(
    <div className={styles.serviceList}>
      {cardList}
    </div>
  );
}

ServiceList.propTypes = {
  displayScheduleNow: PropTypes.bool,
  serviceList: PropTypes.array,
  setService: PropTypes.func
};

export default ServiceList;
