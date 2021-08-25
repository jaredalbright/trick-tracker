import { useState, useEffect} from 'react';
import trickDataService from "../services/trickDB.js";
import UserTrickList from "./UserTrickList.js";

const UserDash = ({userInfo, refresh, setRefresh}) => {
    const [tricks, setTricks] = useState([]);

    useEffect(() => {
        trickDataService.getByUserName({user_name:userInfo[0]})
        .then(response => {
            setTricks(response.data.data);
        })
        .catch(e => {
            console.log(e);
        });
    }, [refresh])

    const loading = tricks.length > 0;
    return (
        <div className = "user-dash">
            Welcome {userInfo[0]}
            {
                loading ? (<UserTrickList tricks = {tricks} refresh = {refresh} setRefresh={setRefresh}/>) : "No Tricks Found"
            }

        </div>
    )
}

export default UserDash
