/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
document
  .getElementById("paymentForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";

    // Reset all inputs to remove any previous error highlights
    const inputs = [
      "cardNumber",
      "cvcNumber",
      "amount",
      "firstName",
      "lastName",
      "city",
      "postalCode",
      "message"
    ];
    inputs.forEach(id => {
      document.getElementById(id).classList.remove("error-input");
    });

    // Validate each input field
    if (!/^\d{10}$/.test(document.getElementById("cardNumber").value)) {
      document.getElementById("cardNumber").classList.add("error-input");
      isValid = false;
    }

    if (!/^\d{3,4}$/.test(document.getElementById("cvcNumber").value)) {
      document.getElementById("cvcNumber").classList.add("error-input");
      isValid = false;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(document.getElementById("amount").value)) {
      document.getElementById("amount").classList.add("error-input");
      isValid = false;
    }

    if (document.getElementById("firstName").value.trim() === "") {
      document.getElementById("firstName").classList.add("error-input");
      isValid = false;
    }

    if (document.getElementById("lastName").value.trim() === "") {
      document.getElementById("lastName").classList.add("error-input");
      isValid = false;
    }

    if (document.getElementById("city").value.trim() === "") {
      document.getElementById("city").classList.add("error-input");
      isValid = false;
    }

    if (document.getElementById("inputState").value === "") {
      document.getElementById("inputState").classList.add("error-input");
      isValid = false;
    }

    if (!/^\d{5}$/.test(document.getElementById("postalCode").value)) {
      document.getElementById("postalCode").classList.add("error-input");
      isValid = false;
    }

    // Validate the "Message" textarea
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      message.classList.add("error-input");
      isValid = false;
    }

    // If form is invalid, display error message
    if (!isValid) {
      errorMessage.style.display = "block";
    } else {
      alert("Form submitted successfully!");
      // Add code here to submit form data if needed
    }
  });
