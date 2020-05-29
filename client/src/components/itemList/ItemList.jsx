import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import Weapon from "../testingData";


function ItemList(props) {
    
    // const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    
    useEffect(() => {
        const fetchWeapon = async () => {
            const result = await axios(
                "https://localhost:5001/api/GBFWeapon",
                );
            setIsLoaded(true);
            setItems(result.data);
        };
     
        fetchWeapon();
      }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="row">
                {items.map((item => {
                    return (
                        <Item 
                            key={item.id}
                            info={item}
                        />
                    );
                }))}
            </div>
        );
    }

}

export default ItemList;