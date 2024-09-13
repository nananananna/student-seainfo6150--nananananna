"use strict";
(function () {
  //About hamburger menu  
  const ham = document.querySelector(".hamburger");
  const dropContent = document.querySelector(".dropdown-content");
  let dropItem = document.querySelectorAll(".dropdown-item");
  const images = document.querySelector('img[tabindex="0"]');


  ham.addEventListener('click', function () {
    dropContent.classList.toggle("active");
    dropItem.forEach(function (dropItem) {
      dropItem.classList.toggle("active");
    });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'||' ') {
      const target = document.activeElement;
      if (target === images) {
        images.focus();
        dropContent.classList.toggle("active");
        dropItem.forEach(function (dropItem) {
          dropItem.classList.toggle("active");
        });
      }
    };
  });
  //About subscribe modal
  let modal = document.getElementById("myModal");
  let openLink = document.querySelectorAll(".openForm");
  let closeLink = document.querySelector(".cancel");

  openLink.forEach(link => {
    link.onclick = function () {
      modal.classList.add("active");
    };
  });

  closeLink.onclick = function () {
    modal.classList.remove("active");

  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove("active");
    }
  })

  //About Error message
  const subscribe = document.querySelector(".subscribe");

  const nameEl = document.querySelector(".input-name");
  const nameErrorEl = document.querySelector(".err-name");

  const emailEl = document.querySelector(".input-email");
  const emailErrorEl = document.querySelector(".err-email");

  const conEmailEl = document.querySelector(".input-con-email");
  const conErrorEmail = document.querySelector(".err-con-email");

  subscribe.addEventListener('submit', (e) => {
    let isInvalid = false;
    let notEqual = false;
    const name = nameEl.value;
    const email = emailEl.value;
    const conEmail = conEmailEl.value;
    if (!name) {
      isInvalid = true;
      nameErrorEl.classList.add("active");
    }
    if (name) {
      nameErrorEl.classList.remove("active");
    }
    if (!email) {
      isInvalid = true;
      emailErrorEl.innerText = "Email is required";
    }
    if (email && !email.includes('@')) {
      e.preventDefault();
      emailErrorEl.innerText = "Must contain'@";
    }


    if (!conEmail) {
      isInvalid = true;
      conErrorEmail.innerText = "Input email again";
    }
    if (conEmail && !conEmail.includes('@')) {
      e.preventDefault();
      conErrorEmail.innerText = "Must contain'@'";
    }
    if (email !== conEmail) {
      e.preventDefault();
      notEqual = true;
      conErrorEmail.innerText = "Inconsistency between two mailboxes";
    }

    if (isInvalid || notEqual) {
      e.preventDefault();
    }

  });

  nameEl.addEventListener('input', (e) => {
    const name = e.target.value;
    if (!name) {
      nameErrorEl.classList.add("active");
    } else {
      nameErrorEl.classList.remove("active");
    }
  });

  emailEl.addEventListener('input', (e) => {
    const email = e.target.value;
    if (!email) {
      emailErrorEl.innerText = "Email is required";
    }
    else if (!email.includes('@')) {
      emailErrorEl.innerText = "Must contain'@'";
    }
    else {
      emailErrorEl.innerText = "";
    }
  });
  conEmailEl.addEventListener('input', (e) => {
    const conemail = e.target.value;
    if (!conemail) {
      conErrorEmail.innerText = "Input email again";
    }
    else if (!conemail.includes('@')) {
      conErrorEmail.innerText = "Must contain '@'";
    }
    else if (emailEl.value !== conemail) {
      conErrorEmail.innerText = "Inconsistency between two mailboxes";
    }
    else {
      conErrorEmail.innerText = "";
    }
  });

  //Set all cards's height
  window.addEventListener('load', function () {
    const cards = document.querySelectorAll('.card');
    let maxCardHeight = 0;

    cards.forEach(card => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      card.style.height = maxCardHeight + 'px';
    });
  });



})();