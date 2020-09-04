import React, { useState } from "react";

const MultipleResultFound = (props) => {
  const carIdList = props.carIdList;
  return (
    <>
      <h3>Multiple result found. Please select one to continue</h3>
      <ul>
        {carIdList.map((carId) => (
          <li key={carId}>{carId}</li>
        ))}
      </ul>
    </>
  );
};

export default MultipleResultFound;
