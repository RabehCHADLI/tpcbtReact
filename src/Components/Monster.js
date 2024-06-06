import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import React, { useEffect, useRef } from 'react';

const Monster = () => {
  const dispatch = useDispatch();
  const monster = useSelector(state => state.fight.monster[0]);
  const animeHit = useRef()
  const pvmonster = useRef(monster.pv)
  const state = useSelector(state => state.fight);

  useEffect(() => {
    const div = document.getElementById('bg');
    if (div) {
      if (monster.pv <= 0) {
        div.classList.remove('App');
      } else {
        div.classList.add('App');
      }
    }
  }, [monster.pv]);
  useEffect(() => {
    if (monster.pv < pvmonster.current) {
      animeHit.current.classList.add('animate__flash')
    }
    setTimeout(() => {
      if (monster.pv < pvmonster.current) {

        animeHit.current.classList.remove('animate__flash')
      }

    }, 800);
  }, [monster.pv]);



  return (
    monster.pv <= 0 ? (
      <div className='victory' style={{ height: '43rem', width: '100%' }}>
        <form action="">
          <button type='' className='btn btn-danger'>RELANCER</button>
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




