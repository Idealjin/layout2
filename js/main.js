
document.getElementById("menuButton").addEventListener('click', showMenu);

function showMenu() {
    document.getElementById("menu").classList.add("showMenu");
    document.body.classList.add("no-scroll");

}

function closeMenu() {
    document.getElementById("menu").classList.remove("showMenu");
    document.body.classList.remove("no-scroll");
}

document.getElementById("close").addEventListener('click', closeMenu);




