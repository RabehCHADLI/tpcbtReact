import { useSelector } from 'react-redux';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import React from 'react'

const Game = (props) => {
  return (
    <div id='bg' className="App">
      <Monster />
      <br></br>
      <section className="container-fluid">
        <PlayerList />

      </section >
    </div>
  )
}

export default Game