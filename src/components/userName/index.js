import React from "react";
import { shuffler } from "../../utils/shuffler";

export const UserNames = ({
  userNames,
  randomName1,
  randomName2,
  setCount,
  count
}) => {
  const newArray = React.useMemo(() => {
    return shuffler([userNames, randomName1, randomName2]);
  }, [userNames, randomName1, randomName2]);

  const handleClick = value => {
    if (value === userNames) {
      setCount(count + 1);
    }
  };
  console.log(newArray);
  return (
    <div>
      <p>Score: {count}</p>
      {newArray.map((e, i) => (
        <label htmlFor={e} key={e}>
          <button className="button-css" onClick={() => handleClick(e)}>{e}</button>
        </label>
      ))}
    </div>
  );
};
