import React, {  useEffect, useState } from "react";
import "./PlayerVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_Converter } from "../../data";
import moment from "moment";
import userProfile from "../../assets/user_profile.jpg";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetailsUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    if (!apiData?.snippet?.channelId) {
      return; // Stop if channelId is missing
    }
    const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetailsUrl)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        key={videoId}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2>{apiData ? apiData.snippet.title : "Title Here"}</h2>
      <div className="play-video-info">
        <p>
          {apiData ? value_Converter(apiData.statistics.viewCount) : "16K"}{" "}
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {apiData ? value_Converter(apiData.statistics.likeCount) : "155"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" /> share
          </span>
          <span>
            <img src={save} alt="" /> save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelData
              ? channelData.snippet.thumbnails.default.url
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AwC8ib4oJMFjxywRuSc4zBxheEyn1isdTg&s"
          }
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_Converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscriber
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_Converter(apiData.statistics.commentCount) : "100"}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={
                  item.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl || userProfile
                }
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_Converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
