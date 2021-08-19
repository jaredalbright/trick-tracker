import { useState } from "react";

const AddByForm = ({onSearch, toggleSearch}) => {
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState("TS");
  const [spinDirection, setSpinDirection] = useState("Frontside");
  const [switchVal, setSwitch] = useState(false);
  const [invert, setInvert] = useState("none");
  
  const onSubmit = (e) => {
    e.preventDefault();

    var instructions = {}
    instructions["edge"] = direction;
    instructions["rotation"] = rotation;
    instructions["switch"] = switchVal ? "switch" : "regular";
    instructions["rDirection"] = spinDirection;
    instructions["invert"] = invert;


    onSearch(instructions);

    toggleSearch();

  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-option">
          <label>Rotation</label>
          <input
            type="number"
            placeHolder="Add Rotation"
            step="90"
            min="0"
            value={rotation}
            onChange={(e) => setRotation(e.target.value)}
          />
        </div>
        <div className="form-option">
          <label>Direction</label>
          <input
            type="radio"
            value="TS"
            checked={direction == "TS"}
            name="Direction"
            onChange={(e) => setDirection(e.target.value)}
          />
          <label>Toeside</label>
          <input
            type="radio"
            value="HS"
            name="Direction"
            checked={direction == "HS"}
            onChange={(e) => setDirection(e.target.value)}
          />
          <label>Heelside</label>
          <br></br>
        </div>
        <div className="form-option">
          <label>Spin Direction</label>
          <input
            type="radio"
            value="Frontside"
            checked={spinDirection == "Frontside"}
            name="Spin Direction"
            onChange={(e) => setSpinDirection(e.target.value)}
          />
          <label>Frontside</label>
          <input
            type="radio"
            value="Backside"
            name="Spin Direction"
            checked={spinDirection == "Backside"}
            onChange={(e) => setSpinDirection(e.target.value)}
          />
          <label>Backside</label>
          <br></br>
        </div>
        <div className="form-option">
          <label>Switch</label>
          <input
            type="checkbox"
            checked={switchVal}
            value={switchVal}
            onChange={(e) => setSwitch(e.currentTarget.checked)}
          />
        </div>
        <div className="form-option">
          <label>Invert</label>
          <input
            type="radio"
            value="none"
            name="invert"
            checked={invert == "none"}
            onChange={(e) => setInvert(e.target.value)}
          />
          <label>None</label>
          <input
            type="radio"
            value="front flip"
            name="invert"
            onChange={(e) => setInvert(e.target.value)}
          />
          <label>Front</label>
          <input
            type="radio"
            value="back flip"
            name="invert"
            onChange={(e) => setInvert(e.target.value)}
          />
          <label>Back</label>
          <br></br>
        </div>
        <div className="form-btn">
          <input className="button" type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default AddByForm;
