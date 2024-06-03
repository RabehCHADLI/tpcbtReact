import React from 'react';
import PlayerCard from './PlayerCard';
import ButtonCapacity from './ButtonCapacity';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  const players = useSelector(state => state.fight.players);
  console.log(players);
  const monster = useSelector(state => state.fight.monster[0]);

  return (
    monster.pv <= 0 ? (
      <h1 className='text-success'>WINNER</h1>
    ) : (
      <div className='container-fluid'>

        <div className='row'>
          {players.map((player, index) => {
            return <PlayerCard key={index} player={player} />;
          })}
        </div>
      </div>
    )
  );
};

export default PlayerList;
