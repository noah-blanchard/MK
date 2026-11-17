(function () {
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  function setMenu(o) { document.body.classList.toggle("menu-open", o); btn.setAttribute("aria-expanded", o ? "true" : "false"); }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  // Mobile sticky CTA
  var m = document.querySelector(".mcta"), hero = document.querySelector(".hero"), c = document.getElementById("contact");
  if (m && hero && c && "IntersectionObserver" in window) {
    var a = false, b = false, u = function () { m.classList.toggle("is-on", a && !b); };
    new IntersectionObserver(function (e) { a = !e[0].isIntersecting; u(); }).observe(hero);
    new IntersectionObserver(function (e) { b = e[0].isIntersecting; u(); }).observe(c);
  }

  // Quote form: opens a pre-filled email if an address is configured (data-email),
  // otherwise copies the request and opens LinkedIn so it can be pasted in a message.
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = form.dataset, lines = [];
      form.querySelectorAll("[data-label]").forEach(function (f) {
        if (f.value.trim()) lines.push(f.dataset.label + " : " + f.value.trim());
      });
      var subject = d.subject + " — " + (form.elements.name.value || "");
      var body = d.greeting + "\n\n" + lines.join("\n") + "\n";
      var status = document.getElementById("form-status");
      if (d.email) {
        location.href = "mailto:" + d.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        status.textContent = d.okMail;
      } else {
        var text = subject + "\n\n" + body;
        var done = function () { status.textContent = d.okCopy; status.classList.add("is-on"); window.open(d.fallback, "_blank", "noopener"); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done);
        else done();
        return;
      }
      status.classList.add("is-on");
    });
  }

  var y = document.querySelectorAll("[data-year]"); y.forEach(function (n) { n.textContent = new Date().getFullYear(); });
})();
