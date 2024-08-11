

const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const uniqid = require("uniqid");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.FRONTEND_BASE_URL }));
app.use(express.json());



app.get("/", (_req, res) => {
  res.send("Welcome to the videos page");
});

function readVideos() {
  const videosFile = fs.readFileSync(
    "./data/video-details.json"
  );
  const videosData = JSON.parse(videosFile);
  return videosData;
}

function writeVideos(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync(
    "./data/video-details.json",
    stringifiedData
  );
}

app.get("/videos", (_req, res) => {
  const videosData = readVideos();
  const strippedData = videosData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      description: video.description,
    };
  });
  res.json(strippedData);
});

app.get("/videos/:id", (req, res) => {
  const videoDetails = readVideos();
  const videoDetailsData = videoDetails.find(
    (video) => video.id === req.params.id
  );

  if (videoDetailsData) {
    const responseData = {
      id: videoDetailsData.id,
      title: videoDetailsData.title,
      channel: videoDetailsData.channel,
      image: videoDetailsData.image,
      description: videoDetailsData.description,
    };
    res.json(responseData);
  } else {
    res.status(404).send('Video not found');
  }
});

app.post("/videos", (req, res) => {
  const videosData = readVideos();

  const newVideo = {
    id: uniqid(),
    title: req.body.title,
    channel: "Placeholder channel",
    image: "/Users/isabella/Desktop/LA/BrainStation/Projects/brainflix-api/public/BrainFlix Images/placeholder-image.jpg",
    description: req.body.description,
    views:"0",
    likes:"0",
    duration:"0",
    video:"Placeholder video",
    timestamp: new Date().getTime(),
    comment: [],
  };

  videosData.push(newVideo);
  writeVideos(videosData);
  res.status(201).json(newVideo);
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

