var newTweet = document.getElementById("tweet")

//Enviar o tweet
function Twittar() {
    var newTweet =  document.getElementById("tweet").value;
    var timeline = document.createElement('div');
    timeline.setAttribute("class", "teste");
    timeline.textContent = newTweet;
    
    var post = document.getElementById("timeline");
    post.insertBefore(timeline, post.firstChild);
    event.preventDefault();
}
//Adicionar o contador de caracteres 
var maxChar = document.getElementById("wordCount").innerHTML;

document.getElementById("tweet").addEventListener('input', function () {
    var tweetArea = this.value,
    charCounter = tweetArea.split('').length;

    var result = document.getElementById("wordCount").innerHTML = maxChar - charCounter;

//Desabilitar o botão
    if (charCounter > 0 && charCounter <= 140){
        document.getElementById("button-tweet").disabled = false;
    } else {
        document.getElementById("button-tweet").disabled = true;
    }
})
