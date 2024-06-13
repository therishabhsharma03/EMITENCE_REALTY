import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const handlePlayPause = (entries, observer) => {
      entries.forEach(entry => {
        const iframe = entry.target.querySelector('iframe');
        if (!iframe) return;

        const isIntersecting = entry.isIntersecting;
        const message = isIntersecting ? '{"event":"command","func":"playVideo","args":""}' : '{"event":"command","func":"pauseVideo","args":""}';
        iframe.contentWindow.postMessage(message, '*');
      });
    };

    const observer1 = new IntersectionObserver(handlePlayPause, {
      threshold: 0.9,
    });
    const observer2 = new IntersectionObserver(handlePlayPause, {
      threshold: 0.9,
    });

    if (containerRef1.current) {
      observer1.observe(containerRef1.current);
    }
    if (containerRef2.current) {
      observer2.observe(containerRef2.current);
    }

    return () => {
      if (containerRef1.current) {
        observer1.unobserve(containerRef1.current);
      }
      if (containerRef2.current) {
        observer2.unobserve(containerRef2.current);
      }
    };
  }, []);

  return (
    <div>
      <div ref={containerRef1}>
        <iframe
          ref={videoRef1}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/OSbe_bq_vN4?enablejsapi=1"
          title="YouTube video player 1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div ref={containerRef2}>
        <iframe
          ref={videoRef2}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/OSbe_bq_vN4?enablejsapi=1"
          title="YouTube video player 2"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;