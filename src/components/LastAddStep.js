import { useEffect, useState } from "react";
import trickDataService from "../services/trickDB.js";

const LastAddStep = ({ trick, userInfo }) => {
  const [comfort, setComfort] = useState("1");
  const [date, setDate] = useState("2000-01-01");
  const [notes, setNotes] = useState("");

    useEffect(() => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd
        setDate(today)
    }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(trick);

    trick['Comfort'] = comfort;
    trick['Date Landed'] = date;
    trick['Notes'] = notes;
    trick['trickID'] = trick["_id"];
    delete trick["_id"];
    trick['user_id'] = userInfo[1];
    trick['user_name'] = userInfo[0];
    
    console.log(trick);
    trickDataService.addToTrickList(trick);
  };

  return (
    <div>
      <h3>{trick.name}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-option">
          <label>Comfort Level</label>
          <select onChange={(e) => setComfort(e.target.value)}>
            <option value="1">Landed Once</option>
            <option value="2">Landed Multiple Times</option>
            <option value="3">Lands 50% of the Time</option>
            <option value="4">Easily Lands</option>
          </select>
        </div>
        <div className="form-option">
          <label>Date Landed</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="form-option">
          <label>Notes:</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <input className="button" type="submit" value="Add Trick" />
        </div>
      </form>
    </div>
  );
};

export default LastAddStep;
