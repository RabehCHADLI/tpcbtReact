import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import React, { useEffect, useRef, useState } from 'react';

const Monster = () => {
  const [i, setI] = useState(false);
  const dispatch = useDispatch();
  const monster = useSelector(state => state.fight.monster[0]);
  const animeHit = useRef(null);
  const pvmonster = useRef(monster.pv);
  const state = useSelector(state => state.fight);
  const players = state.players;

  useEffect(() => {
    if (animeHit.current && monster.pv < pvmonster.current) {
      animeHit.current.classList.add('animate__flash');

      setTimeout(() => {
        if (animeHit.current) {
          animeHit.current.classList.remove('animate__flash');
        }
      }, 800);
    }
    pvmonster.current = monster.pv; // Update pvmonster to the latest pv value
  }, [monster.pv]);

  useEffect(() => {
    // Add a guard condition to ensure initial values don't trigger the effect
    if (monster.pv !== undefined && monster.pv <= 0) {
      setI(true);
    } else {
      let player1 = players[0];
      let player2 = players[1];
      let player3 = players[2];

      // Ensure all players exist and have `pv` defined before checking their `pv` values
      if (player1 && player2 && player3 && player1.pv <= 0 && player2.pv <= 0 && player3.pv <= 0) {
        setI(true);
      }
    }
  }, [monster.pv, players]);

  return (
    i ? (
      <div className='victory' style={{ height: '43rem', width: '100%' }}>
        <form action="">
          <button type='button' className='btn btn-danger'>RELANCER</button>
        </form>
      </div>
    ) : (
      <section>
        <div className='d-flex justify-content-center mb-2'>
          <img className='animate__animated' ref={animeHit} src={monster.image} alt='monster' />
        </div>
        <ProgressBar pv={monster.pv} pvMax={monster.pv} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
      </section>
    )
  );
};

export default Monster;
