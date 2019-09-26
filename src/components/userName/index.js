import React from "react";
import { shuffler } from "../../utils/shuffler";

export const UserNames = ({ userNames, randomName1, randomName2 }) => {
  const newArray = shuffler([userNames, randomName1, randomName2]);

  return (
    <div>
      {newArray.map((e, i) => (
        <label htmlFor={e} key={e[i]}>
          <p>{e}</p>
        </label>
      ))}
    </div>
  );
};
