import { useState } from 'react';

const Login = ({setUserInfo, loginOff}) => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if (name === "" || pass === "") {
            alert("Please fill in both options")
            return
        }
        
        setUserInfo([name, pass]);

        loginOff();
    }
    return (
        <div className = "form-container">
            <form onSubmit={onSubmit}>
                <div className="form-option">
                <label>username </label>
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-option">
                <label>password </label>
                    <input type="text" value={pass}
                    onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className ="form-btn">
                <input className="button" type="submit" value="Login"/>
                </div>
            </form>
            <h3>Please note that this is not meant to be a secure login</h3>
        </div>
    )
}

export default Login
