(function () {
  "use strict";

  function pageKey() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop() || "";
    if (!file || file === "" || file === "index.html") return "index.html";
    return file;
  }

  function setActiveNav() {
    var key = pageKey();
    var links = document.querySelectorAll(".nav a[data-nav]");
    links.forEach(function (link) {
      var target = link.getAttribute("data-nav");
      var active = target === key;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function bindRegistrationForm() {
    var form = document.getElementById("registration-form");
    if (!form) return;

    var success = document.getElementById("form-success");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("role", "status");
      }
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    bindRegistrationForm();
  });
})();
