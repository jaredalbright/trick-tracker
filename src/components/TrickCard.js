import { useState } from "react";
import Button from "./Button";
import { FaTimes, FaEdit } from "react-icons/fa";
import trickDataService from "../services/trickDB";

const TrickCard = ({ trick, loadTrick, refresh }) => {
  const [expand, setExpand] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newNotes, setNewNotes] = useState("");
  const [comfortLevel, changeComfortLevel] = useState(trick.Comfort);

  const onClickOption = () => {
    if (loadTrick != null) {
      loadTrick(trick);
    } else if (!showEdit) {
        setExpand(true);
    } else {
        setExpand(!expand);
    }
  };

  const edit = (e) => {
      e.preventDefault();

    const edits = {
      Notes: newNotes,
      Comfort: comfortLevel,
    };
    trickDataService.updateTrick(trick._id, edits)
    .then(() => {
      refresh();
    })
    .catch(e => {
        console.log(e);
    });
  };

  const erase = () => {
    trickDataService.deleteTrick(trick._id)
    .then(() => {
      refresh();
    })
    .catch(e => {
        console.log(e);
    });
  };

  return (
      <div>
    <div className="trick-card" onClick={() => onClickOption()}>
      <h3> {trick.name}</h3>
      {expand && (
        <div>
          
          <h5 className="extra-card">Comfort Level: {trick.Comfort}</h5>
          <h5 className="extra-card">
            Date Landed: {trick["Date Landed"]}
            <FaTimes
              size={25}
              className="edit"
              style={{ color: "red" }}
              onClick={() => erase()}
            />
            <FaEdit size={25} className="edit" onClick={() => {setShowEdit(!showEdit); setExpand(!expand)}} />
          </h5>
          <h5 className="extra-card">Notes: {trick.Notes}</h5>
          </div> )}
          </div>
          {showEdit && expand && (
            <div className = "edit-container">
              <form onSubmit={(e) => edit(e)}>
                <div className="edit-option">
                  <label>New Comfort Level</label>
                  <select onChange={(e) => changeComfortLevel(e.target.value)}>
                    <option value="1">Landed Once</option>
                    <option value="2">Landed Multiple Times</option>
                    <option value="3">Lands 50% of the Time</option>
                    <option value="4">Easily Lands</option>
                  </select>
                </div>
                <div className="edit-option">
                  <label>New Notes</label>
                  <input
                    type="text"
                    placeholder={trick.Notes}
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                  />
                </div>
                <div className="form-btn">
                  <input
                    className="button"
                    type="submit"
                    value="Update Trick"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
  );
};

export default TrickCard;
