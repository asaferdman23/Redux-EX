// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
 const count = useSelector((state) => state.counter.count);
 const dispatch = useDispatch();
 console.log("Counter component rendered");

 const increment = () => {
  console.log("increment");
   dispatch({ type: 'INCREMENT' });
 };

 const decrement = () => {
   dispatch({ type: 'DECREMENT' });
 };

 return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
   </div>
 );
};

export default Counter;