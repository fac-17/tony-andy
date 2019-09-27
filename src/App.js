import React from "react";
import logo from "./logo.svg";
import { Userimage } from "./components/userImage/index";
import { UserNames } from "./components/userName/index";
import "./App.css";
import { getGithub } from "./utils/utils";
import randomizer from "./utils/randomiser";
import Clock from "./components/clock /clock";
import PlayAgain from "./components/playAgain/playAgain";
import { arrayTypeAnnotation } from "@babel/types";
import { randomBytes } from "crypto";

function App() {
  const [gameData, setGameData] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [seconds, setSeconds] = React.useState(30);
  const [active, setActive] = React.useState(true);
  const [randomName1, nameUpdater1] = React.useState("");
  const [randomName2, nameUpdater2] = React.useState("");
  const [answer, answerUpdater] = React.useState("");

  React.useEffect(() => {
    getGithub().then(data => setGameData(data));
  }, []);

  React.useEffect(() => {
    if (gameData) {
      let iterator = randomizer(gameData.length)
      console.log(iterator)
      answerUpdater(gameData[iterator[0]]);
      nameUpdater1(gameData[iterator[1]].login);
      nameUpdater2(gameData[iterator[2]].login);
    }
  }, [count, gameData]);

  if (!gameData || !answer) {
    return <h3>...Loading</h3>;
  }

  const { login, avatar_url } = answer;

  if (seconds > 0) {
    return (
      <section>
        <Userimage imgSrc={avatar_url} />
        <UserNames
          count={count}
          setCount={setCount}
          userNames={login}
          randomName1={randomName1}
          randomName2={randomName2}
        />

        <Clock
          seconds={seconds}
          setSeconds={setSeconds}
          active={active}
          setActive={setActive}
        />
      </section>
    );
  } else {
    return <PlayAgain count={count} />;
  }
}

export default App;
