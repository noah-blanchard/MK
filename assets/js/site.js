(function () {
  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? btn.dataset.close : btn.dataset.open;
  }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });
  }

  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if (hasIO && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Mobile sticky "quote" button: visible after the hero, hidden over the contact block
  var mcta = document.querySelector(".mcta");
  var hero = document.querySelector(".hero");
  var contact = document.getElementById("contact");
  if (mcta && hero && contact && hasIO) {
    var heroOut = false, contactIn = false;
    var update = function () { mcta.classList.toggle("is-on", heroOut && !contactIn); };
    new IntersectionObserver(function (e) { heroOut = !e[0].isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(function (e) { contactIn = e[0].isIntersecting; update(); }).observe(contact);
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
