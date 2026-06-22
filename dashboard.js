const user = JSON.parse(localStorage.getItem("s4s_user"));

if (!user) {

    window.location.href = "./index.html";

}

document.getElementById("welcome").innerHTML =
`WELCOME, ${user.name.toUpperCase()}`;


document.getElementById("indie").onclick = () => {

    window.open(
        "LINK_PLAYLIST_INDIE",
        "_blank"
    );

};

document.getElementById("prime").onclick = () => {

    window.open(
        "LINK_PLAYLIST_PRIMEZONE",
        "_blank"
    );

};

document.getElementById("logout").onclick = () => {

    localStorage.removeItem("s4s_user");

    window.location.href="./index.html";

};

const bars = document.querySelectorAll(".equalizer span");

setInterval(() => {

    bars.forEach(bar => {

        const h = Math.floor(Math.random()*40)+8;

        bar.style.height = h + "px";

    });

},120);
