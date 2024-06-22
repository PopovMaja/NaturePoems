function displayPoem(reponse) {
  new Typewriter("#poem", {
    strings: reponse.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#users-input");
  let apiKey = "594t1344a33ebb79a8c028f85db36co0";
  let prompt = `Generate nature poem about ${instructionsInput.value}`;
  let context =
    "Please generate nature poems about provided word.Poem should be in English language and not longer then 10 lines. Please separate each line with <br/> and please sign author of the poem inside <strong> element ,IF there is actual name.If there is no name of the author,write -unknown,";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="loading">⏳ Generating poem about ${instructionsInput.value} </div>`;

  axios.get(apiURL).then(displayPoem);
}

let enterSubmitElement = document.querySelector("#enter-submit-box");
enterSubmitElement.addEventListener("submit", generatePoem);
