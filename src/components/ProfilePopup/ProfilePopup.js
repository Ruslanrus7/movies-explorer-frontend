import React from "react";
import image from '../../images/register_success.svg';
import './ProfilePopup.css'

function ProfilePopup ({popupOpened, handlePopup}) {


  return (
    <div className = {`popup ${popupOpened}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={handlePopup}></button>
        <img src={image} alt='знак' className='popup__register-image'/>
      </div>
    </div>
  )
}

export default ProfilePopup;
