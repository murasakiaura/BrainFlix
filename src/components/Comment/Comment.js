import "./Comment.scss";
import profile from "../../assets/images/Mohan-muruge.jpg";
import buttonicon from "../../assets/Icons/add_comment.svg";

function Comment({ comments = [0] }) {
  function convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  return (
    <div className="comments">
      <div className="comments__title">
        <h3>3 Comments</h3>
      </div>

      <div className="comments__body">
        <div className="comments__photo">
          <img className="comments__profile" src={profile} alt="" />
        </div>

        <div className="comments__formcard">
          <div className="comments__formbody">
            <legend className="comments__formtitle">
              JOIN THE CONVERSATION
            </legend>
            <form>
              <input
                className="comments__forminput"
                type="text"
                placeholder="Add a new comment"
              />
              <div className="comments__buttoncontainer">
                <img className="comments__buttonicon" src={buttonicon} alt="" />
                <button className="comments__button" type="submit">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className="comments__videocomments">
          <div className="comments__videocomments--img"></div>
          <div className="comments__videocomments--text">
            <div className="comments__videocomments--info">
              <h3 className="comments__videocomments--name">{comment.name}</h3>
              <h3 className="comments__videocomments--date">
                {convertDate(comment.timestamp)}
              </h3>
            </div>

            <div className="comments__videocomments--comment">
              {comment.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
