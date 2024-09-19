var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  const showMenu= (toggleId, navId) =>{
  const toggle= document.getElementById(toggleId),
  nav=document.getElementById(navId)


if(nav && toggle){
    toggle.addEventListener("click", ()=>{
        nav.classList.toggle('show--menu')
    })
}
}
showMenu("nav-toggle","nav-menu");




/*===== REMOVE MENU MOBILE AFTER CLICK ON THE LINK =====*/
const navLink =document.querySelectorAll(".nav__link");
const linkAction= ()=>{
    const navMenu=document.getElementById("nav-menu")
    navMenu.classList.remove("show--menu")
}
navLink.forEach( ev => ev.addEventListener("click", linkAction));



/*===== MIXITUP FILTER PORTFOLIO =====*/ 
var containerEl = document.querySelector('.portfolio__container');
if (containerEl){
const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});
}
/* Link active portfolio */ 
var numberButtons = document.querySelectorAll(".portfolio__item")
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", changeButton.bind(null, i));
}

function changeButton(selected, e) {
  var oldActive = document.getElementsByClassName("active--portfolio");
  for (var i = 0; i < oldActive.length; i++) {
    oldActive[i].classList.remove("active--portfolio");
  }
  e.target.classList.add("active--portfolio");
}







  