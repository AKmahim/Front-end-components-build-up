// preloader js code 

// var preloader = document.getElementById("preloader");


// window.addEventListener("load",()=>{
// 	preloader.style.display = "none";
// })

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut;