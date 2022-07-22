import "./Modal.css"
import ReactDOM from "react-dom"

import React from 'react'

export default function ({children, handleClose }) {
  return ReactDOM.createPortal ((<div className="modal-backdrop">
    <div className="modal">
        {
            <div>
                {children}

                <button onClick={handleClose}> close </button>
            </div>
        }
    </div>
</div>),
document.body)
}