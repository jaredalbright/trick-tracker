const Button = ({ cName, text, onClick }) => {
    return (
        <div>
          <button
            className = {cName}
            onClick = {onClick} >
                {text}
            </button>
        </div>
    )
}

export default Button
