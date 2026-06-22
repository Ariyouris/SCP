const CLIENT_ID =
"475553127157-nn2o47e7273qrk4rp46aljldoks35bbm.apps.googleusercontent.com";

window.onload = () => {

  google.accounts.id.initialize({

    client_id: CLIENT_ID,

    callback: handleCredentialResponse

  });

};

document
.getElementById("googleLogin")
.addEventListener("click", () => {

  google.accounts.id.renderButton(

    document.createElement("div"),

    {}

  );

  google.accounts.oauth2.initTokenClient({

    client_id: CLIENT_ID,

    scope: "openid email profile",

    callback: (response) => {

      console.log(response);

    }

  }).requestAccessToken();

});

function handleCredentialResponse(response){

  console.log(response);

}
