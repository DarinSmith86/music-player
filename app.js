
var icon = document.getElementsByClassName("fa");

var music = document.getElementsByTagName("audio");

var element = document.getElementById("title");

icon[0].addEventListener("click", function(){
  icon[0].classList.toggle("fa-stop");
  icon[0].classList.toggle("fa-play");
  element.innerHTML = "Now Playing: Favorite Food by Tokyo Police Club";
  if (music[0].paused){
    music[0].play();
    if (!music[1].paused){
      icon[1].classList.toggle("fa-play");
      music[1].pause();
      icon[1].classList.toggle("fa-stop");
      }
      if (!music[2].paused){
        icon[2].classList.toggle("fa-play");
        music[2].pause();
        icon[2].classList.toggle("fa-stop");
      }
      if (!music[3].paused){
        icon[3].classList.toggle("fa-play");
        music[3].pause();
        icon[3].classList.toggle("fa-stop");
      }
    }
    else {
      music[0].pause();
      element.innerHTML = "Select a song!";
    }
});


icon[1].addEventListener("click", function(){
  icon[1].classList.toggle("fa-stop");
  icon[1].classList.toggle("fa-play");
  element.innerHTML = "Now Playing: Thrill of the Hunt by Kind of Like Spitting";
  if (music[1].paused){
    music[1].play();

  if (!music[0].paused){
    icon[0].classList.toggle("fa-play");
    music[0].pause();
    icon[0].classList.toggle("fa-stop");
    }
  if (!music[2].paused){
      icon[2].classList.toggle("fa-play");
      music[2].pause();
      icon[2].classList.toggle("fa-stop");
    }
      if (!music[3].paused){
        icon[3].classList.toggle("fa-play");
        music[3].pause();
        icon[3].classList.toggle("fa-stop");
    }
  }
    else {
      music[1].pause();
      element.innerHTML = "Select a song!";
    }

});

icon[2].addEventListener("click", function(){
  icon[2].classList.toggle("fa-stop");
  icon[2].classList.toggle("fa-play");
  element.innerHTML = "Now Playing: Transgender Dysphoria Blues by Against Me!";
  if (music[2].paused){
    music[2].play();

  if (!music[1].paused){
    icon[1].classList.toggle("fa-play");
    music[1].pause();
    icon[1].classList.toggle("fa-stop");
    }
    if (!music[3].paused){
      icon[3].classList.toggle("fa-play");
      music[3].pause();
      icon[3].classList.toggle("fa-stop");
      }
      if (!music[0].paused){
        icon[0].classList.toggle("fa-play");
        music[0].pause();
        icon[0].classList.toggle("fa-stop");
        }
      }
        else {
          music[2].pause();
          element.innerHTML = "Select a song!";
        }

});

icon[3].addEventListener("click", function(){
  icon[3].classList.toggle("fa-stop");
  icon[3].classList.toggle("fa-play");
  element.innerHTML = "Now Playing: Where I'm From by Digable Planets";
  if (music[3].paused){
    music[3].play();

  if (!music[0].paused){
    icon[0].classList.toggle("fa-play");
    music[0].pause();
    icon[0].classList.toggle("fa-stop");
    }
    if (!music[1].paused){
      icon[1].classList.toggle("fa-play");
      music[1].pause();
      icon[1].classList.toggle("fa-stop");
      }
      if (!music[2].paused){
        icon[2].classList.toggle("fa-play");
        music[2].pause();
        icon[2].classList.toggle("fa-stop");
        }
      }
        else {
          music[3].pause();
          element.innerHTML = "Select a song!";
        }

});
