// ============= show nav bar ===========

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


/*===== MENU SHOW =====*/
function toggle() {
  var x = navMenu;
  if (x.style.top === "-100%") {
    x.style.top = "0";
    console.log(x.style.top);
  } else {
    x.style.top = "-100%";
    console.log(x.style.top);

  }
}