function imageToggle(id) {
  var text1 = "teamImg";
  var teamImg = document.getElementById(text1.concat(id));

  if (teamImg.style.display == "flex") {
    teamImg.style.display = "none";
    teamImg.classList.add("animate2");
  } else {
    teamImg.style.display = "flex";
    teamImg.classList.add("animate");
  }
  setTimeout(function () {
    teamImg.classList.remove("animate2");
  }, 2000);
  setTimeout(function () {
    teamImg.classList.remove("animate");
  }, 2000);
}
