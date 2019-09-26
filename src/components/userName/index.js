import React from "react";
import { getGithub } from "../../utils/utils";

export const UserNames = ({ userNames, randomName1, randomName2 }) => {
  return (
  <>
  <p>{userNames}</p>
  <p>{randomName1}</p>
  <p>{randomName2}</p>
  </>
  )
};

