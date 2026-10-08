import { useEffect, useRef } from "react";

export default function EditorialAutoplayVideo({
  video,
  poster,
  className = "w-full",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentVideo
            .play()
            .catch(() => {
              // Algunos navegadores bloquean autoplay
            });
        } else {
          currentVideo.pause();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentVideo);

    const handlePlay = () => {
      document.querySelectorAll("video").forEach((video) => {
        if (video !== currentVideo) {
          video.pause();
        }
      });
    };

    currentVideo.addEventListener("play", handlePlay);

    return () => {
      observer.disconnect();
      currentVideo.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}