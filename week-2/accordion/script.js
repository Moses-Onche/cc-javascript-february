let accordion = document.getElementsByClassName('accordion');

for (let count = 0; count <= accordion.length - 1; count++) {
  accordion[count].addEventListener('click', function(){
    this.classList.toggle('.active');
    let panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}