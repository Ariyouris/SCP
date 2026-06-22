const CLIENT_ID =
"475553127157-nn2o47e7273qrk4rp46aljldoks35bbm.apps.googleusercontent.com";

window.onload = () => {

  // Kalau sudah login, langsung masuk dashboard
  if (localStorage.getItem("s4s_user")) {
    window.location.href = "./pages/dashboard.html";
    return;
  }

  google.accounts.id.initialize({
    client_id: CLIENT_ID
  });

};

document
.getElementById("googleLogin")
.addEventListener("click", () => {

  const tokenClient = google.accounts.oauth2.initTokenClient({

    client_id: CLIENT_ID,

    scope: "openid email profile",

    callback: async (response) => {

      try {

        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            }
          }
        );

        const user = await res.json();

        localStorage.setItem(
          "s4s_user",
          JSON.stringify(user)
        );

        window.location.href = "./pages/dashboard.html";

      } catch (err) {

        console.error("Login gagal:", err);

      }

    }

  });

  tokenClient.requestAccessToken();

});
