import React from 'react';
import PlayerCard from './PlayerCard';
import ButtonCapacity from './ButtonCapacity';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  const players = useSelector(state => state.fight.players);
  const monster = useSelector(state => state.fight.monster[0]);
  let player1 = players[0]
  let player2 = players[1]
  let player3 = players[2]
  let player4 = players[3]
  let i = false
  if (player1.pv <= 0 && player2.pv <= 0 && player3.pv <= 0 && player4.pv <= 0) {
    i = true
  }
  if (monster.pv <= 0) {
    i = true
  }

  return (
    i ? (
      <></>
    ) : (
      <div className='container-fluid'>

        <div className='row d-flex justify-content-center'>
          {players.map((player, index) => {
            return <PlayerCard key={index} player={player} />;
          })}
        </div>
      </div>
    )
  );
};

export default PlayerList;
