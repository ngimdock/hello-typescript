console.log("Get started with typescript");

const increment = document.querySelector("#increment");
const num = document.querySelector("#num");

let i = 0;

const incrementNum = (e) => {
  i++;
  num.innerHTML = i.toString();
};

increment.addEventListener("click", incrementNum);
