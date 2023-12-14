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

// Verberg de 'Design'-link na klikken, komt weer in beeld in 3 seconden//
const designLink = document.getElementById('design');

designLink.addEventListener('click', function(event) {
    designLink.classList.add('hidden'); // Verberg de 'Design'-link na klikken

    // Toon de 'Design'-link weer na 3 seconden/3000 staat voor 3 seconden
    setTimeout(function() {
        designLink.classList.remove('hidden');
    }, 3000); 
});
document.addEventListener("DOMContentLoaded", function() {
  const andLink = document.getElementById("and");

  andLink.addEventListener("dblclick", function(event) {
    document.body.style.backgroundColor = "lightgreen"; //verander de achtergrondkleur
  });
});
