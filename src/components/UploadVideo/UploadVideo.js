import "./UploadVideo.scss";
import publishbutton from "../../assets/Icons/publish.svg";
import videoimage from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";
import { useState } from "react";


function UploadVideo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/videos', { title, description })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="UploadVideo">
      <div className="UploadVideo__title">
        <h1>Upload Video</h1>
      </div>

      <div className="UploadVideo__body">
        <div className="UploadVideo__body--upperpart">
          <div className="UploadVideo__photocontainer">
            <h2 className="UploadVideo__formtitle">VIDEO THUMBNAIL</h2>
            <img
              className="UploadVideo__photo"
              src={videoimage}
              alt="videoimage"
            />
          </div>

          <div className="UploadVideo__formcard">
            <form onSubmit={handleSubmit}>
              <div className="UploadVideo__formbody">
                <legend className="UploadVideo__formtitle">
                  TITLE YOUR VIDEO
                </legend>
                <input
                  className="UploadVideo__forminput"
                  type="text"
                  placeholder="Add a title to your video"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <legend className="UploadVideo__formtitle">
                  ADD A VIDEO DESCRIPTION
                </legend>
                <input
                  className="UploadVideo__forminput UploadVideo__forminput--input"
                  type="text"
                  placeholder="Add a description to your video"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="UploadVideo__buttoncard">
                <div className="UploadVideo__buttoncontainer">
                  <img
                    className="UploadVideo__buttonicon"
                    src={publishbutton}
                    alt="publishbutton"
                  />
                  <button className="UploadVideo__button" type="submit">
                    PUBLISH
                  </button>
                </div>
                <button type="button" className="UploadVideo__button2">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
