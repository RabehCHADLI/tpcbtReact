export function hitMonster() {
    const monster = state.monster[0];
    const dmg = action.payload;
    monster.pv -= dmg;
}
