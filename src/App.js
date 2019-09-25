import React from "react";
import logo from "./logo.svg";
import { Userimage } from "./components/userImage/index";
import "./App.css";
import { getGithub } from "./utils/utils";
import randomizer from "./utils/randomiser";



  function App() {
    const [gameData, setGameData] = React.useState(null)

    React.useEffect(   () => {
      getGithub().then(data => setGameData(data))
    }, [])
    if (!gameData) {
      return <h3>...Loading</h3>
    }

    console.log(gameData[randomizer(gameData.length)]);
    
  
    // getGithub().then(data =>  )


    return <Userimage />;


  }

export default App;
