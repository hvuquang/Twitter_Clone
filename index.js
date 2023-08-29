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
  tweetsData.forEach(function(tweet) {
    console.log(tweet);
    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
      <img src="${tweet.profilePic}" alt="" class="profile-pic" />
      <div>
        <p class="handle">${tweet.handle}</p>
        <p class="tweet-text">${tweet.tweetText}</p>
        <div class="tweet-details">
          <span class="tweet-detail"><i class="fa-regular fa-comment-dots"></i>${tweet.replies.length}</span>
          <span class="tweet-detail"><i class="fa-solid fa-heart"></i>${tweet.likes}</span>
          <span class="tweet-detail"><i class="fa-solid fa-retweet"></i>${tweet.retweets}</span>
        </div>
      </div>
    </div>
  </div>
        `;
  })
  return feedHtml
}

function render() {
  FEED.innerHTML = getFeedHtml()
}

render()