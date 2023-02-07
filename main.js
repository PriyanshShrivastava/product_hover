const contentEl = document.querySelector(".content");
const productCartEl = document.querySelector(".product-card");

// resizeValue = window.addEventListener("load", () => {
//   return window.innerWidth;
// });

productCartEl.addEventListener("mouseover", function (resizeValue) {
  console.log(resizeValue);
  if (window.innerWidth <= 576) {
    console.log("Inside loop");
    contentEl.style.left = "10px";
  } else {
    contentEl.style.left = "50px";
  }
  contentEl.style.opacity = "1";
});

productCartEl.addEventListener("mouseleave", function () {
  contentEl.style.opacity = "0";
  contentEl.style.left = "150px";
  //   contentEl.classList.add("hidden");
});
