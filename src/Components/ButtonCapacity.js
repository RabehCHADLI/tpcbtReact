import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitBack, heal } from '../features/fight/fightSlice';

let verif = true

const ButtonCapacity = props => {
    const players = useSelector(state => state.fight.players)
    const dispatch = useDispatch();
    const action = () => {
        switch (props.idspell) {
            case 1:
                let tour = players[props.id].tour
                if (tour == true) {
                    dispatch(hitMonster({
                        id: props.id,
                        dmg: props.spell
                    }));
                    setTimeout(() => {
                        dispatch(hitBack({
                            id: props.id,

                        }));
                    }, 1000);

                }
                ;
                break;
            case 2:
                let tour2 = players[props.id].tour
                if (tour2 == true) {
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

                }

                break;
            case 3:

                const playerpv = players[props.id].pv
                if (playerpv > 0 && playerpv > 0) {
                    dispatch(heal({
                        id: props.id,
                        heal: props.spellheal
                    }))
                }

                break;
            case 4:

                const playerpv2 = players[props.id].pv
                if (playerpv > 0 && playerpv2 > 0) {
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