// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let error = document.querySelector("#error");
let message = "Something went wrong, please try again";

function showMessage() {
    console.log(message);
    error.textContent = message;
}


