var newTweet = document.getElementById("tweet");
var clearArea = document.getElementById("tweet");

//Enviar o tweet
function Twittar() {
    var newTweet =  document.getElementById("tweet").value;
    var timeline = document.createElement('div');
    //Adicionar hora no tweet
    var hour = document.createElement('p');
    var timeStamp = Date().split(" ")[4];
    timeline.setAttribute("class", "new-tweet");
    hour.setAttribute("class", "time");

    timeline.textContent = newTweet;
    hour.textContent = timeStamp;
    timeline.appendChild(hour);

    var post = document.getElementById("timeline");
    post.insertBefore(timeline, post.firstChild);
    event.preventDefault();
    clearArea.value = "";
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
//Impedir texto vazio
    if (newTweet.value.trim() == ""){
        document.getElementById("button-tweet").disabled = true;
    }

//Mudar a cor do contador
    if (result <= 19 && result >= 10){
        document.getElementById("wordCount").style = "color: orange";
    } else if(result <= 9){
        document.getElementById("wordCount").style = "color: red";
    } else {
        document.getElementById("wordCount").style = "color: black";
    }
})

//Aumentar text area
function Size(){
    newTweet.style.height = "";
    newTweet.style.height = newTweet.scrollHeight + "px";
}
