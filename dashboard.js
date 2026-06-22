const user = JSON.parse(localStorage.getItem("s4s_user"));

if (!user) {
    window.location.href = "./index.html";
}

document.getElementById("welcome").innerHTML = `
<p style="text-align:center;margin-bottom:30px;">
Welcome, <b>${user.name}</b>
</p>
`;

document.getElementById("indie").onclick = () => {
    window.open(
        "https://open.spotify.com/playlist/ISI_LINK_INDIE",
        "_blank"
    );
};

document.getElementById("prime").onclick = () => {
    window.open(
        "https://open.spotify.com/playlist/ISI_LINK_PRIMEZONE",
        "_blank"
    );
};

document.getElementById("logout").onclick = () => {

    localStorage.removeItem("s4s_user");

    location.href = "./index.html";

};
