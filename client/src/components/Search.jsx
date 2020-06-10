import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ItemList from "./itemList/ItemList";
import { useSelector, useDispatch } from 'react-redux';


function Search(props) {

    const { weapons } = useSelector(state => ({
        ...state.weapons,
    }));
    const search = useSelector(state => state.search);

    const dispatch = useDispatch();

    function setSearch(event) {
        const { name, value } = event.target;
        dispatch({
            type: "UPDATE_SEARCH",
            payload: {
                name: name,
                value: value
            }
        });
    }
    
    function filterWeapon(event) {
        dispatch({
            type: "FILTER_WEAPONS",
            payload: search
        })
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
            />
        </div>
    );
}

export default Search;

    // // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
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