// Navigation works without JavaScript; respect reduced-motion preferences.
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("motion-enabled");
})();
