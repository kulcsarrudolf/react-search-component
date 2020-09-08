import React from "react";

const Result = (props) => {
  const carId = props.carId;
  return (
    <>
      <h3>Result Found</h3>
      <ul>
        <li>
          <b>Car ID: </b>
          {carId}
        </li>
      </ul>
    </>
  );
};

export default Result;
