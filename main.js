// var acc = document.getElementsByClassName("accordion");
// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     });
// }
var acc = document.getElementsByClassName("faq-questions");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
