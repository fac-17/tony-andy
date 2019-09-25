const randomizer = (max) => {
    let num = Math.random()
    if(num === 0) {
      return num
    }
    else {
      return Math.floor((num * max) +1 )
    }
  }

 export default randomizer