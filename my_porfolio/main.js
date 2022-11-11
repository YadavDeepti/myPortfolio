window.addEventListener("scroll", function(){
  let header=document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// const allLinks = document.querySelectorAll(".navbar-lists li a");
// for(const link of allLinks){
//   link.addEventListener("click", smoothscroll);
// }
// function smoothscroll(e){
// e.preventDefault();
// const href = this.getAttribute("href");
// document.querySelector(href).scrollIntoView({
//   behaviour: "smooth"
// });
// }


const heroSection = document.querySelector(".hero-section");
const aboutSection = document.querySelector(".about-section");
const projectSection = document.querySelector(".projectHeading-section");
const contactSection = document.querySelector(".contact-section");

document.querySelector(".home-link").addEventListener("click",() => {
  heroSection.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".about-link").addEventListener("click",() => {
  aboutSection.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".project-link").addEventListener("click",() => {
  projectSection.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".contact-link").addEventListener("click",() => {
  contactSection.scrollIntoView({behavior: "smooth"});
});