import "./MainVideo.scss";
import viewicon from "../../assets/Icons/views.svg";
import likeicon from "../../assets/Icons/likes.svg";

function MainVideo(props) {
  const video = props.videoData;
  function convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  return (
    <div className="mainvideo">
      <div className="mainvideo__player">
        <video className="mainvideo__video" poster={video.image} controls>
          <source src={video.video} type="video/mp4" />
        </video>
      </div>
      <div className="mainvideo__title">
        <h1>{video.title}</h1>
      </div>

      <div className="mainvideo__details">
        <div className="mainvideo__info">
          <h4>By {video.channel}</h4>
          <p className="mainvideo__info--date">
            {convertDate(video.timestamp)}
          </p>
        </div>
        <div className="mainvideo__card">
          <div className="mainvideo__viewcard">
            <img src={viewicon} />
            <p>{video.views}</p>
          </div>
          <div className="mainvideo__likecard">
            <img src={likeicon} />
            <p>{video.likes}</p>
          </div>
        </div>
      </div>

      <div className="mainvideo__text">
        <p>{video.description}</p>
      </div>
    </div>
  );
}

export default MainVideo;
