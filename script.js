const CLIENT_ID =
"475553127157-nn2o47e7273qrk4rp46aljldoks35bbm.apps.googleusercontent.com";

window.onload = () => {

  if (localStorage.getItem("s4s_user")) {
    window.location.href = "./dashboard.html";
    return;
  }

  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse
  });

};

function handleCredentialResponse(response) {

  const payload = JSON.parse(

    atob(response.credential.split(".")[1])

  );

  const user = {

    id: payload.sub,

    name: payload.name,

    email: payload.email,

    picture: payload.picture

  };

  localStorage.setItem(

    "s4s_user",

    JSON.stringify(user)

  );

  window.location.href =

    "./dashboard.html";

}
