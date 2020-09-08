import React from "react";

const MultipleResultFound = (props) => {
  const carIdList = props.carIdList;
  return (
    <>
      <h3>Select one to continue.</h3>
      <ul>
        {carIdList.map((carId) => (
          <li
            key={carId}
            onClick={() => {
              // props.selectCar(carId);
              console.log(carId);
            }}
          >
            {carId}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MultipleResultFound;
