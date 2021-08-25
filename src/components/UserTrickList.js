import { useEffect, useState } from "react";
import TrickCard from "./TrickCard";

const UserTrickList = ({ tricks, refresh, setRefresh }) => {
  const [select, setSelect] = useState("1");
  const [userTricks, setUserTricks] = useState([]);

    useEffect(() =>{
        compAlpha();
    }, [])

  const loadTrick = () => {
  }
  
  const compAlpha = () => {
      tricks.sort(function(a,b){
        var keyA = a.name.toLowerCase(), keyB = b.name.toLowerCase();
        if (keyA > keyB) {
            return 1
        }
        else if (keyB > keyA){
            return -1;
        }
        else {
            return 0;
        }
      })
  };

  const compDate = () => {
    tricks.sort(function(a,b){
        var keyA = a['Date Landed'], keyB = b['Date Landed'];
        if (keyA > keyB) {
            return 1
        }
        else if (keyB > keyA){
            return -1;
        }
        else {
            return 0;
        }
      })
  };

  const compComfort = () => {
    tricks.sort(function(a,b){
        var keyA = a.Comfort, keyB = b.Comfort;
        if (keyA > keyB) {
            return 1
        }
        else if (keyB > keyA){
            return -1;
        }
        else {
            return 0;
        }
      })
  };

  const selector = () => {
    switch(select) {
        case "1": compAlpha(); break;
        case "2": compDate(); break;
        case "3": compComfort(); break;
        default: compAlpha(); break;
      }
  };

  selector();
  
  return (
    <div>
      <form>
      <label>Sort By</label>
          <input
            type="radio"
            value="1"
            name="invert"
            onChange={(e) => setSelect(e.target.value)}
          />
          <label>Alphabetical</label>
          <input
            type="radio"
            value="2"
            name="invert"
            onChange={(e) => setSelect(e.target.value)}
          />
          <label>Date</label>
          <input
            type="radio"
            value="3"
            name="invert"
            onChange={(e) => setSelect(e.target.value)}
          />
          <label>Comfort</label>
          <br></br>
      </form>
        {(tricks.length > 0) && tricks.map((trick) => (
                <TrickCard key = {trick._id} trick = {trick} refresh={setRefresh}/>
            ))}
    </div>
  );
};

export default UserTrickList;
