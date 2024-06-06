import { createSlice } from "@reduxjs/toolkit";
import imagemonster from '../../img/nash.gif'
import Aatrox from '../../img/aatrox.gif'
import Ahri from '../../img/ahri.gif'
import Fiddlesticks from '../../img/fiddlesticks.gif'
import Kayle from '../../img/kayle.gif'
import Kayn from '../../img/kayn.gif'
import Kled from '../../img/kled.gif'
import Maokai from '../../img/maokai.gif'
import Pantheon from '../../img/pantheon.gif'
import Rammus from '../../img/rammus.gif'
import Rek_sai from '../../img/rek_sai.gif'
import Shen from '../../img/shen.gif'
import Singed from '../../img/singed.gif'
import Talon from '../../img/talon.gif'
import Yi from '../../img/yi.gif'
import Yone from '../../img/yone.gif'
import Zac from '../../img/zac.gif'
import Zed from '../../img/zed.gif'
import Ziggs from '../../img/ziggs.gif'

const tableauImage = {
    Aatrox, Ahri, Fiddlesticks, Kayle, Kayn, Kled, Maokai, Pantheon,
    Rammus, Rek_sai, Shen, Singed, Talon, Yi, Yone, Zac, Zed, Ziggs
};
const initialState = {
    isPlayerAttacking: [],
    monsterAnimationDmg: false,
    players: [],
    monster: [{ name: 'Baron Nashor', pv: 3800, pvMax: 3800, tour: true, image: imagemonster }]
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

            if (state.isPlayerAttacking.length === 4) {

                const rand = Math.floor(Math.random() * (2))
                const player = state.players[rand];
                const dmg = 25
                player.pv = player.pv - dmg
            }
            if (player1.tour == false && player2.tour == false && player3.tour == false) {
                players.map((player) => {
                    player.tour = true
                })
            }
        },
        hitBack: (state, action) => {
            const id = action.payload['id']
            const player = state.players[id];
            const dmg = Math.floor(Math.random() * (50, 60))
            player.pv = player.pv - dmg

        },
        heal: (state, action) => {
            const id = action.payload['id']
            const player = state.players[id]

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
        saveChampSelect: (state, action) => {
            const champs = action.payload
            let i = 0
            champs.map((player) => {
                player.id = i
                player.pv = 100
                player.pvMax = 100
                player.mana = 100
                player.manaMax = 100
                player.spellDMG1 = 100
                player.spellDMG2 = 300
                player.lourdDisponible = true
                player.spellHeal = 20
                player.spellRegenMana = 30
                player.image = tableauImage[player.name]
                i++
            })
            state.players = champs
        },
        removetour: (state) => {
            state.isPlayerAttacking = [];
        },
        addIdIsPlayerAttacking: (state, action) => {
            state.isPlayerAttacking.push(action.payload);
        },
        attaqueLourde: (state, action) => {
            const id = action.payload
            state.players[id].lourdDisponible = !state.players[id].lourdDisponible
        }
    }
});

export default fightSlice.reducer;
export const { hitBack } = fightSlice.actions
export const { hitMonster } = fightSlice.actions
export const { heal } = fightSlice.actions
export const { saveChampSelect } = fightSlice.actions
export const { removetour } = fightSlice.actions
export const { addIdIsPlayerAttacking } = fightSlice.actions
export const { attaqueLourde } = fightSlice.actions
