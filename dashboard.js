const user = JSON.parse(localStorage.getItem("s4s_user"));

// Belum login
if (!user) {
    window.location.href = "../index.html";
}

// Daftar Admin
const ADMINS = [
    "areionproject@gmail.com",
    "ayigh77@gmail.com",
    "suparmituman@gmail.com"
];

// Cek Role
const isAdmin = ADMINS.includes(user.email.toLowerCase());

// Welcome
document.getElementById("welcome").innerHTML =
`WELCOME, ${user.name.toUpperCase()}`;

// Kalau Admin
if (isAdmin) {
    console.log("ADMIN MODE");
    // Nanti di sini kita munculin tombol Manage Playlist
}

// Playlist Indie
document.getElementById("indie").onclick = () => {

    window.location.href = "./indie.html";

};

// Playlist Prime
document.getElementById("prime").onclick = () => {

    window.location.href = "./primezone.html";

};

// Logout
document.getElementById("logout").onclick = () => {

    localStorage.removeItem("s4s_user");

    window.location.href = "../index.html";

};

// Equalizer
const bars = document.querySelectorAll(".equalizer span");

setInterval(() => {

    bars.forEach(bar => {

        const h = Math.floor(Math.random() * 40) + 8;

        bar.style.height = h + "px";

    });

}, 120);
