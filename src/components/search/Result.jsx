import React from "react";

const Result = (props) => {
  const car = props.car;
  return (
    <>
      <h3>Result Found</h3>
      <ul>
        <li>
          <b>Car ID: </b> {car.id}
        </li>
        <li>
          <b>Car maker: </b> {car.maker}
        </li>
        <li>
          <b>Car color: </b> {car.color}
        </li>
      </ul>
    </>
  );
};

export default Result;
