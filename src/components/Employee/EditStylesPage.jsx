import React from "react";
import { fetchStyles } from "../../api/styles";
import ServiceList from "../ServiceList";
import styles from "../styles/EditStyle.module.css";
import { useStore, checkStorage } from "../../store";
import AddStyle from "./AddStyle";

const EditStylesPage = () => {
  const { dispatch } = useStore();
  const [list, setList] = React.useState();
  React.useEffect(() => {
    async function fetcher() {
      setList(await fetchStyles());
    }
    fetcher();
    checkStorage();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.addButton}>
        <button onClick={() => {
          dispatch({ type: "setEmployeeComponent", component: <AddStyle /> });
        }}>
          + Add a style
        </button>
      </div>
      <ServiceList serviceList={list} displayScheduleNow={false} />
    </React.Fragment>
  );
};

export default EditStylesPage;
