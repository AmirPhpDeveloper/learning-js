// document
// event Listeners
const el = document.querySelector("#welcome");
el.addEventListener("click", function () {
  this.classList.add("myClass");
});
