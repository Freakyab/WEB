// document.getElementById("toggle").onclick = ()=>{
//     document.body.classList.add("dark-theme");
//     console.log(1)
// }

// document.getElementsByClassName("dark-theme").onclick = () =>{
//     document.body.classList.remove("dark-theme");
// }
// function one()
// {
//     // document.body.style.backgroundImage = "url(bg.png)";
//     document.body.style.backgroundColor = "red";
    
// }
// function two()
// {
//     document.body.style.backgroundColor = "white";
// }
// const body = document.querySelector('body');
// const toggle=document.getElementById('toggle');
// toggle.onclick = function()
// {
//     toggle.classList.toggle('active')
// }
var icon=document.getElementById("one");
icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
        {
            icon.className="fa-solid fa-sun";
            
    }
    else
    {
        icon.className="fa-solid fa-moon";

    }
}
// function OnChangeCheckbox (checkbox){
//     if(checkbox.checked){
//         document.body.classList.add("dark-theme");
//     }
//     else{
//         document.body.classList.remove("dark-theme");
//     }
// }
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["FreakyAB", "photographer", "Coder", "Aryan"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};