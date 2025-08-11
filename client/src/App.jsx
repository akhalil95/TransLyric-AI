import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import LyricsDisplay from "./components/LyricsDisplay";
import VideoSelector from "./components/VideoSelector";
import "./styles/global.css";

const videos = [
  { id: "fMQTxR8bBeM", title: "NFAK - Sochta Hoon" },
  { id: "55c6IlV7BEo", title: "Zain Zohaib - Ranjheya Ve" },
];

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const lyrics = `Sample AI translated lyrics for:\n\n${selectedVideo.title}\n\n[Coming soon]`;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // TODO: hook into video player controls
  };

  const handlePrev = () => {
    const currentIndex = videos.findIndex((v) => v.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setSelectedVideo(videos[prevIndex]);
    setProgress(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    const currentIndex = videos.findIndex((v) => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % videos.length;
    setSelectedVideo(videos[nextIndex]);
    setProgress(0);
    setIsPlaying(false);
  };

  const handleProgressChange = (e) => {
    setProgress(Number(e.target.value));
    // TODO: sync video current time
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          TRANS
          <span>LYRIC</span>
          <sup>AI</sup>
        </div>

        <VideoSelector
          videos={videos}
          selectedVideoId={selectedVideo.id}
          onSelect={setSelectedVideo}
        />
      </header>

      <main className="main-content">
        <VideoPlayer videoId={selectedVideo.id} />
        <LyricsDisplay lyrics={lyrics} />
      </main>

      <div className="controls">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />
        <div className="control-buttons">
          <button
            className="control-button"
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#9664;&#124;
          </button>
          <button
            className="control-button"
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "||" : "▶"}
          </button>
          <button
            className="control-button"
            onClick={handleNext}
            aria-label="Next"
          >
            &#124;&#9654;
          </button>
        </div>
      </div>
    </div>
  );
}
