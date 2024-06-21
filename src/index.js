function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Ever, ever",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let enterSubmitElement = document.querySelector("#enter-submit-box");
enterSubmitElement.addEventListener("submit", generatePoem);
