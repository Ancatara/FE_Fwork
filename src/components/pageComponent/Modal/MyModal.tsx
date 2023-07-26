import Modal from "react-modal";
import React, { useEffect, useState } from 'react'

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children?: any
}

const MyModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="modal"
      overlayClassName="modal-overlay"
      // contentLabel="Confirmation"
      style={{
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'

        },
        overlay: {
          position: "absolute",
          height: 400,
          width: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          right: 0,
          bottom: 0,
          // backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
      }}
    >
    {children}
    </Modal>
  )
}

export default MyModal