import './VideoDetails.scss';

const VideoDetails = ({video}) => (
    <div>
        <h1>
            {video.title}
        </h1>
        <h2>
            By {video.channel}
        </h2>
        <h4>
            {video.date}
        </h4>
        <h4>
            {video.views}
        </h4>
        <h4>
            {video.likes}
        </h4>
        <p>
            {video.description}
        </p>
    </div>
);

export default VideoDetails;