import React from "react";

function RegisterPopup (props) {

  return (
    <div className = {`popup popup_register_success ${props.isOpen}`}>
      <div className="popup__container">
        <img src={props.imagesRegister} alt='знак' className='popup__register-image'/>
        <h2 className='popup__register-text'>{props.textRegister}</h2>
      </div>
    </div>
  )
}

export default RegisterPopup;
