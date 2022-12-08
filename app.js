const dots = document.querySelectorAll(".btn-dot");

dots.forEach((e) => {
  e.addEventListener("click", (e) => {
    const boxDot = e.path[1].children;
    const container = e.path[2];
    const itemWidth = container.children[0].offsetWidth;
    for (let i = 0; i < boxDot.length; i++) {
      boxDot[i].classList.remove("active");
      if (boxDot[i] === e.target) {
        e.target.classList.add("active");
        container.scrollLeft = i * itemWidth;
      }
    }
  });
});

// function loaded() {
//   let count = 0;
//   let validate = true;
//   const productList = document.querySelector(".slide-box__list");
//   const observer = new IntersectionObserver((entries) => {
//     count = entries.length;
//   });
//   const convertArray = Array.from(productList.children);

//   convertArray.forEach((e) => {
//     observer.observe(e);
//   });
//   productList.addEventListener("scroll", (e) => {
//     console.log(e.target.scrollWidth - e.target.scrollLeft);
//   });
// }

// window.addEventListener("DOMContentLoaded", loaded);
