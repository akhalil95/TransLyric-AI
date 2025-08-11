import React from "react";

export default function VideoSelector({ videos, selectedVideoId, onSelect }) {
  return (
    <select
      value={selectedVideoId}
      onChange={(e) => {
        const vid = videos.find((v) => v.id === e.target.value);
        onSelect(vid);
      }}
      aria-label="Select a music video"
      style={{
        padding: "10px 15px",
        fontSize: 16,
        borderRadius: 25,
        border: "1px solid #000",
        outline: "none",
        width: 320,
        cursor: "pointer",
        boxShadow: "1px 1px 6px rgba(0,0,0,0.1)",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        textAlignLast: "center",
      }}
    >
      {videos.map((video) => (
        <option key={video.id} value={video.id}>
          {video.title}
        </option>
      ))}
    </select>
  );
}
