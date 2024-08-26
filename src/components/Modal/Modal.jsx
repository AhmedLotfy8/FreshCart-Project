import React, { useEffect, useState } from 'react';
import Style from './Modal.module.css';
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ brand, onClose }) {

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 500); 

      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);


  return (
    <div className={isClosing ? `${Style.modalOverlay} ${Style.closing}` : Style.modalOverlay} onClick={handleClose}>
      <div className={`${Style.modalContent} ${isClosing ? Style.modalContentClosing : ''}`} onClick={(e) => e.stopPropagation()}>

        <div className='flex justify-end items-center pb-3'>
          <button className={`${Style.closeButton} text-gray-500 text-3xl px-1`} onClick={handleClose}> <IoCloseOutline></IoCloseOutline> </button>
        </div>

        <div className='flex justify-between items-center border-y-2 border-gray-200 py-3'>
          <div>
            <h3 className="text-green-600 dark:text-green-500 font-semibold text-3xl text-center">{brand.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{brand.slug}</p>
          </div>
          <img src={brand.image} alt="hi" className=" max-w-52  " />
        </div>

        <div className='flex justify-end pt-3'>
          <button className={`${Style.closeButton} bg-gray-500 text-white px-3 py-1.5`} onClick={handleClose}>Close</button>
        </div>

      </div>

    </div>
  );
}