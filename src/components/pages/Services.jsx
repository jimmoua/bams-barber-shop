import React from "react";
import ServiceList from "../ServiceList";
import styles from "../styles/Services.module.css";
import fetchStyles from "../../api/fetchStyles";

function Services() {
  const [stylesList, setStylesList] = React.useState();

  React.useEffect(() => {
    const fetchList = async() => {
      setStylesList(await fetchStyles());
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
