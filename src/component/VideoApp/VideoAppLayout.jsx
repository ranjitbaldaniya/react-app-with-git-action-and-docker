import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoApp.css";

const VideoAppLayout = () => {
  const videoUrls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    // Add more URLs if needed
  ];

  const [currentVideo, setCurrentVideo] = useState(videoUrls[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);

  const handlePlayerError = (error) => {
    console.error("Error loading the video:", error);
    setError("Error loading the video. Please try again.");
    setIsLoading(false);
  };

  const handleBuffer = () => {
    setIsLoading(true);
  };

  const handleBufferEnd = () => {
    setIsLoading(false);
    setError(null); // Clear error message when buffering ends
  };

  const handleVideoClick = (url) => {
    setCurrentVideo(url);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="main-left">
          {isLoading && !error && <div>Loading...</div>}
          {error && <div className="error-message">{error}</div>}
          <ReactPlayer
            url={currentVideo}
            controls
            width="100%"
            height="100%"
            // onContextMenu={(e) => e.preventDefault()}
            config={{
              file: { forceVideo: true },
              attributes: { controlsList: "nodownload" },
            }}
            playing={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onError={handlePlayerError}
            onBuffer={handleBuffer}
            onBufferEnd={handleBufferEnd}
          />
        </div>
        <div className="main-right">
          <div className="sidebar">
            {videoUrls.map((url, index) => (
              <div
                key={index}
                className={`small-div ${currentVideo === url ? "active" : ""}`}
                onClick={() => handleVideoClick(url)}
              >
                <ReactPlayer url={url} width="100%" height="100%" poster />
              </div>
            ))}
            <div className="button-div">
              <button>Click Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAppLayout;
