const nameInput = document.querySelector(".name");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
  if (nameInput.value.length <= 2) {
    alert("You need more characters");
  }
});
