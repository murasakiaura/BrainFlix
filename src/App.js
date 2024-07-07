import "./App.scss";
import Header from "./components/Header/Header.js";
import MainVideo from "./components/MainVideo/MainVideo.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import Comment from "./components/Comment/Comment.js";
import NextVideo from "./components/NextVideo/NextVideo.js";
import videoData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import { useEffect, useState } from "react";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsData[0]);
  const [nextVideo, setNextVideo] = useState(videoData);

  useEffect(() => {
    setCurrentVideo(videoDetailsData[0]);
    setNextVideo(videoData);
  }, []);

  const handleClick = (videoId) => {
    const selectedVideo = videoDetailsData.find(
      (video) => video.id === videoId
    );

    setCurrentVideo(selectedVideo);

    const updatedNextVideo = videoData.filter((video) => video.id !== videoId);
    setNextVideo(updatedNextVideo);
  };

  return (
    <div className="App">
      <Header />
      <MainVideo video={currentVideo} handleClick={handleClick} />
      <Comment comments={currentVideo.comments} />
      <VideoDetails video={videoData} />
      <NextVideo videos={nextVideo} handleClick={handleClick} />
    </div>
  );
}

export default App;
