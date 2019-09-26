import React from "react";
import logo from "./logo.svg";
import { Userimage } from "./components/userImage/index";
import { UserNames } from "./components/userName/index";
import "./App.css";
import { getGithub } from "./utils/utils";
import randomizer from "./utils/randomiser";
import Clock from "./components/clock /clock";


function App() {
  const [gameData, setGameData] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [seconds, setSeconds] = React.useState(30);
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    getGithub().then(data => setGameData(data));
  }, []);
  if (!gameData) {
    return <h3>...Loading</h3>;
  }

  const { login, avatar_url } = gameData[randomizer(gameData.length)];

  const randomName1 = gameData[randomizer(gameData.length)].login;

  const randomName2 = gameData[randomizer(gameData.length)].login;


  return (
    <section>
      <Userimage imgSrc={avatar_url}/>
      <UserNames count={count} setCount={setCount} userNames={login} randomName1 = {randomName1} randomName2 = {randomName2}/>
      <Clock seconds = {seconds} setSeconds = {setSeconds} active={active} setActive={setActive} />
    </section>
    
  )

}

export default App;
