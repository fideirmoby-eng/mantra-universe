import { useEffect, useRef } from "react";

export default function EditorialVideo({
  video,
  poster,
  className = "w-full max-w-md overflow-hidden rounded-xl",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return;

    // Pausa el vídeo cuando deja de verse
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          currentVideo.pause();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(currentVideo);

    // Solo un vídeo puede reproducirse
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
      controls
      preload="metadata"
      poster={poster}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}