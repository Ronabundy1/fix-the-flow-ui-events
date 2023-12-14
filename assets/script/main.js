let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// dubbelclick dan verander de kleur
const frontend = document.getElementById('frontend');

frontend.addEventListener("dblclick", function () {
  frontend.classList.toggle("changeColor");
});
