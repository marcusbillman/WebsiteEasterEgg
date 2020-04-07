const elements = document.querySelector(".container").children;

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
        "translate(" + relX / -4 + "px, " + relY / 6 + "px)";
    elements[2].style.transform =
        "translate(" + relX + "px, " + relY / -7 + "px)";
});
