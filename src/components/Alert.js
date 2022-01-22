import React from 'react';

function Alert(props) {
  return (
    <div className={`alert ${props.alertType} alert-dismissible show" role="alert"`}>
        {props.alertText}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert;
