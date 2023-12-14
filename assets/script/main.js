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
const design = document.getElementById('design');

design.addEventListener('click', function(event) {
    design.classList.add('hidden'); // Verberg de 'Design'-link na klikken

    // Toon de 'Design'-link weer na 3 seconden/3000 staat voor 3 seconden
    setTimeout(function() {
        design.classList.remove('hidden');
    }, 3000); 
});
document.addEventListener("DOMContentLoaded", function() {
  const and = document.getElementById("and");

  and.addEventListener("dblclick", function(event) {
    document.body.style.backgroundColor = "lightgreen"; //verander de achtergrondkleur
  });
});
//Development draaien//
const development = document.getElementById('development');

development.addEventListener('animationend', turn);
development.addEventListener('click', turn);

function turn() {
  development.classList.toggle('rotate'); 
}

//Sprint 5//
  let sprint5 = document.getElementById('sprint-5');
  
  sprint5.addEventListener('click', function(event) {
    if (sprint5.classList.contains('bigger')) {
      sprint5.classList.remove('bigger'); // Verwijder de klasse als deze al bestaat
    } else {
      sprint5.classList.add('bigger'); 
    }
  });

  
