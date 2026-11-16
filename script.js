(function () {
  "use strict";

  var peso = function (n) { return "₱" + n; };

  /* ---------- Menu ---------- */
  var root = document.getElementById("menu-root");
  var tabs = document.getElementById("tabs");
  var data = window.MENU || [];

  function priceHTML(it) {
    if (typeof it.p === "number") {
      return '<span class="price">' + peso(it.p) + "</span>";
    }
    var out = [];
    if (typeof it.hot === "number") out.push('<span class="price"><small>Hot</small> ' + peso(it.hot) + "</span>");
    if (typeof it.iced === "number") out.push('<span class="price"><small>Iced</small> ' + peso(it.iced) + "</span>");
    return out.join("");
  }

  function itemHTML(it) {
    var tag = it.tag ? ' <span class="pill">' + it.tag + "</span>" : "";
    return '<li class="item"><span class="item__name">' + it.n + tag + '</span><span class="item__dots" aria-hidden="true"></span><span class="item__price">' + priceHTML(it) + "</span></li>";
  }

  function sectionHTML(cat) {
    var body = "";
    if (cat.groups) {
      body = cat.groups.map(function (g) {
        return '<h4 class="group">' + g.label + '</h4><ul class="list">' + g.items.map(itemHTML).join("") + "</ul>";
      }).join("");
    } else {
      body = '<ul class="list">' + cat.items.map(itemHTML).join("") + "</ul>";
    }
    return '<section class="cat" id="cat-' + cat.id + '" role="tabpanel" aria-labelledby="tab-' + cat.id + '">' +
      '<div class="cat__head"><h3>' + cat.title + "</h3><p>" + cat.blurb + "</p></div>" + body + "</section>";
  }

  function show(id) {
    var cats = root.querySelectorAll(".cat");
    Array.prototype.forEach.call(cats, function (c) {
      c.hidden = !(id === "all" || c.id === "cat-" + id);
    });
    Array.prototype.forEach.call(tabs.children, function (b) {
      var on = b.dataset.id === id;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
  }

  if (root && tabs && data.length) {
    root.innerHTML = data.map(sectionHTML).join("");
    var all = [{ id: "all", title: "All" }].concat(data);
    tabs.innerHTML = all.map(function (c) {
      return '<button role="tab" class="tab" id="tab-' + c.id + '" data-id="' + c.id + '" type="button">' + c.title + "</button>";
    }).join("");

    tabs.addEventListener("click", function (e) {
      var b = e.target.closest(".tab");
      if (b) show(b.dataset.id);
    });
    tabs.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var list = Array.prototype.slice.call(tabs.children);
      var i = list.indexOf(document.activeElement);
      if (i < 0) return;
      var next = list[(i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length];
      next.focus();
      show(next.dataset.id);
    });
    show("all");
  }

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var nav = document.getElementById("menu-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Nav shadow on scroll ---------- */
  var header = document.querySelector(".nav");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".section__head, .about__text, .about__media, .branch, .gallery .ph, .visit__inner > *");
  if (!reduce && "IntersectionObserver" in window) {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
