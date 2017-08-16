var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("🍎 Test: '" + description + "' failed: " + assertionToCheck + " is not truthy<br />");
      document.getElementById("tests").innerHTML += "<img width='200px' height='150px' src='"+ failImage() + "'><br />";
      document.getElementById("purr").innerHTML = failHiss();
    } else {
      document.getElementById("tests").innerHTML += ("🍏 Test: '" + description + "' completed successfully!" + "<br />");
      document.getElementById("tests").innerHTML += "<img width='200px' height='150px' src='"+ successImage() +"'><br />";
      document.getElementById("purr").innerHTML = successPurr();
    }
  }
};

var successPurr = function() {
  var purrSound = 'public/audio/purr.mp3';
  return "<audio autoplay loop><source src=" + purrSound + "></audio>";
};

var failHiss = function() {
  var purrSound = 'public/audio/cathiss.mp3';
  return "<audio autoplay loop><source src=" + purrSound + "></audio>";
};

var successArray = ["http://imworld.aufeminin.com/story/20140423/cat-meme-218141_w650.jpg",
"http://topmobiletrends.com/wp-content/uploads/2017/06/915931-compressor.png",
"http://thats-normal.com/wp-content/uploads/2015/10/Dawson-cant-handle-it.jpg",
"https://uproxx.files.wordpress.com/2016/05/game-of-thrones-memes-605-9.jpg?quality=100&w=650",
"http://i0.kym-cdn.com/photos/images/original/000/140/663/ef1b8b25-372d-495d-814f-6ace18ce1c1a.jpg",
"http://s2.quickmeme.com/img/ef/efa85e98f72df3b00cfb416cd9dae46238ee2fdbf69214ab2534c077452d4d0a.jpg"];

var failArray = ["ttps://static.superdeluxe.com/dankland/generators/fail-meme.jpg",
"http://epicfail.xepher.net/wp-content/uploads/2010/12/epicfail1.jpg",
"https://img.memecdn.com/Epic-fail_o_116991.jpg",
"https://www.askideas.com/media/49/Someone-Tried-Someone-Failed-Funny-Fail-Meme-Picture.jpg",
"http://i.imgur.com/Tj1Kdbw.jpg"];

var successImage = function() { return successArray[Math.floor(Math.random()*successArray.length)]; };
var failImage = function() { return failArray[Math.floor(Math.random()*failArray.length)]; };
