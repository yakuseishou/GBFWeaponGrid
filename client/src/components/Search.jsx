import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ItemList from "./itemList/ItemList";

import { useSelector, useDispatch } from 'react-redux';
import { getWeapons } from '../action/weaponListActions';

import Weapons from "./testingData";


function Search(props) {

    const [searchSetting, setSearchSetting] = useState([]);
    // // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const { weapons } = useSelector(state => ({
        ...state.weapons,
    }));

    // const [weapons, setweapons] = useState(Weapons);
    // const [defaultWeapons, setdefaultdefaultWeapons] = useState([]);
    // const [weapons, setweapons] = useState([]);

    // // Note: the empty deps array [] means
    // // this useEffect will run once
    // // similar to componentDidMount()
    
    // useEffect(() => {
    //     const fetchWeapon = async () => {
    //         const result = await axios(
    //             "https://localhost:5001/api/GBFWeapon",
    //             );
    //             setdefaultdefaultWeapons(result.data);
    //             setweapons(result.data);
    //             setIsLoaded(true);
    //         };
            
    //         fetchWeapon();
            
    //     }, []);

    function setSearch(event) {
        const { name, value } = event.target;
        if (name != value) {

            setSearchSetting(prev => {
                return ({
                    ...prev,
                    [name]: value
                })
            });
        } else {
            delete searchSetting[name];
        }
    }
    
    function filterWeapon(event) {
        // setweapons(() => {
        //         return props.defaultWeapons.filter((item) => {
        //             return item == ;
        //     });
        // });
        event.preventDefault();        
    };

    return (
        <div>
            <SearchBar
                setSearch={setSearch}
                handleClick={filterWeapon}
            />
            <ItemList
                weapons={weapons}
                setlistSelected={props.setlistSelected}
            />
        </div>
    );
}

export default Search;