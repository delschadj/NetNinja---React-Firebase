import "./Modal.css"
import ReactDOM from "react-dom"

import React from 'react'

export default function ({children, isSalesModal, setShowModal }) {
  return ReactDOM.createPortal ((<div className="modal-backdrop">
    <div className="modal" style={{
        border: "4px solid",
        borderColor: isSalesModal? "red" : "blue",
        textAlign: "center"
        }}>
        {
            <div>
                {children}

                <button onClick={() => setShowModal(false)}> close </button>
            </div>
        }
    </div>
</div>),
document.body)
}