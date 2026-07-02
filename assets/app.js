/* =========================================================
   Stellas Deutsch — логика: звёзды, рендер, сортировка, фильтр
   ========================================================= */

/* ---------- Волшебное небо: звёзды, пыльца, фейерверки ---------- */
function buildSky() {
  const sky = document.querySelector(".stars");
  if (!sky) return;
  const n = window.innerWidth < 700 ? 70 : 130;
  let html = "";
  for (let i = 0; i < n; i++) {
    const x = (Math.random() * 100).toFixed(2);
    const y = (Math.random() * 100).toFixed(2);
    const d = (2 + Math.random() * 5).toFixed(2);
    const delay = (Math.random() * 5).toFixed(2);
    const size = Math.random() < 0.12 ? 3 : Math.random() < 0.4 ? 2 : 1;
    const gold = Math.random() < 0.22 ? " gold" : "";
    html += `<i class="${gold.trim()}" style="left:${x}%;top:${y}%;--dur:${d}s;animation-delay:${delay}s;width:${size}px;height:${size}px"></i>`;
  }
  sky.innerHTML = html;
  schedulePixie(sky);
  scheduleFirework(sky);
}

/* Летящая пыльца феи (Tinker Bell) */
function schedulePixie(sky) {
  const fly = () => {
    const p = document.createElement("div");
    p.className = "pixie";
    const startY = 8 + Math.random() * 50;
    p.style.top = startY + "%";
    p.style.left = "-2%";
    sky.appendChild(p);
    const drift = (Math.random() * 20 - 10);
    p.animate(
      [
        { opacity: 0, transform: "translate(0,0)" },
        { opacity: 1, offset: 0.1 },
        { opacity: 1, offset: 0.85 },
        { opacity: 0, transform: `translate(104vw, ${drift}vh)` }
      ],
      { duration: 5200 + Math.random() * 2500, easing: "ease-in-out" }
    ).onfinish = () => p.remove();
    setTimeout(fly, 6000 + Math.random() * 8000);
  };
  setTimeout(fly, 2500 + Math.random() * 3000);
}

/* Фейерверк над замком */
function scheduleFirework(sky) {
  const COLORS = ["#ffd77a", "#ff8ac2", "#6ec9ff", "#b98bff", "#8affc1"];
  const boom = () => {
    const fw = document.createElement("div");
    fw.className = "firework";
    const x = 15 + Math.random() * 70;
    const y = 12 + Math.random() * 26;
    fw.style.left = x + "%";
    fw.style.top = y + "%";
    const color = COLORS[Math.floor((x + y) % COLORS.length)];
    const N = 16;
    for (let i = 0; i < N; i++) {
      const s = document.createElement("span");
      s.style.background = color;
      s.style.boxShadow = `0 0 6px ${color}`;
      fw.appendChild(s);
      const ang = (Math.PI * 2 * i) / N;
      const dist = 34 + Math.random() * 18;
      s.animate(
        [
          { opacity: 1, transform: "translate(0,0) scale(1)" },
          { opacity: 1, offset: 0.6 },
          {
            opacity: 0,
            transform: `translate(${Math.cos(ang) * dist}px, ${Math.sin(ang) * dist}px) scale(0.3)`
          }
        ],
        { duration: 1100, easing: "cubic-bezier(0.15,0.7,0.3,1)" }
      );
    }
    sky.appendChild(fw);
    setTimeout(() => fw.remove(), 1300);
    setTimeout(boom, 3200 + Math.random() * 4500);
  };
  setTimeout(boom, 1800 + Math.random() * 2500);
}

/* ---------- Рейтинг звёздами ---------- */
function starsHTML(rating) {
  let out = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) out += `<span class="s full">★</span>`;
    else if (rating >= i - 0.5) out += `<span class="s half">★</span>`;
    else out += `<span class="s">★</span>`;
  }
  return out;
}

