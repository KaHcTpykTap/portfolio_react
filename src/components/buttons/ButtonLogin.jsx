import { useState } from "react";
import { ButtonLoginContainer } from "./styles/ButtonLogin";

const ButtonLogin = ({ name }) => {
  const [flag, setFlag] = useState(false);
  return (
    <ButtonLoginContainer>
      {name && (
        <div onClick={() => setFlag(!flag)} className="bl-icon">
          {!flag ? (
            <span className="material-icons-outlined">expand_more</span>
          ) : (
            <span className="material-icons-outlined">expand_less</span>
          )}
        </div>
      )}
      <div className="bl-text">{name ? name : "כניסה לחשבון"}</div>
      {!name && <span className="material-icons-outlined">person_outline</span>}
    </ButtonLoginContainer>
  );
};

export default ButtonLogin;
