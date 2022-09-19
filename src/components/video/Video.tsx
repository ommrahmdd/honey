import React from "react";

export default function Video() {
  return (
    <div className="video">
      {/* <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/sAKkjD3nEv0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <video src="https://www.youtube.com/embed/sAKkjD3nEv0"></video>
    </div>
  );
}
