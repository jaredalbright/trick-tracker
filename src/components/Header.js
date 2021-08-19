import Button from "./Button";
import { useState } from "react";

const Header = ({showAdd, setShowLogin}) => {
    const [showLoginBtn, setShowLoginBtn] = useState(true);

    const loginOptions = () => {
        setShowLogin();
        setShowLoginBtn(!showLoginBtn);
    }
    return (
        <div className = "header">
            <h1>Trick Tracker</h1>
            {showLoginBtn ?
            <Button cName = "button" text = "Login" onClick = {loginOptions} /> :
            <Button cName = "button" text = "New Trick" onClick = {showAdd} />}
        </div>
    )
}

export default Header
