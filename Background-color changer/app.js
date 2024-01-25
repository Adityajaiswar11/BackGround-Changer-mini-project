const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const para = document.getElementById("para");
const colorName = document.getElementById("colorName");

input.addEventListener("change", ColorChange);

function ColorChange(e) {
  const inputValue = e.target.value + " ";

  const color = inputValue.toLowerCase();
  child.style.backgroundColor = color;
  colorName.innerHTML = color.toUpperCase();
  colorName.style.color = color;
  para.innerHTML = "Great! You have changed  the color. Try again.";
}

btn.addEventListener("click", () => {
  ColorChange();
});
