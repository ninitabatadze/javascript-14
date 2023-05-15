function moveCircle() {
    var circle = document.getElementById("circle");
    circle.style.left = "0";
    circle.style.transition = "left 5s ease";
    circle.style.backgroundColor = "green";
    setTimeout(function () {
      circle.style.left = window.innerWidth - circle.offsetWidth + "px";
    }, 100);
  }