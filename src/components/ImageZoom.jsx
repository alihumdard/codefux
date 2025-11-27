import React, { useRef, useEffect, useState } from 'react';

const ImageZoom = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentImage = imageRef.current;
    if (!currentImage) return;

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      // Trigger when 10% of the element is visible
      { threshold: 0.1 } 
    );

    observer.observe(currentImage);

    // Cleanup
    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  // Zoom-specific classes: 
  const zoomClasses = `
    transition-transform duration-500 ease-out 
    ${isVisible ? 'scale-110' : 'scale-100'}
  `;

  return (
    // Outer container
    <div className="mt-10 px-4 max-w-7xl mx-auto overflow-visible">
      <div className="**w-full h-auto block origin-center animate-rotate-slow-360**"> 
        <img
          ref={imageRef}
          src="/images/download.png"
          alt="Code analysis screenshot"
          className={zoomClasses} // Zoom effect apply hoga
        />
      </div>
    </div>
  );
};

export default ImageZoom;