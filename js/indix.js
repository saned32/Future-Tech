// const menu = document.getElementById("menu");
// const action = document.getElementById("actions");

// menu.addEventListener("click",()=>{
//     hundelMenu();
// })

// function hundelMenu(){
//     menu.classList.toggle("is-active")
//     action.classList.toggle("is-active")
//}


let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}