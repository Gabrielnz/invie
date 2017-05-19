var consulta = window.matchMedia('(max-width: 500px)');

var burguerButton = document.getElementById("burguer-button");
var menu = document.getElementById("menu");

// le hace toggle al menú
function toggleMenu() {
    menu.classList.toggle("active");
    burguerButton.classList.toggle('icon-close');
}

function showMenu() {
    menu.classList.add("active");
    burguerButton.classList.add('icon-close');
}

function hideMenu() {
    menu.classList.remove("active");
    burguerButton.classList.remove('icon-close');
}

// función del media query
function mediaQuery() {
    if(consulta.matches) {
        // si se cumple el media query
        console.log("Se cumplió la condición");
        burguerButton.addEventListener("touchstart", toggleMenu);
    } else {
        // si no se cumple el media query
        console.log("No se cumplió la condición");
        burguerButton.removeEventListener("touchstart", toggleMenu);
    }
}

// ejecuta el media query cuando cargue la página
mediaQuery();

consulta.addListener(mediaQuery);

burguerButton.addEventListener("touchstart", toggleMenu);

// lazy loading
var bLazy = new Blazy({
    selector: 'img'
});

// gestos touch
var body = document.body;
var gestos = new Hammer(body);

gestos.on('swipeleft', hideMenu);

gestos.on('swiperight', showMenu);