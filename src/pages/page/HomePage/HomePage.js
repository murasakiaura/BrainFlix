import "./HomePage.scss";
import MainVideo from "../../../components/MainVideo/MainVideo.js";
import Comment from "../../../components/Comment/Comment.js";
import NextVideo from "../../../components/NextVideo/NextVideo.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState([]);
  const [nextVideo, setNextVideo] = useState([]);
  const [comment, setComment] = useState([]);
  const { videoplayerid } = useParams();

  const [currentVideoId, setCurrentVideoId] = useState("");
  const url =
    "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=737c29e4-c32d-4ce8-a385-fec13076b665";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${url}`);
        setNextVideo(data.data);
        setCurrentVideoId(data.data[0].id);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (currentVideoId || videoplayerid) {
      const videoId = videoplayerid || currentVideoId;

      const getComment = async () => {
        try {
          const comment = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=737c29e4-c32d-4ce8-a385-fec13076b665`
          );
          setComment(comment.data.comments);

          setCurrentVideo(comment.data);
          console.log(comment.data);
        } catch (error) {
          console.log(error);
        }
      };
      getComment();
    }
  }, [currentVideoId, videoplayerid]);
  const filteredVideos = nextVideo.filter(
    (video) => video.id !== currentVideo.id
  );

  return (
    <div className="HomePage">
      <div className="HomePage__leftpart">
        <MainVideo videoData={currentVideo} />;
        <Comment comments={comment} />;
      </div>
      <div className="HomePage__rightpart">
        <NextVideo filteredVideos={filteredVideos} />
      </div>
    </div>
  );
}

export default HomePage;
