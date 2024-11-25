import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const WarningModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasVisited', 'true');
    setIsVisible(false);
  };

  return (
    <Modal
      open={isVisible}
      footer={null}
      closable={true}
      closeIcon={<span className="text-white opacity-80 hover:opacity-100 text-xl">×</span>}
      maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      className="warning-modal"
      width={500}
      bodyStyle={{
        padding: '24px',
        backgroundColor: '#C1432E',
        borderRadius: '4px'
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="text-xl text-white font-medium">Warning</div>
        <p className="text-white/90 leading-relaxed">
          Lorem ipsum dolor sit met dolor sit metdolor sit metdolor sit metdolor sit
          metdolor sit metdolor sit metdolor sit metdolor sit metdolor sit metdolor
          sit metdolor sit metdolor sit metdolor sit metdolor sit metdolor sit
          metdolor sit met.dolor sit metdolor sit metdolor sit metdolor sit metdolor sit
        </p>
        <div className="text-center">

        <button
          onClick={handleAccept}
          className="self-end text-white underline hover:no-underline"
          >
          J'accepte
        </button>
            </div>
      </div>
    </Modal>
  );
};

export default WarningModal;