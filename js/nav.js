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
