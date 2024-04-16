const emailfield = document.getElementById("emailfield");
const pwordfield = document.getElementById("pwordfield");
const signupbtn = document.getElementById("signupbutton");

function handleSignupClick() {
    // console.log("signup button clicked");
    var email = document.getElementById("emailfield").value;
    var password = document.getElementById("pwordfield").value;

    var message = "Your account with the credentials:\n" +
                  "Email: " + email + "\n" +
                  "Password: " + password + "\n" +
                  "has been registered successfully!";

    alert(message);
}

signupbtn.addEventListener("click",handleSignupClick);

