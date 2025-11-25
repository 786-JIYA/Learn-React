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
        </div>
    </div>
  ),document.body)
}
export default Modal