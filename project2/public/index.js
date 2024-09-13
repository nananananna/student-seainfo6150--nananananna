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

})();