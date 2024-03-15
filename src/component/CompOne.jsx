import React, { useContext } from "react";
import { MyContext } from "./Context";

const CompOne = () => {
  const { value, updateValue } = useContext(MyContext);

  // console.log("1412 ==>", value);
  

  return <div><h2>hello comp one</h2></div>;
};

export default CompOne;
