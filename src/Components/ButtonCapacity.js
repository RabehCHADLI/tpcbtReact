import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitBack, heal, removetour, addIdIsPlayerAttacking, attaqueLourde } from '../features/fight/fightSlice';


const ButtonCapacity = props => {
    const state = useSelector(state => state.fight)
    function verifPlayer(idplayer, isPlayerAttacking) {
        let allowed = true;
        let nbPlayersAlive = 0;
        state.players.map((player) => {
            if (player.pv > 0) {
                nbPlayersAlive++;
                console.log('nb player alive', nbPlayersAlive);
            }
        })
        if (isPlayerAttacking.length === nbPlayersAlive || nbPlayersAlive == 1) {
            dispatch(removetour())
        } else if (nbPlayersAlive == 2) {
            dispatch(removetour())
        }
        else {
            isPlayerAttacking.map((player) => {
                if (player === idplayer) {
                    allowed = false;
                }
            })
        }

        return allowed;
    }
    const players = useSelector(state => state.fight.players)
    const dispatch = useDispatch();
    const action = () => {
        let i = verifPlayer(props.id, state.isPlayerAttacking)
        switch (props.idspell) {
            case 1:
                if (verifPlayer(props.id, state.isPlayerAttacking)) {
                    dispatch(attaqueLourde(props.id))

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
                if (state.players[props.id].lourdDisponible === true) {
                    if (verifPlayer(props.id, state.isPlayerAttacking)) {

                        dispatch(attaqueLourde(props.id))
                        console.log(state.players[props.id].lourdDisponible);
                        dispatch(hitMonster({
                            id: props.id,
                            dmg: props.spell,
                            mana: 20
                        }));
                        setTimeout(() => {
                            dispatch(hitBack({
                                id: props.id,
                                dmg: 10
                            }));
                        }, 1000);
                    }
                    dispatch(addIdIsPlayerAttacking(props.id))

                }
                break;
            case 3:
                if (verifPlayer(props.id, state.isPlayerAttacking)) {


                    if (state.players[props.id].pv > 0) {
                        dispatch(attaqueLourde(props.id))

                        dispatch(heal({
                            id: props.id,
                            heal: props.spellheal,
                            mana: 30
                        }))
                    }
                    dispatch(addIdIsPlayerAttacking(props.id))


                }

                break;
            case 4:
                if (verifPlayer(props.id)) {

                    dispatch(attaqueLourde(props.id))



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