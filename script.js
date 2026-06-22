const CLIENT_ID = "...";

window.onload = () => {

  // Sudah login? Langsung dashboard
  if (localStorage.getItem("s4s_user")) {
    window.location.href = "./pages/dashboard.html";
    return;
  }

  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse
  });

};

document.getElementById("googleLogin").onclick = () => {
  google.accounts.id.prompt();
};

function handleCredentialResponse(response) {

  const payload = JSON.parse(
    atob(response.credential.split(".")[1])
  );

  localStorage.setItem("s4s_user", JSON.stringify(payload));

  window.location.href = "./pages/dashboard.html";
}
