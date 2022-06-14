function toggleMenu() {
    document.getElementById("move1").classList.toggle("change1");
    document.getElementById("move2").classList.toggle("change2");
    document.getElementById("move3").classList.toggle("change3");
    document.getElementById("move4").classList.toggle("change4");
    document.getElementById("move5").classList.toggle("change5");
    document.getElementById("move6").classList.toggle("change6");
    document.getElementById("move7").classList.toggle("change7");
    document.getElementById("move8").classList.toggle("change8");
    document.getElementById("move9").classList.toggle("change9");
    document.getElementById("btn").classList.toggle("change10");
  }
  const press = document.getElementById('btn');
press.onclick = toggleMenu;