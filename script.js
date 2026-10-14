const stations = {
  1: {
    title: "TÜRSCHILD-CODE",
    place: "Lehrerzimmer",
    image: "images/station1.jpg",
    letter: "S",
    question: "Auf dem Türschild stehen im großen englischen Raumnamen zwei Wörter. Multipliziere die Anzahl der Wörter mit 3.",
    answers: ["6", "SECHS"],
    hint: "Achte auf „STAFF ROOM“ und rechne 2 × 3.",
    type: "text"
  },
  2: {
    title: "SCHILD-RÄTSEL",
    place: "Sekretariat",
    image: "images/station2.jpg",
    letter: "T",
    question: "Zähle die Buchstaben des großen Wortes auf dem Schild und ziehe danach 4 ab.",
    answers: ["7", "SIEBEN"],
    hint: "Das Wort hat 11 Buchstaben. Rechne 11 − 4.",
    type: "text"
  },
  3: {
    title: "WEGWEISER-CODE",
    place: "Wegweiser zu Aula und Mensa",
    image: "images/station7.jpg",
    letter: "A",
    question: "Addiere die Buchstaben der beiden Orte auf dem Wegweiser. Wie lautet die Summe?",
    answers: ["9", "NEUN"],
    hint: "AULA hat 4 und MENSA hat 5 Buchstaben.",
    type: "text"
  },
  4: {
    title: "RAUMNUMMER-CODE",
    place: "Tür der Spülküche",
    image: "images/station3.jpg",
    letter: "T",
    question: "Auf dem Türschild steht N.E35. Addiere die beiden Ziffern der Raumnummer.",
    answers: ["8", "ACHT"],
    hint: "Die Ziffern sind 3 und 5.",
    type: "text"
  },
  5: {
    title: "FLUR-RECHNUNG",
    place: "Schulflur",
    image: "images/station4.jpg",
    letter: "I",
    question: "Zähle die roten Feuerlöscher auf dem Foto und addiere 6.",
    answers: ["7", "SIEBEN"],
    hint: "Du findest einen Feuerlöscher. Rechne 1 + 6.",
    type: "text"
  },
  6: {
    title: "SCHULHOF-CODE",
    place: "Sportfläche draußen",
    image: "images/station6.jpg",
    letter: "O",
    question: "Finde die Farbe der Sportfläche. Addiere 5 zur Buchstabenanzahl des Wortes ROT.",
    answers: ["8", "ACHT"],
    hint: "Der Boden ist rot. ROT hat 3 Buchstaben: 3 + 5.",
    type: "text"
  },
  7: {
    title: "PLAKAT-RECHNUNG",
    place: "Schulflur beim Podcast-Plakat",
    image: "images/station5.jpg",
    letter: "N",
    question: "Zähle die Buchstaben des Wortes PODCAST auf dem Plakat und ziehe 2 ab.",
    answers: ["5", "FÜNF"],
    hint: "PODCAST hat 7 Buchstaben. Rechne 7 − 2.",
    type: "text"
  }
};

function normalize(s) {
  return String(s || "").trim().toUpperCase()
    .replaceAll("Ä","AE").replaceAll("Ö","OE").replaceAll("Ü","UE").replaceAll("ß","SS")
    .replace(/\s+/g, " ");
}

