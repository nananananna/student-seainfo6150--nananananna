"use strict";
(function(){
    const buttonEl = document.querySelector("button");
    const dropContent = document.querySelector(".dropdown-content");
    const dropItem = document.querySelector(".dropdown-item");

    buttonEl.addEventListener("click",function(){
        dropContent.classList.toggle("active");
        dropItem.classList.toggle("active");
    });
})();