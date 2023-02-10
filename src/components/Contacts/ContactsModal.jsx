import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function ContactsModal({ handleModalClick, children }) {
  return createPortal(
    <div className="modal-backdrop" onClick={handleModalClick}>
      <div className="modal-content">{children}</div>
    </div>,
    modalRoot
  );
}

