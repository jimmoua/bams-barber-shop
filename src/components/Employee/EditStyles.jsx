import React from "react";
import fetchStyles from "../../api/fetchStyles";
import ServiceList from "../ServiceList";

const EditStyles = () => {
  const [list, setList] = React.useState();
  React.useEffect(() => {
    async function fetcher() {
      setList(await fetchStyles());
    }
    fetcher();
  });
  return (
    <React.Fragment>
      <ServiceList serviceList={list} displayScheduleNow={false} />
    </React.Fragment>
  );
};

export default EditStyles;
