import React from "react";
import ServiceList from "../ServiceList";
import axios from "axios";
import apiUri from "../../api/apiUri";
import styles from "../styles/Services.module.css";

function Services() {
  const [stylesList, setStylesList] = React.useState();

  React.useEffect(() => {
    const fetchList = async() => {
      await axios.get(`${apiUri}/api/styles`)
        .then(response => {
          setStylesList(response.data);
        });
    };
    fetchList();
  }, []);

  return(
    <div className={styles.servicePage}>
      <h1 className="pageHeader">Services Offered</h1>
      <ServiceList serviceList={stylesList} displayScheduleNow={true}/>
    </div>
  );
}

export default Services;
