// Memberikan tanda setelah di click pada nav
btnNav = document.querySelectorAll("nav div ul li a");
[...btnNav].forEach((element) => {
  element.addEventListener("click", function () {
    for (i = 0; i < btnNav.length; i++) {
      btnNav[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// memutar icon arrow dan memunculkan list-nav yg di semunyikan
btnListNav = document.querySelectorAll("nav div ul li a.btn-list-nav");
[...btnListNav].forEach((element) => {
  element.addEventListener("click", function () {
    this.firstElementChild.classList.toggle("rotate");
    this.nextElementSibling.classList.toggle("show-list");
  });
});

btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", function () {
  console.log("test");
  this.classList.toggle("active");
  document.querySelector(".wrapper-nav nav").classList.toggle("show-nav");
});
