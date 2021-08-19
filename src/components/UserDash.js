import { useState, useEffect} from 'react';
import trickDataService from "../services/trickDB.js";
import UserTrickList from "./UserTrickList.js";
import TrickCard from "./TrickCard.js" ;

const UserDash = ({userInfo}) => {
    const [tricks, setTricks] = useState([]);

    useEffect(() => {
        trickDataService.getByUserName({user_name:userInfo[0]})
        .then(response => {
            setTricks(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    }, [])

    const loading = tricks.length > 0;
    return (
        <div className = "user-dash">
            Welcome {userInfo[0]}

            {
                loading ? (<UserTrickList tricks = {tricks}/>) : "No Tricks Found"
            }

        </div>
    )
}

export default UserDash
