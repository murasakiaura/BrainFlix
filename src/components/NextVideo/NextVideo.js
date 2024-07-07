import "./NextVideo.scss";

function NextVideo(props) {
  const { videos, currentVideoId, onVideoSelect } = props;
  const filteredVideos = videos.filter((video) => video.id !== currentVideoId);

  return (
    <div className="nextvideo">
      <h3 className="nextvideo__title">NEXT VIDEOS</h3>
      {filteredVideos.map((video) => (
        <div
          class="nextvideo__card"
          key={video.id}
          onClick={() => onVideoSelect(video.id)}
        >
          <div>
            <img className="nextvideo__img" src={video.image} />
          </div>

          <div className="nextvideo__info">
            <h3>{video.title}</h3>
            <h4 className="nextvideo__info--author">{video.channel}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NextVideo;
