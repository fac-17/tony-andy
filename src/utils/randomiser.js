const randomizer = (max) => {
  let numArray = []
  while (numArray.length < 3) {
  let num = Math.random()
  if(num === 0 && (!numArray.includes(num))) {
    numArray.push(num)
  }
  else if (!numArray.includes(Math.floor((num * max) +1))) {
    numArray.push(Math.floor((num * max) +1))
  }
  }
  return numArray
}

export default randomizer;