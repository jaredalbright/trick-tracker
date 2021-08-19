import React from 'react'
import { useState } from "react";

const AddBySearch = ({onSearch, toggleSearch}) => {
    const [searchTXT, setSearchTXT] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();


        onSearch(searchTXT)
        toggleSearch();
    }
    return (
        <div>
        <form onSubmit={onSubmit}>
        <div className="form-option">
          <label>Trick name: </label>
          <input
            type="text"
            value={searchTXT}
            onChange={(e) => setSearchTXT(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <input className="button" type="submit" value="Search" />
        </div>
        </form>
        </div>
    )
}

export default AddBySearch
