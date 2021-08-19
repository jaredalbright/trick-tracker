import { useState, useEffect } from "react";
import trickDataService from "../services/trickDB.js";
import TrickCard from "./TrickCard.js";

const SearchResult = ({query, type, toggleSearch, returnTrick}) => {
    const [tricks, setTricks] = useState([]);

     useEffect(() => {
        console.log(type);
        const fetchTricks = () => {
            if (!type) {
                byName();
            }
            else {
                byForm();
            }
        }

        fetchTricks();
    }, [])

    const byName = () => {
        trickDataService.getByName(query)
        .then(response => {
            setTricks(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const byForm = () => {
        trickDataService.getByQuery(query)
        .then(response => {
            console.log(response.data);
            setTricks(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    

    const newTrick = (trickToAdd) => {
        toggleSearch();
        returnTrick(trickToAdd);
    }

    const loading = tricks.length > 0;
    
    return (
        <div>
            {loading ?
            tricks.map((trick) => (
                <TrickCard key = {trick._id} trick = {trick} loadTrick = {newTrick}/>
            ))
            : "No Tricks Found"
            }
        </div>
    );
}

export default SearchResult
