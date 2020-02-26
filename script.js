
function randomArrayValue(a,elementID){
	document.getElementById(elementID).innerHTML = a[Math.floor(Math.random()*a.length)];
}

var characterTypes = ["pirate", "dinosaur", "alien", "monster", "astronaut", "princess", "adventurer", "conquistador", "airplane", "submarine", "dragon", "animal", "average person", "caveman", "businessman", "Athlete", "spaceship", "sailor", "soldier", "seamonster", "medicine man", "shaman", "wizard"];
var characterPersonalities = ["happy", "sad", "angry", "lonely", "vengeful", "militant", "curious", "bully", "thoughtful", "scared", "surprised", "stealthy", "sly"];
var characterTimelines = ["future", "ancient", "medieval", "modern", "World War II", "Thirty Years War", "Biblical", "victorian", "Egyptian", "Viking", "steam punk", "ottoman"];
var characterAge = ["Child", "teenager", "Adult", "Old", "Ancient"];

function generateCharacter(){
  randomArrayValue(characterTypes,"characterType");
  randomArrayValue(characterTimelines,"characterTimeline");
  randomArrayValue(characterAge,"characterAge");
  randomArrayValue(characterPersonalities,"characterPersonality");
}
