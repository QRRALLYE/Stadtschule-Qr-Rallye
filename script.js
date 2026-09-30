const stations = {
  1: {
    title: "STAFFROOM",
    place: "Staffroom / Lehrerzimmer",
    image: "images/station1.jpg",
    letter: "S",
    question: "Auf der Tür steht ein englisches Wort. Welches Wort ist es?",
    answers: ["STAFFROOM", "STAFF ROOM"],
    hint: "Schau direkt auf das große Schild an der Tür.",
    type: "text"
  },
  2: {
    title: "SEKRETARIAT",
    place: "Sekretariat",
    image: "images/station2.jpg",
    letter: "T",
    question: "Welcher Raum ist auf dem großen Schild über dem Fenster genannt?",
    answers: ["SEKRETARIAT"],
    hint: "Das Wort steht ganz oben und ist kaum zu übersehen.",
    type: "text"
  },
  3: {
    title: "AULA",
    place: "Aula / Eingangsbereich",
    image: "images/station3.jpg",
    letter: "A",
    question: "Auf dem Wegweiser stehen zwei Orte. Einer davon ist die Aula. Wie heißt der andere?",
    answers: ["MENSA"],
    hint: "Der Hinweis befindet sich oben im Bild.",
    type: "text"
  },
  4: {
    title: "DER HINWEIS",
    place: "Station 4",
    image: "images/station4.jpg",
    letter: "T",
    question: "Welche drei Buchstaben stehen auf dem kleinen Schild an der Tür?",
    answers: ["NEM", "NEM."],
    hint: "Zoom gedanklich auf das kleine Schild rechts neben der Tür.",
    type: "text"
  },
  5: {
    title: "DER FLUR",
    place: "Schulflur",
    image: "images/station5.jpg",
    letter: "I",
    question: "Was musst du im Flur finden, um den nächsten Hinweis zu entdecken? Zähle die roten Feuerlöscher im sichtbaren Bereich.",
    answers: ["1", "EIN", "EINEN", "EINER"],
    hint: "Im Bild ist ein roter Feuerlöscher zu sehen.",
    type: "text"
  },
  6: {
    title: "DRAUSSEN",
    place: "Eingang / Blick auf den Schulhof",
    image: "images/station6.jpg",
    letter: "O",
    question: "Welche Farbe hat der Boden des Sportbereichs draußen?",
    answers: ["ROT", "ROT/ORANGE", "ORANGE"],
    hint: "Schau durch die großen Fenster.",
    type: "text"
  },
  7: {
    title: "PODCAST",
    place: "Podcast-Bereich",
    image: "images/station7.jpg",
    letter: "N",
    question: "Was möchte die Schule laut dem Plakat starten?",
    answers: ["PODCAST", "EINEN PODCAST", "EINEN SCHULPODCAST", "SCHULPODCAST"],
    hint: "Lies die große Überschrift auf dem Plakat.",
    type: "text"
  }
};

function normalize(s) {
  return String(s || "").trim().toUpperCase()
    .replaceAll("Ä","AE").replaceAll("Ö","OE").replaceAll("Ü","UE").replaceAll("ß","SS")
    .replace(/\s+/g, " ");
}

function getSolved() {
  return JSON.parse(localStorage.getItem("missionSolved") || "[]");
}
function saveSolved(list) {
  localStorage.setItem("missionSolved", JSON.stringify([...new Set(list)].sort((a,b)=>a-b)));
}
function renderProgress() {
  const el = document.getElementById("progress");
  if (!el) return;
  const solved = getSolved();
  el.innerHTML = Object.keys(stations).map(k => {
    const n = Number(k);
    return `<div class="letter ${solved.includes(n) ? "done" : ""}">${solved.includes(n) ? stations[n].letter : "•"}</div>`;
  }).join("");
}
function stationFromUrl() {
  return Number(new URLSearchParams(location.search).get("station") || 1);
}
function renderStation() {
  const card = document.getElementById("stationCard");
  if (!card) return;
  const n = stationFromUrl();
  const s = stations[n];
  document.getElementById("stationNumber").textContent = `STATION ${n}/7`;
  if (!s) {
    card.innerHTML = `<h1>Station nicht gefunden.</h1>`;
    return;
  }
  const solved = getSolved().includes(n);
  card.innerHTML = `
    <div class="station-image-wrap"><img src="${s.image}" alt="${s.place}"></div>
    <div class="station-content">
      <div class="eyebrow">📍 ${s.place}</div>
      <h1>STATION ${n}<br><span>${s.title}</span></h1>
      <div class="mission-box"><b>MISSION:</b><p>${s.question}</p></div>
      <input id="stationAnswer" class="answer" autocomplete="off" placeholder="DEINE ANTWORT">
      <button class="btn" onclick="checkStation(${n})">${solved ? "NOCH EINMAL PRÜFEN →" : "ANTWORT PRÜFEN →"}</button>
      <div id="stationMessage"></div>
      <div class="hint">💡 Tipp: ${s.hint}</div>
    </div>`;
}
function checkStation(n) {
  const s = stations[n];
  const value = normalize(document.getElementById("stationAnswer").value);
  const msg = document.getElementById("stationMessage");
  if (s.answers.map(normalize).includes(value)) {
    const solved = getSolved();
    if (!solved.includes(n)) solved.push(n);
    saveSolved(solved);
    msg.innerHTML = `<div class="success">✓ RICHTIG! Deine Geheim-Buchstabe ist <strong>${s.letter}</strong>.</div>
      <a class="btn secondary" href="${n < 7 ? `station.html?station=${n+1}` : "final.html"}">${n < 7 ? "WEITER ZUR NÄCHSTEN STATION →" : "ZUM FINALEN CODE →"}</a>`;
  } else {
    msg.innerHTML = `<div class="error">✕ Noch nicht richtig. Schau dir das Foto und den Hinweis noch einmal genau an.</div>`;
  }
}
function checkFinal() {
  const value = normalize(document.getElementById("finalInput").value);
  const msg = document.getElementById("finalMessage");
  if (value === "STATION") {
    msg.innerHTML = `<div class="success">✓ CODE AKZEPTIERT! Die letzte Mission ist freigeschaltet.</div>`;
    document.getElementById("videoBox").classList.remove("hidden");
  } else {
    msg.innerHTML = `<div class="error">✕ Der Code stimmt noch nicht. Sammle alle sieben Buchstaben.</div>`;
  }
}
renderProgress();
renderStation();
