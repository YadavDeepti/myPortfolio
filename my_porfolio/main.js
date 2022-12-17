window.addEventListener("scroll", function(){
  let header=document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());






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

document.querySelector(".contact-scroll").addEventListener("click",() => {
  contactSection.scrollIntoView({behavior: "smooth"});
});

document.querySelector(".project-scroll").addEventListener("click",() => {
  projectSection.scrollIntoView({behavior: "smooth"});
})


