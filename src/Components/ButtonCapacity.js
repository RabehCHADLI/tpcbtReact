import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitBack, heal, removetour, addIdIsPlayerAttacking } from '../features/fight/fightSlice';


const ButtonCapacity = props => {
    const state = useSelector(state => state.fight)
    function verifPlayer(idplayer, isPlayerAttacking) {
        let allowed = true;
        let nbPlayersAlive = 0;
        state.players.map((player) => {
            if (player.pv > 0) {
                nbPlayersAlive++;
            }
        })
        if (isPlayerAttacking.length === nbPlayersAlive) {
            dispatch(removetour())
        }
        else {
            isPlayerAttacking.map((player) => {
                if (player === idplayer) {
                    allowed = false;
                }

            })
        }
        console.log(isPlayerAttacking);

        return allowed;
    }
    const players = useSelector(state => state.fight.players)
    const dispatch = useDispatch();
    const action = () => {
        let i = verifPlayer(props.id, state.isPlayerAttacking)
        console.log('verif', i);
        switch (props.idspell) {
            case 1:
                if (verifPlayer(props.id, state.isPlayerAttacking)) {

                    dispatch(hitMonster({
                        id: props.id,
                        dmg: props.spell
                    }));
                    setTimeout(() => {
                        dispatch(hitBack({
                            id: props.id,
                        }));
                    }, 1000);
                    dispatch(addIdIsPlayerAttacking(props.id))

                }

                break;
            case 2:
                if (verifPlayer(props.id, state.isPlayerAttacking)) {

                    dispatch(hitMonster({
                        id: props.id,
                        dmg: props.spell
                    }));
                    setTimeout(() => {
                        dispatch(hitBack({
                            id: props.id,
                            dmg: 10
                        }));
                    }, 1000);
                    dispatch(addIdIsPlayerAttacking(props.id))

                }
                break;
            case 3:
                if (verifPlayer(props.id, state.isPlayerAttacking)) {


                    if (state.players[props.id].pv > 0) {

                        dispatch(heal({
                            id: props.id,
                            heal: props.spellheal
                        }))
                    }
                    dispatch(addIdIsPlayerAttacking(props.id))


                }

                break;
            case 4:
                if (verifPlayer(props.id)) {



                    dispatch(heal({
                        id: props.id,
                        heal: props.spellheal
                    }))

                }
                break;

            default:
                break;
        }
    }


    return (
        <div>
            <button type="button" onClick={action} className="btn material-tooltip-main " style={{ backgroundColor: '#CDFAFA' }}>
                {props.spellname}
            </button>
        </div>
    )
}

export default ButtonCapacity