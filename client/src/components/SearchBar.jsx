import React, {useState} from "react";
import SearchProperty from "./SearchBar/SearchProperty";


function SearchBar() {
    const [searchBar] = useState([
        {name: "Element", content: ["Fire", "Water", "Earth", "Wind", "Light", "Dark"]}, 
        {name: "WeaponType", content: ["Sabre", "Dagger", "Spear", "Axe", "Staff", "Gun", "Melee", "Bow", "Harp", "Katana"]},
        {name: "UncapLv", content: [0, 1, 2, 3, 4]}
        // {name: "Series", content: ["Grand", etc...]}, 
    ]);

    return (
        <nav class="navbar navbar-dark bg-dark">
            <form>
                <div class="form-row">
                    {searchBar.map(item => {
                        return (
                            <SearchProperty
                                name={item.name}
                                lists={item.content}
                        />);
                    })}
                    <button className="btn btn-lg btn-dark">Search</button>
                </div>
            </form>
        </nav>
    );
}

export default SearchBar;