(function () {
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  function setMenu(o) { document.body.classList.toggle("menu-open", o); btn.setAttribute("aria-expanded", o ? "true" : "false"); }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }
  var io = "IntersectionObserver" in window, reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (io && !reduce) {
    var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); o.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { o.observe(el); });
  } else items.forEach(function (el) { el.classList.add("is-in"); });
  var m = document.querySelector(".mcta"), hero = document.querySelector(".hero"), c = document.getElementById("contact");
  if (m && hero && c && io) {
    var a = false, b = false, u = function () { m.classList.toggle("is-on", a && !b); };
    new IntersectionObserver(function (e) { a = !e[0].isIntersecting; u(); }).observe(hero);
    new IntersectionObserver(function (e) { b = e[0].isIntersecting; u(); }).observe(c);
  }
  var y = document.querySelectorAll("[data-year]"); y.forEach(function (n) { n.textContent = new Date().getFullYear(); });
})();
