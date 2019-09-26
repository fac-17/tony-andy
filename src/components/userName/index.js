import React from "react";
import { shuffler } from "../../utils/shuffler";

export const UserNames = ({ userNames, randomName1, randomName2, setCount, count }) => {
  const newArray = shuffler([userNames, randomName1, randomName2]);

  const handleClick = value => {
    if(value === userNames){
      setCount(count +1)
    }
  };

  return (
    <div>
      <p>{count}</p>
      {newArray.map((e, i) => (
        <label htmlFor={e} key={e[i]}>
          <button onClick={()=> handleClick(e)}>
          {e}</button>
        </label>
      ))}
    </div>
  );
};
