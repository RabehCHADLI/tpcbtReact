import { createSlice } from "@reduxjs/toolkit";
import imagemonster from '../../img/nash.gif'
import aatrox from '../../img/aatrox.gif'
import ahri from '../../img/ahri.gif'
import fiddlesticks from '../../img/fiddlesticks.gif'
import kayle from '../../img/kayle.gif'
import kayn from '../../img/kayn.gif'
import kled from '../../img/kled.gif'
import maokai from '../../img/maokai.gif'
import pantheon from '../../img/pantheon.gif'
import rammus from '../../img/rammus.gif'
import rek_sai from '../../img/rek_sai.gif'
import shen from '../../img/shen.gif'
import singed from '../../img/singed.gif'
import talon from '../../img/singed.gif'
import yi from '../../img/singed.gif'
import yone from '../../img/singed.gif'
import zac from '../../img/singed.gif'
import zed from '../../img/singed.gif'
import ziggs from '../../img/singed.gif'
const initialState = {

    players: [

        // { name: "John", image: 'future image', pv: 100, pvMax: 100, mana: 100, manaMax: 100, id: 0, tour: true, spellDMG1: 10, spellDMG2: 30, lourdDisponible: true, spellHeal: 20, spellRegenMana: 30 },
        // { name: "Jack", image: 'future image', pv: 100, pvMax: 100, mana: 100, manaMax: 100, id: 1, tour: true, spellDMG1: 10, spellDMG2: 30, lourdDisponible: true, spellHeal: 20, spellRegenMana: 30 },
        // { name: "Jessy", image: 'future image', pv: 100, pvMax: 100, mana: 100, manaMax: 100, id: 2, tour: true, spellDMG1: 10, spellDMG2: 30, lourdDisponible: true, spellHeal: 20, spellRegenMana: 30 },

    ],
    monster: [{ name: 'Baron Nashor', pv: 3600, tour: true, image: imagemonster }]
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const dmg = action.payload['dmg'];
            let id = action.payload['id'];
            state.monster[0].pv = state.monster[0].pv - dmg
            state.players[id].tour = false;
            const players = state.players
            let player1 = players[0]
            let player2 = players[1]
            let player3 = players[2]

            if (player1.tour == false && player2.tour == false && player3.tour == false) {

                const rand = Math.floor(Math.random() * (2))
                const player = state.players[rand];
                const dmg = 25
                player.pv = player.pv - dmg

                players.map((player) => {
                    player.tour = true
                })
            }
        },
        hitBack: (state, action) => {
            const id = action.payload['id']
            const player = state.players[id];
            const dmg = Math.floor(Math.random() * (10, 15))
            console.log(dmg);
            player.pv = player.pv - dmg

        },
        heal: (state, action) => {
            const id = action.payload['id']
            const player = state.players[id]
            player.tour = false

            if (player.pv > 70) {
                player.pv = 100

            } else {
                player.pv = player.pv + 30

            }
            const players = state.players
            let player1 = players[0]
            let player2 = players[1]
            let player3 = players[2]
            if (player1.tour == false && player2.tour == false && player3.tour == false) {
                players.map((player) => {
                    player.tour = true
                })
            }
        },
        rabeh: (state, action) => {
            const champ = action.payload['champs']
            console.log(champ);
        }
    }
});

export default fightSlice.reducer;
export const { hitBack } = fightSlice.actions
export const { hitMonster } = fightSlice.actions
export const { heal } = fightSlice.actions
export const { rabeh } = fightSlice.actions
