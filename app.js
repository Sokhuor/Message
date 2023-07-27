const btnGenerate = document.querySelector("#btngenerate");
const btnClear = document.querySelector("#btnclear");
const txtsmg = document.querySelector(".msg-box");
const messages = [
   "I love you a lot. You know that, right?",
   "I love you and am here to help. What can I do for you? Do you need anything?",
   "Don't worry. You’ve got this. I love you and have your back.",
   "I love you not because we’re related, but because you are an incredible person.",
   "Things have a way of working out the way they should. I love you no matter what.",
];

function generation() {
   const randomIndex = Math.floor(Math.random() * messages.length);
   const randomMessage = messages[randomIndex];
   txtsmg.innerHTML = randomMessage;
}
function clearTxt() {
   txtsmg.innerHTML = "Start Again!";
}

btnGenerate.addEventListener("click", generation);
btnClear.addEventListener("click", clearTxt);
window.addEventListener("keydown", (e) => {
   if (e.key == "Escape") {
      clearTxt();
   } else if (e.key == "Enter") {
      generation();
   }
});
