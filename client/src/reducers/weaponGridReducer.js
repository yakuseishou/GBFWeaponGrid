
function setInitWeaponGrid() {
    const weapons = [];

    for (let i = 0; i < 10; i++) {
        let weaponId = "weapon_" + i;
        let weapon = {};
        if(i === 0) {
            weapon = {
                weaponGridId: weaponId,
                weaponInfo: {
                    weaponId: "1040019900",
                    imgurl: "img/mHandWeapon/ls_1040019900.jpg"
                }
            }
        } else {
            weapon = {
                weaponGridId: weaponId,
                weaponInfo: {
                    weaponId: "1040019900",
                    imgurl: "img/subWeapon/m1040019900.jpg"
                }
            }
        }
        weapons.push(weapon);
    }
    return (weapons);
}

const INITIAL_STATE = setInitWeaponGrid();

function weaponGridReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "GRIDWEAPON_UPDATE":
            const weapons = [...state];
            weapons.filter(weapon => {
                if (weapon.weaponGridId === action.payload.weaponGridId) {
                    weapon.weaponInfo = action.payload.weaponInfo
                 }
            })
            return weapons;
        default:
            return state;
    }
}

export default weaponGridReducer;