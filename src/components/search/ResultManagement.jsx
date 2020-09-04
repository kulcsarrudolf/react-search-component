import React, { useState } from "react";

import ResultNotFound from "./ResultNotFound";

const ResultManagement = (props) => {
  const carIdList = props.carIdList;
  const carIdListLength = carIdList.length;

  console.log(props.carIdList);
  return <>{carIdListLength === 0 && <ResultNotFound />}</>;
};

export default ResultManagement;
