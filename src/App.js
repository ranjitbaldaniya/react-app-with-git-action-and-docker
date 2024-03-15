import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./component/context/LoginContext";

function App() {
  const array = [5, 10, 55, 58, 66, 2, 1, 2, 5, 8, 6, 3, 77];

  //   const sortedArray = array.sort((a,b) => {return a - b});
  //   console.log("sortedArray" , sortedArray)

  //   // const maxNum = Math.max(...sortedArray);
  // const maxNum = sortedArray.splice(0 , sortedArray.length)

  // function getMax(array) {

  //   let maxNum = array[0];

  //   for(let i=0; i<= array.length; i++){
  //     if(array[i] > maxNum){
  //       maxNum = array[i]
  //     }
  //   }
  //   return maxNum

  // }

  //   console.log("maxNum" ,  getMax(array))

  // const childFunction = (a, b) => {
  //   return a + b;
  // };

  // const parentFunction = (a, childFunction) => {
  //    return childFunction(a, 10);
  // };

  // console.log(parentFunction(10, childFunction));

  // let counter = 0;

  // while (counter < 5) {
  //   console.log("counter", counter);

  //   counter++;
  // }


  const {user } = useContext(UserContext);


  // console.log("user==>" , user)





  

  return (
    <div className="App">
      <h2>Hello word!!!</h2>
    </div>
  );
}

export default App;
