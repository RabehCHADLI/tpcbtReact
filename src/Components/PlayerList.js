import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import ButtonCapacity from './ButtonCapacity';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  let [i, setI] = useState(false)
  const players = useSelector(state => state.fight.players);
  const monster = useSelector(state => state.fight.monster[0]);
  let player1 = players[0]
  let player2 = players[1]
  let player3 = players[2]

  console.log(player1.pv);
  if (player1.pv <= 0 && player2.pv <= 0 && player3.pv <= 0) {
    setI(true)
    console.log(i);
  }

  return (
    i ? (
      <>
        <h1>blablabla</h1>
      </>
    ) : (
      <div className='container-fluid'>

        <div className='row d-flex justify-content-center'>
          {players.map((player, index) => {
            if (player.pv > 0) {
              return <PlayerCard key={index} player={player} />;

            }
          })}
        </div>
      </div>
    )
  );
};

export default PlayerList;
