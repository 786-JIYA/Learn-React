import ReactDOM from 'react-dom';
import styles from './EventList.module.css';
import './Modal.css'

function Modal({children,handleClose,isColour}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border:"4px solid",
          borderColor:isColour ? "#555":"#a92626ff"}}>
            {children}
            <button onClick={handleClose} style={{
              color:"#fff",
              backgroundColor:"#555",
              padding:"6px 7px"

            }}>Close</button>
        </div>
    </div>
  ),document.body)
}
export default Modal