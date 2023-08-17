import { tweetsData } from "./data.js";

const TWEET_BTN = document.getElementById("tweet-btn");
const TWEET_TEXTAREA = document.getElementById("tweet-input");
const FEED = document.getElementById("feed");

TWEET_BTN.addEventListener("click", function () {
  console.log(TWEET_TEXTAREA.value);
});

//return HTML string to render

function getFeedHtml() {
  let feedHtml = ``;
  for (let tweet of tweetsData) {
    console.log(tweet);
    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
      <img src="${tweet.profilePic}" alt="" class="profile-pic" />
      <div>
        <p class="handle">${tweet.handle}</p>
        <p class="tweet-text">${tweet.tweetText}</p>
        <div class="tweet-details">
          <span class="tweet-detail">${tweet.replies.length}</span>
          <span class="tweet-detail">${tweet.likes}</span>
          <span class="tweet-detail">${tweet.retweets}</span>
        </div>
      </div>
    </div>
  </div>
        `;
  }
  FEED.innerHTML = feedHtml;
}
getFeedHtml();
