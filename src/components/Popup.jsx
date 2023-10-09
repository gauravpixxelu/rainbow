import { useState } from 'react';
import Modal from 'react-modal';
import { lazy, Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const LazyYouTube = lazy(() => import('react-youtube'));


const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-gd">
      {/* Render a button or other element to trigger the popup */}
      <img onClick={openPopup} className="video-icon" src="images/video.svg" alt="VideoIcon" />

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadComponent>
            <LazyYouTube
              videoId="8oIlkWNQSio"
              opts={{ width: '100%', height: '700' }}
            />
          </LazyLoadComponent>
        </Suspense>
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default Popup