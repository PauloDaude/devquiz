import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Popup = ({ visible, onClose, children }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(visible);
  }, [visible]);

  const handleClose = () => {
    setIsActive(false);
    onClose();
  };

  return (
    <>
      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-gray-800 opacity-75"
          ></div>
          {children}
        </div>
      )}
    </>
  );
};

export default Popup;
