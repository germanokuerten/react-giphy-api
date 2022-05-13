import './App.css';

import Title from './components/Title';
import Button from './components/Button';
import Display from './components/Display';

import { useState } from "react"


function App () {

  const API_KEY="smPPzjlZJNpYOHg4sOkiILwHl3XkyYpl"

  const [giphy, setGiphy] = useState(null)

  async function handleClick() {
  const response = await fetch(
    // Template literals (Template strings)
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g

    `
  )
    const data = await response.json()
    setGiphy(data)
    console.log(data)
  }

  return (
    <div className="App">
      <Title/>
      <Button handleClick={handleClick} />
      <Display giphy={giphy} />
      
    </div>
  );
}

export default App;
