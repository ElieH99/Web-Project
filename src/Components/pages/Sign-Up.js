import React from 'react';
import { useState } from 'react';
import "../pages/Sign-Up.css";
import { login } from '../../redux/userSlicer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { save } from '../../redux/userEdit';

function SignUp() {
    
    const history=useHistory("");
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    function createAccListener(){
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    }
    function alreadyHaveAcc(){
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    }
const dispatch=useDispatch();

const handleSub = (e) => {
    e.preventDefault();
    if(name=="admin" && email=="admin@gmail.com" && password=="admin"){
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }));
        history.push('/admin');
    }
    else{
    dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
    }));
    dispatch(save({
        firstName:"-",
        lastName:"-",
        weight:"-",
        height:"-",
        phoneNumber:"-",
        dot:"-",
        gender:"-",
        loggedIn:true,

    }));
    history.push('/user')
    
}
}

    // function login(){
    //     const loginForm = document.querySelector("#login");
    //     loginForm.addEventListener("submit", e => {
    //         e.preventDefault();
    //         dispatch(login({
    //             user:user,
    //             email:email,
    //             password: password,
    //             loggedIn: true,
    //         }));
    
    //         // Perform your Fetch login
    
    //         // setFormMessage(loginForm, "error", "Invalid username/password combination");
    //     });
    // }


    React.useEffect(()=>{
    const registerForm=document.querySelectorAll(".form__input")
    registerForm.forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
            if (e.target.id === "pass" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Password must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", function(){
            clearInputError(inputElement);
        });
    });
    
       
    })

  return (
    <>
      <body class="body">
    <div class="container">
        
    <form  class="form" id="login" onSubmit={handleSub}>
        <i class="far fa-user-circle"></i>
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="user" class="form__input" autofocus placeholder="Username" onChange={(e)=>setName(e.target.value)} required/>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="email" class="form__input" autofocus placeholder="Username or email" onChange={(e)=>setEmail(e.target.value)} required/>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} required/>
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit" >Continue</button>
        <p class="form__text">
            <a href="https://ahseeit.com//king-include/uploads/2020/12/130305122_100932028521112_7585635527780380206_n-5804141833.jpg" target="_blank" class="form__link">Forgot your password?</a>
        </p>
        <p class="form__text">
            <a class="form__link" href="#" id="linkCreateAccount" onClick={createAccListener} >Don't have an account? Create an account</a>
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
            <input type="password" id="pass" class="form__input" autofocus placeholder="Password" />
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Confirm password" />
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit">Continue</button>
        <p class="form__text">
            <a class="form__link" href="#" id="linkLogin" onClick={alreadyHaveAcc}>Already have an account? Sign in</a>
        </p>
    </form>


    </div>
</body>
    </>
  );
}

export default SignUp;