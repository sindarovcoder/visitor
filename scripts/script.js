(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "02/12/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Today is Wedding day!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
function toggleAudio() {
  var audioElement = document.getElementById("player");
  var soundOn = document.getElementById("play");
  var soundOff = document.getElementById("pause");

  if (audioElement.paused) {
    audioElement.play();
    soundOn.style.display = "block";
    soundOff.style.display = "none";
  } else {
    audioElement.pause();
    soundOn.style.display = "none";
    soundOff.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-button");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleAudio);
  }
});

window.addEventListener("scroll", () => {
  const crollHeight = document.body.offsetHeight - window.innerHeight;
  console.log((window.scrollY * 100) / crollHeight);
  // setCount((window.scrollY * 100) / crollHeight);
  if ((window.scrollY * 100) / crollHeight > 0.2) {
    document.getElementById("play").classList.add("play_anim");
  } else {
    document.getElementById("play").classList.remove("play_anim");
  }
});
