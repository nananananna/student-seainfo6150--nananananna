"use strict";
(function () {
    const registerFormEl = document.querySelector(".register-form");

    const nameEl = document.querySelector(".input-name");
    const nameErrorEl = document.querySelector(".err-name");


    const emailEl = document.querySelector(".input-email");
    const emailErrorEl = document.querySelector(".err-email");

    const conEmailEl = document.querySelector(".input-con-email");
    const conErrorEmail = document.querySelector(".err-con-email");

    registerFormEl.addEventListener('submit', (e) => {
        let isInvalid = false;
        let notEqual = false;
        const name = nameEl.value;
        const email = emailEl.value;
        const conEmail = conEmailEl.value;
        if (!name) {
            isInvalid = true;
            nameErrorEl.innerText = "Username is required";
        }
        if (!email) {
            isInvalid = true;
            emailErrorEl.innerText = "Email is required";
        }
        if (!conEmail) {
            isInvalid = true;
            conErrorEmail.innerText = "Input email again";
        }
        if (email !== conEmail) {
            notEqual = true;
        }
        if (notEqual) {
            conErrorEmail.innerText = "Inconsistency between two mailboxes";
        }
        if (isInvalid || notEqual) {
            e.preventDefault();
            alert("Name and email are required");
        }

    });

    nameEl.addEventListener('input', (e) => {
        const name = e.target.value;
        if (!name) {
            nameErrorEl.innerText = "Username is required";
        } else {
            nameErrorEl.innerText = "";
        }
    });
    emailEl.addEventListener('input', (e) => {
        const email = e.target.value;
        if (!email) {
            emailErrorEl.innerText = "Email is required";
        } else {
            emailErrorEl.innerText = "";
        }
    });
    conEmailEl.addEventListener('input', (e) => {
        const conemail = e.target.value;
        if (!conemail) {
            conErrorEmail.innerText = "Input email again";
        }
        else {
            conErrorEmail.innerText = "";
        }
    });




})();
