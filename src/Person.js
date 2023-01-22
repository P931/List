import React from "react";

const Person = (props) => {
  return (
    <>
      <h1>firstname : {props.firstname} </h1>
      <h1>name : {props.name} </h1>
      <h1>age : {props.age}</h1>
    </>
  );
};

export default Person;
