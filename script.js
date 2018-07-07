var newTweet = document.getElementById("tweet")

function Twittar() {
var newTweet =  document.getElementById("tweet").value;
var timeline = document.createElement('div');
timeline.textContent = newTweet;
var post = document.getElementById("timeline");
post.appendChild(timeline);
event.preventDefault();
}