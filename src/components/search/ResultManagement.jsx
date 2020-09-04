import React, { useState } from "react";

import ResultNotFound from "./ResultNotFound";
import MultipleResultFound from "./MultipleResultFound";

const ResultManagement = (props) => {
  const carIdList = props.carIdList;
  const carIdListLength = carIdList.length;

  console.log(props.carIdList);
  return (
    <>
      {carIdListLength === 0 && <ResultNotFound />}
      {/* {carIdListLength === 1 && <Result />} */}
      {carIdListLength > 1 && <MultipleResultFound carIdList={carIdList} />}
    </>
  );
};

export default ResultManagement;
