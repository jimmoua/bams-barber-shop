import React from "react";
import { fetchStyles } from "../../api/styles";
import ServiceList from "../ServiceList";
import styles from "../styles/EditStyle.module.css";

const EditStylesPage = () => {
  const [list, setList] = React.useState();
  React.useEffect(() => {
    async function fetcher() {
      setList(await fetchStyles());
    }
    fetcher();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.addButton}>
        <button> + Add a style</button>
      </div>
      <ServiceList serviceList={list} displayScheduleNow={false} />
    </React.Fragment>
  );
};

export default EditStylesPage;