function bindAnswerFields() {
  document.querySelectorAll(".answer").forEach((input) => {
    if (input.dataset.bound === "true") return;
    input.dataset.bound = "true";

    input.addEventListener("input", () => {
      const cursor = input.selectionStart ?? input.value.length;
      const nextValue = normalize(input.value);
      input.value = nextValue;

      if (typeof input.setSelectionRange === "function") {
        const nextCursor = Math.min(cursor, nextValue.length);
        input.setSelectionRange(nextCursor, nextCursor);
      }
    });

    input.addEventListener("paste", (event) => {
      const clipboardText = (event.clipboardData || window.clipboardData)?.getData("text") || "";
      if (!clipboardText) return;

      event.preventDefault();
      const start = input.selectionStart ?? 0;
      const end = input.selectionEnd ?? input.value.length;
      const nextValue = normalize(`${input.value.slice(0, start)}${clipboardText}${input.value.slice(end)}`);
      input.value = nextValue;

      if (typeof input.setSelectionRange === "function") {
        const nextCursor = Math.min(start + clipboardText.length, nextValue.length);
        input.setSelectionRange(nextCursor, nextCursor);
      }
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
}

let storageMessage = "";

function getSolved() {
  try {
    const saved = localStorage.getItem("missionSolved");
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) throw new TypeError("Gespeicherter Fortschritt ist kein Array.");
    storageMessage = "";
    return [...new Set(parsed.filter((station) => Number.isInteger(station) && stations[station]))]
      .sort((a, b) => a - b);
  } catch (error) {
    storageMessage = "Dein Fortschritt konnte nicht geladen werden. Bitte prüfe die Speichereinstellungen deines Browsers.";
    console.error("Mission Stadtschule: Fortschritt konnte nicht aus dem Browserspeicher geladen werden.", error);
    return [];
  }
}
function saveSolved(list) {
  try {
    localStorage.setItem("missionSolved", JSON.stringify([...new Set(list)].sort((a, b) => a - b)));
    storageMessage = "";
    return true;
  } catch (error) {
    storageMessage = "Der Browser konnte deinen Fortschritt nicht speichern. Bitte aktiviere den lokalen Speicher.";
    console.error("Mission Stadtschule: Fortschritt konnte nicht im Browserspeicher gespeichert werden.", error);
    return false;
  }
}
function renderProgress() {
  const el = document.getElementById("progress");
  if (!el) return;
  const solved = getSolved();
  el.innerHTML = Object.keys(stations).map((k) => {
    const n = Number(k);
    const done = solved.includes(n);
    return `<a class="letter ${done ? "done" : ""}" href="station.html?station=${n}" aria-label="Station ${n}: ${done ? "geschafft" : "offen"}">${done ? stations[n].letter : "·"}</a>`;
  }).join("");
  const count = document.getElementById("progressCount");
  if (count) count.textContent = String(solved.length);
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = `${solved.length / Object.keys(stations).length * 100}%`;
  const status = document.getElementById("progressStatus");
  if (status) {
    status.textContent = storageMessage || (solved.length === 7
      ? "Geschafft! Jetzt kannst du das Finale öffnen."
      : "Jede Station schenkt dir einen Buchstaben.");
    status.classList.toggle("warning", Boolean(storageMessage));
  }
  renderStationLinks(solved);
}
function renderStationLinks(solved = getSolved()) {
  const grid = document.getElementById("stationGrid");
  if (!grid) return;
  grid.innerHTML = Object.entries(stations).map(([key, station]) => {
    const number = Number(key);
    const done = solved.includes(number);
    return `
      <a class="station-tile" data-station="${number}" href="station.html?station=${number}" aria-label="Station ${number}: ${station.place}, ${done ? "geschafft" : "starten"}">
        <img src="${station.image}" alt="" loading="lazy">
        <div class="station-tile-content">
          <div class="station-tile-top">
            <span class="station-tile-number">STATION ${String(number).padStart(2, "0")}</span>
            <span class="station-tile-status ${done ? "done" : ""}">${done ? "✓ GESCHAFFT" : "ENTDECKEN →"}</span>
          </div>
          <h3>${station.title}</h3>
          <p>${station.place}</p>
        </div>
      </a>`;
  }).join("");
}
function stationFromUrl() {
  const value = new URLSearchParams(location.search).get("station");
  return value === null ? 1 : Number(value);
}
function renderStation() {
  const card = document.getElementById("stationCard");
  if (!card) return;
  const n = stationFromUrl();
  const s = stations[n];
  const stationLabel = document.getElementById("stationNumber");
  if (stationLabel) stationLabel.textContent = s ? `STATION ${n}/7` : "STATION";
  if (!s) {
    card.innerHTML = `<div class="station-error"><div class="eyebrow">HINWEIS</div><h1>Diese Station gibt es nicht.</h1><p>Prüfe den QR-Code oder gehe zurück zur Übersicht.</p><a class="btn" href="index.html#stationen">ZUR ÜBERSICHT <span aria-hidden="true">→</span></a></div>`;
    document.title = "Station nicht gefunden – Mission Stadtschule";
    return;
  }
  document.title = `Station ${n}: ${s.title} – Mission Stadtschule`;
  const solved = getSolved().includes(n);
  card.dataset.station = String(n);
  card.innerHTML = `
    <div class="station-image-wrap"><img src="${s.image}" alt="Foto vom Standort: ${s.place}"><span class="station-photo-label">ORIGINALFOTO AUS DER SCHULE</span></div>
    <div class="station-content">
      <div class="eyebrow"><span class="eyebrow-mark" aria-hidden="true">⌖</span> ${s.place}</div>
      <h1>STATION ${n}<br><span>${s.title}</span></h1>
      <div class="mission-box"><b>MISSION:</b><p>${s.question}</p></div>
      <form id="stationForm">
        <label class="field-label" for="stationAnswer">Deine Antwort</label>
        <input id="stationAnswer" class="answer" autocomplete="off" autocapitalize="characters" placeholder="DEINE ANTWORT" aria-describedby="stationMessage" required>
        <button class="btn" type="submit">${solved ? "NOCH EINMAL PRÜFEN" : "ANTWORT PRÜFEN"} <span aria-hidden="true">→</span></button>
      </form>
      <div id="stationMessage" aria-live="polite"></div>
      <div class="hint"><strong>Tipp:</strong> ${s.hint}</div>
    </div>`;
  bindAnswerFields();
}
function checkStation(n) {
  const s = stations[n];
  const input = document.getElementById("stationAnswer");
  const value = normalize(input?.value);
  const msg = document.getElementById("stationMessage");
  if (!s || !input || !msg) return;
  if (s.answers.map(normalize).includes(value)) {
    const solved = getSolved();
    if (!solved.includes(n)) solved.push(n);
    const saved = saveSolved(solved);
    if (saved) renderProgress();
    msg.innerHTML = `<div class="success">✓ RICHTIG! Dein Geheim-Buchstabe ist <strong>${s.letter}</strong>.${saved ? "" : `<br>${storageMessage}`}</div>
      <a class="btn secondary" href="${n < 7 ? `station.html?station=${n + 1}` : "final.html"}">${n < 7 ? "WEITER ZUR NÄCHSTEN STATION" : "ZUM FINALEN CODE"} <span aria-hidden="true">→</span></a>`;
  } else {
    msg.innerHTML = `<div class="error">✕ Noch nicht richtig. Schau dir das Foto und den Hinweis noch einmal genau an.</div>`;
  }
}
function renderFinal() {
  const form = document.getElementById("finalForm");
  if (!form) return;
  const solved = getSolved();
  const locked = solved.length < Object.keys(stations).length;
  form.classList.toggle("hidden", locked);
  const lockedMessage = document.getElementById("finalLocked");
  if (lockedMessage) lockedMessage.classList.toggle("hidden", !locked);
  const nextStationLink = document.getElementById("nextStationLink");
  if (nextStationLink && locked) {
    const next = Object.keys(stations).map(Number).find((number) => !solved.includes(number)) || 1;
    nextStationLink.href = `station.html?station=${next}`;
  }
  if (lockedMessage) {
    let warning = document.getElementById("storageWarning");
    if (storageMessage && !warning) {
      warning = document.createElement("p");
      warning.id = "storageWarning";
      lockedMessage.append(warning);
    } else if (!storageMessage && warning) {
      warning.remove();
    }
    if (warning) warning.textContent = storageMessage;
  }
}
function checkFinal() {
  const value = normalize(document.getElementById("finalInput")?.value);
  const msg = document.getElementById("finalMessage");
  if (!msg) return;
  if (getSolved().length < Object.keys(stations).length) {
    renderFinal();
    return;
  }
  if (value === "STATION") {
    msg.innerHTML = `<div class="success">✓ CODE AKZEPTIERT! Die letzte Mission ist freigeschaltet.</div>`;
    document.getElementById("videoBox").classList.remove("hidden");
  } else {
    msg.innerHTML = `<div class="error">✕ Der Code stimmt noch nicht. Sammle alle sieben Buchstaben.</div>`;
  }
}
document.addEventListener("submit", (event) => {
  if (event.target.id === "stationForm") {
    event.preventDefault();
    checkStation(stationFromUrl());
  }
  if (event.target.id === "finalForm") {
    event.preventDefault();
    checkFinal();
  }
});
renderProgress();
renderStation();
renderFinal();
bindAnswerFields();
