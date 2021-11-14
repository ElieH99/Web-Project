import React from 'react';
import "../pages/Sign-Up.css";
function SignUp() {
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");
    
        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }
    
    function setInputError(inputElement, message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
    }
    
    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
    
        document.querySelector("#linkCreateAccount").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
        });
    
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        });
    
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
    
            // Perform your AJAX/Fetch login
    
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        });
    
        document.querySelectorAll(".form__input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                    setInputError(inputElement, "Username must be at least 10 characters in length");
                }
            });
    
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
  return (
    <>
      <body class="body">
    <div class="container">
        
    <form  class="form" id="login">
        <i class="far fa-user-circle"></i>
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Username or email" />
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Password" />
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit">Continue</button>
        <p class="form__text">
            <a href="#" class="form__link">Forget your password?</a>
        </p>
        <p class="form__text">
            <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create an account</a>
        </p>
    </form>

    <form class="form form--hidden" id="createAccount">
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username" />
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Email Address" />
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Password" />
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Confirm password" />
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit">Continue</button>
        <p class="form__text">
            <a class="form__link" href="./sign-up" id="linkLogin">Already have an account? Sign in</a>
        </p>
    </form>


    </div>
</body>
    </>
  );
}

export default SignUp;