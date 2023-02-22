function verificar() {
  var palavra = document.getElementById("palavra").value.toLowerCase();

  if (palavra === "") {
    document.body.classList.add("shake");
    document.body.classList.add("flash");
    setTimeout(function() {
      document.body.classList.remove("shake");
      document.body.classList.remove("flash");
    }, 500);
  } else if (palavra !== "vasco") {
    document.body.classList.add("shake");
    document.body.classList.add("flash");
    setTimeout(function() {
      document.body.classList.remove("shake");
      document.body.classList.remove("flash");
    }, 500);
  } else {
    document.body.innerHTML = "<div class='diagonal'></div>";
  }
}
