const elements = document.querySelector(".container").children;
const confuse = document.querySelectorAll(".confuse");

window.addEventListener("mousemove", event => {
    const relX = event.clientX - window.innerWidth / 2;
    const relY = event.clientY - window.innerHeight / 2;

    elements[0].style.transform =
        "translate(" +
        relX / 2 +
        "px, " +
        relY / 2 +
        "px) rotate(" +
        relY / 4 +
        "deg)";
    elements[1].style.transform =
        "translate(" + relY / -4 + "px, " + relX / 3 + "px)";
    elements[2].style.transform =
        "translate(" +
        relX +
        "px, " +
        relY / -7 +
        "px) scale(" +
        relY / (0.2 * relX) +
        ")";
    document.body.style.backgroundSize =
        200 + Math.abs(relX) / 10 + "px " + (200 + Math.abs(relY) / 10) + "px";
    document.body.style.filter =
        "hue-rotate(" + (relY / (window.innerHeight / 2)) * 360 + "deg)";

    confuse.forEach(element => {
        element.style.transform = "rotate(" + relY + "deg)";
    });
});
