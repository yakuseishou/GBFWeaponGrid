// import axios from "axios";
import Weapons from "../components/testingData"
import {GET_WEAPONS, WEAPON_LOADING} from "./types"

export const getWeapons = () => dispatch => {
    dispatch(setWeaponsLoading());

    /* testing with local dummp data*/
    dispatch({
        type: GET_WEAPONS,
        payload: Weapons
    })
    
    /* access server data with axios */
    // axios.get("https://localhost:5001/api/GBFWeapon")
    //     .then(res => 
    //         dispatch({
    //             type: GET_WEAPONS,
    //             payload: res.data
    // }));
}

export const setWeaponsLoading = () => {
    return {
        type: WEAPON_LOADING
    }
}