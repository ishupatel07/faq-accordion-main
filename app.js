let acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    acc[i].classList.toggle("active");
   
    let panel = acc[i].nextElementSibling;
    let icon = acc[i].querySelector(".icon img"); // Get the img element inside .icon div
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.src = "assets/images/icon-plus.svg"; // Change the icon to icon-plus.svg when panel is hidden
    } else {
      panel.style.display = "block";
      icon.src = "assets/images/icon-minus.svg"; // Change the icon to icon-minus.svg when panel is shown
    }
  });
}
