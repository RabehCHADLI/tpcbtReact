import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import React from 'react'

const Game = (props) => {
  return (
    <div className='App'>

      <div className="App">
        <Monster />
        <br></br>
        <section className="container-fluid">
          <PlayerList />

        </section >
      </div>
    </div>
  )
}

export default Game