/* ---------- Карточка фильма ---------- */
function cardHTML(f, index) {
  const platforms = f.platforms
    .map(
      (p) =>
        `<a href="${p.url}" target="_blank" rel="noopener">${p.name}<span class="ext">↗</span></a>`
    )
    .join("");

  return `
  <article class="card" style="animation-delay:${Math.min(index * 55, 500)}ms">
    <div class="poster">
      <div class="grad" style="background:linear-gradient(150deg, ${f.poster.from}, ${f.poster.to})"></div>
      <div class="grain"></div>
      <span class="sparkle s1">✦</span>
      <span class="sparkle s2">✧</span>
      <span class="sparkle s3">✦</span>
      <span class="lvl-tag">${f.level}</span>
      <div class="glyph">${f.poster.glyph}</div>
      <div class="title-plate">
        <div class="t">${f.title}</div>
        <div class="tr">${f.titleRu}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="meta-row">
        <span class="genre-pill">${f.genre}</span>
        <span>${f.year}</span>
        <span class="dot"></span>
        <span>${f.lengthLabel}</span>
      </div>
      <div class="rating">
        <span class="stars-row">${starsHTML(f.rating)}</span>
        <span class="num">${f.rating.toFixed(1)}</span>
      </div>
      <p class="review">${f.review}</p>
      <div class="watch">
        <div class="watch-label">ГДЕ СМОТРЕТЬ</div>
        <div class="watch-links">${platforms}</div>
      </div>
    </div>
  </article>`;
}

/* ---------- Состояние + рендер каталога ---------- */
function initCatalog(opts) {
  const scope = opts.level ? FILMS.filter((f) => f.level === opts.level) : FILMS.slice();

  const grid = document.getElementById("grid");
  const searchEl = document.getElementById("search");
  const sortEl = document.getElementById("sort");
  const countEl = document.getElementById("count");
  const chipsEl = document.getElementById("chips");

  const state = { q: "", sort: "rating-desc", genre: "all" };

  /* чипы жанров */
  const genres = ["all", ...Array.from(new Set(scope.map((f) => f.genre)))];
  if (chipsEl) {
    chipsEl.innerHTML = genres
      .map(
        (g) =>
          `<button class="chip${g === "all" ? " active" : ""}" data-genre="${g}">${
            g === "all" ? "Все жанры" : g
          }</button>`
      )
      .join("");
    chipsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      state.genre = btn.dataset.genre;
      chipsEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
      render();
    });
  }

  function apply() {
    let list = scope.slice();
    if (state.genre !== "all") list = list.filter((f) => f.genre === state.genre);
    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.titleRu.toLowerCase().includes(q) ||
          f.genre.toLowerCase().includes(q) ||
          f.platforms.some((p) => p.name.toLowerCase().includes(q))
      );
    }
    const [key, dir] = state.sort.split("-");
    const mul = dir === "asc" ? 1 : -1;
    list.sort((a, b) => {
      let av, bv;
      if (key === "rating") { av = a.rating; bv = b.rating; }
      else if (key === "year") { av = a.year; bv = b.year; }
      else if (key === "length") { av = a.length; bv = b.length; }
      else if (key === "title") { return a.title.localeCompare(b.title) * mul; }
      else if (key === "level") { av = a.level; bv = b.level; return String(av).localeCompare(String(bv)) * mul; }
      return (av - bv) * mul;
    });
    return list;
  }

  function render() {
    const list = apply();
    if (countEl) {
      const word = pluralFilms(list.length);
      countEl.textContent = `${list.length} ${word}`;
    }
    if (!list.length) {
      grid.innerHTML = `<div class="empty"><div class="big">Ничего не нашлось</div><div>Попробуй другой жанр или запрос. Звёзды никуда не денутся.</div></div>`;
      return;
    }
    grid.innerHTML = list.map((f, i) => cardHTML(f, i)).join("");
  }

  if (searchEl)
    searchEl.addEventListener("input", (e) => {
      state.q = e.target.value.trim();
      render();
    });
  if (sortEl)
    sortEl.addEventListener("change", (e) => {
      state.sort = e.target.value;
      render();
    });

  render();
}

function pluralFilms(n) {
  const a = Math.abs(n) % 100;
  const b = a % 10;
  if (a > 10 && a < 20) return "фильмов";
  if (b > 1 && b < 5) return "фильма";
  if (b === 1) return "фильм";
  return "фильмов";
}

/* ---------- Главная: карточки уровней ---------- */
function renderLevelCards() {
  const host = document.getElementById("level-cards");
  if (!host) return;
  const order = ["A0", "A1", "A2"];
  host.innerHTML = order
    .map((code) => {
      const l = LEVELS[code];
      const count = FILMS.filter((f) => f.level === code).length;
      return `
      <a class="level-card" href="${code.toLowerCase()}.html">
        <div class="glow" style="background:${l.accent}"></div>
        <div class="level-code">${l.code}</div>
        <div class="lname">${l.name} · ${count} ${pluralFilms(count)}</div>
        <div class="ltag">${l.tagline}</div>
        <div class="go">Смотреть подборку <span class="arrow">→</span></div>
      </a>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", buildSky);
