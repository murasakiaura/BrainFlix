import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
  return (
    <div className="nextvideo">
      <h3 className="nextvideo__title">NEXT VIDEOS</h3>
      {props.filteredVideos.map((video, index) => (
        <Link to={`/videoplayer/${video.id}`} key={index}>
          <div class="nextvideo__card" key={video.id}>
            <div>
              <img className="nextvideo__img" src={video.image} />
            </div>

            <div className="nextvideo__info">
              <h3>{video.title}</h3>
              <h4 className="nextvideo__info--author">{video.channel}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NextVideo;
