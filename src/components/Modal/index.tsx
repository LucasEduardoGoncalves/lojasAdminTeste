import React from 'react';
import {
  Container
} from'./styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isButtonClose?: boolean;
}

 const Modal: React.FC< ModalProps>= ({ isOpen , onClose , children, isButtonClose = false }) => {
  const overlayRef = React.useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
     if (e.target === overlayRef.current) {
       onClose();
     }
  }

 return isOpen ? (

  <Container>
    <div className="modal">
      <div ref={overlayRef} className="modal__overlay" onClick={handleOverlayClick}/>
      
        <div className="modal__box">

        { isButtonClose && 
          <div className="modal__close-btn">
            <button className="modal__close-btn" onClick={onClose}>X</button>
          </div>
        }

        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  </Container>
) : null;
 };

export default Modal;