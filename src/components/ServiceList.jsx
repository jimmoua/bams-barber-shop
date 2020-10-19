import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./styles/Services.module.css";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

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

  const loader = (
    <div style={{
      textAlign: "center"
    }}>
      <ClipLoader />
    </div>
  );

  return(
    <div className={styles.serviceList}>
      {serviceList ? cardList : loader}
    </div>
  );
}

ServiceList.propTypes = {
  displayScheduleNow: PropTypes.bool,
  serviceList: PropTypes.array,
  setService: PropTypes.func
};

export default ServiceList;
