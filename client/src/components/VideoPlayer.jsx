import React from "react";

export default function VideoPlayer({ videoId }) {
  if (!videoId) return <div className="video-box">Select a video to play</div>;

  const src = `https://www.youtube.com/embed/${videoId}?controls=1&rel=0`;

  return (
    <iframe
      className="video-box"
      width="450"
      height="320"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
