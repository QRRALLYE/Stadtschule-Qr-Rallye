const stations = {
  1: {
    title: { de: "TÜRSCHILD-CODE", en: "DOOR SIGN CODE", ar: "رمز لوحة الباب", ru: "КОД НА ДВЕРИ" },
    place: { de: "Lehrerzimmer", en: "Teachers' room", ar: "غرفة المعلمين", ru: "Учительская" },
    image: "images/station1.jpg",
    letter: "S",
    question: {
      de: "Auf dem Türschild stehen im großen englischen Raumnamen zwei Wörter. Multipliziere die Anzahl der Wörter mit 3.",
      en: "The large English room name on the door sign has two words. Multiply the number of words by 3.",
      ar: "يتكوّن اسم الغرفة الإنجليزي الكبير على الباب من كلمتين. اضرب عدد الكلمات في ٣.",
      ru: "В большом английском названии на двери два слова. Умножь их количество на 3."
    },
    answers: { de: ["6", "SECHS"], en: ["6", "SIX"], ar: ["6", "٦", "ستة"], ru: ["6", "ШЕСТЬ"] },
    hint: {
      de: "Achte auf „STAFF ROOM“ und rechne 2 × 3.",
      en: "Look at “STAFF ROOM” and work out 2 × 3.",
      ar: "انظر إلى «STAFF ROOM» واحسب ٢ × ٣.",
      ru: "Посмотри на «STAFF ROOM» и вычисли 2 × 3."
    }
  },
  2: {
    title: { de: "SCHILD-RÄTSEL", en: "SIGN PUZZLE", ar: "لغز اللافتة", ru: "ЗАГАДКА НА ТАБЛИЧКЕ" },
    place: { de: "Sekretariat", en: "School office", ar: "السكرتارية", ru: "Секретариат" },
    image: "images/station2.jpg",
    letter: "T",
    question: {
      de: "Zähle die Buchstaben des großen Wortes auf dem Schild und ziehe danach 4 ab.",
      en: "Count the letters in the large word on the sign, then subtract 4.",
      ar: "عُدّ حروف الكلمة الكبيرة على اللافتة، ثم اطرح ٤.",
      ru: "Посчитай буквы в большом слове на табличке и вычти 4."
    },
    answers: { de: ["7", "SIEBEN"], en: ["7", "SEVEN"], ar: ["7", "٧", "سبعة"], ru: ["7", "СЕМЬ"] },
    hint: {
      de: "Das Wort „Sekretariat“ hat 11 Buchstaben. Rechne 11 − 4.",
      en: "The word “Sekretariat” has 11 letters. Work out 11 − 4.",
      ar: "كلمة «Sekretariat» تتكوّن من ١١ حرفًا. احسب ١١ − ٤.",
      ru: "В слове «Sekretariat» 11 букв. Вычисли 11 − 4."
    }
  },
  3: {
    title: { de: "WEGWEISER-CODE", en: "SIGNPOST CODE", ar: "رمز لوحة الاتجاهات", ru: "КОД УКАЗАТЕЛЯ" },
    place: { de: "Wegweiser zu Aula und Mensa", en: "Sign to the assembly hall and cafeteria", ar: "لافتة القاعة والمطعم", ru: "Указатель к актовому залу и столовой" },
    image: "images/station3.jpg",
    letter: "A",
    question: {
      de: "Addiere die Buchstaben der beiden Orte auf dem Wegweiser. Wie lautet die Summe?",
      en: "Add the number of letters in the two places on the signpost. What is the total?",
      ar: "اجمع عدد حروف اسمي المكانين على اللافتة. ما المجموع؟",
      ru: "Сложи количество букв в названиях двух мест на указателе. Какова сумма?"
    },
    answers: { de: ["9", "NEUN"], en: ["9", "NINE"], ar: ["9", "٩", "تسعة"], ru: ["9", "ДЕВЯТЬ"] },
    hint: {
      de: "AULA hat 4 und MENSA hat 5 Buchstaben.",
      en: "AULA has 4 letters and MENSA has 5.",
      ar: "تتكوّن AULA من ٤ أحرف وMENSA من ٥.",
      ru: "В слове AULA 4 буквы, а в MENSA — 5."
    }
  },
  4: {
    title: { de: "RAUMNUMMER-CODE", en: "ROOM NUMBER CODE", ar: "رمز رقم الغرفة", ru: "КОД НОМЕРА КОМНАТЫ" },
    place: { de: "Tür der Spülküche", en: "Dishwashing room door", ar: "باب غرفة غسل الأواني", ru: "Дверь моечной" },
    image: "images/station4.jpg",
    letter: "T",
    question: {
      de: "Auf dem Türschild steht N.E35. Addiere die beiden Ziffern der Raumnummer.",
      en: "The door sign says N.E35. Add the two digits in the room number.",
      ar: "مكتوب على الباب N.E35. اجمع رقمي رقم الغرفة.",
      ru: "На табличке написано N.E35. Сложи две цифры номера комнаты."
    },
    answers: { de: ["8", "ACHT"], en: ["8", "EIGHT"], ar: ["8", "٨", "ثمانية"], ru: ["8", "ВОСЕМЬ"] },
    hint: {
      de: "Die Ziffern sind 3 und 5.",
      en: "The digits are 3 and 5.",
      ar: "الرقمان هما ٣ و٥.",
      ru: "Это цифры 3 и 5."
    }
  },
  5: {
    title: { de: "FLUR-RECHNUNG", en: "CORRIDOR SUM", ar: "حساب الممر", ru: "ЗАДАЧА В КОРИДОРЕ" },
    place: { de: "Schulflur", en: "School corridor", ar: "ممر المدرسة", ru: "Школьный коридор" },
    image: "images/station6.jpg",
    letter: "I",
    question: {
      de: "Zähle die roten Feuerlöscher auf dem Foto und addiere 6.",
      en: "Count the red fire extinguishers in the photo and add 6.",
      ar: "عُدّ طفايات الحريق الحمراء في الصورة ثم أضف ٦.",
      ru: "Посчитай красные огнетушители на фото и прибавь 6."
    },
    answers: { de: ["7", "SIEBEN"], en: ["7", "SEVEN"], ar: ["7", "٧", "سبعة"], ru: ["7", "СЕМЬ"] },
    hint: {
      de: "Auf dem Foto ist ein Feuerlöscher. Rechne 1 + 6.",
      en: "There is one fire extinguisher in the photo. Work out 1 + 6.",
      ar: "في الصورة طفاية حريق واحدة. احسب ١ + ٦.",
      ru: "На фото один огнетушитель. Вычисли 1 + 6."
    }
  },
  6: {
    title: { de: "SCHULHOF-CODE", en: "SCHOOLYARD CODE", ar: "رمز ساحة المدرسة", ru: "КОД ШКОЛЬНОГО ДВОРА" },
    place: { de: "Sportfläche draußen", en: "Outdoor sports court", ar: "الملعب الخارجي", ru: "Спортивная площадка во дворе" },
    image: "images/station7.jpg",
    letter: "O",
    question: {
      de: "Finde die Farbe der Sportfläche. Addiere 5 zur Buchstabenanzahl des Wortes ROT.",
      en: "Find the colour of the sports court. Add 5 to the number of letters in the German word ROT.",
      ar: "ما لون الملعب؟ أضف ٥ إلى عدد أحرف الكلمة الألمانية ROT.",
      ru: "Найди цвет площадки. Прибавь 5 к количеству букв в немецком слове ROT."
    },
    answers: { de: ["8", "ACHT"], en: ["8", "EIGHT"], ar: ["8", "٨", "ثمانية"], ru: ["8", "ВОСЕМЬ"] },
    hint: {
      de: "Der Boden ist rot. ROT hat 3 Buchstaben: 3 + 5.",
      en: "The court is red. ROT has 3 letters: 3 + 5.",
      ar: "الملعب أحمر. تتكوّن ROT من ٣ أحرف: ٣ + ٥.",
      ru: "Площадка красная. В слове ROT 3 буквы: 3 + 5."
    }
  },
  7: {
    title: { de: "PLAKAT-RECHNUNG", en: "POSTER SUM", ar: "حساب الملصق", ru: "ЗАДАЧА НА ПЛАКАТЕ" },
    place: { de: "Schulflur beim Podcast-Plakat", en: "School corridor by the podcast poster", ar: "ممر المدرسة بجانب ملصق البودكاست", ru: "Коридор у плаката подкаста" },
    image: "images/station5.jpg",
    letter: "N",
    question: {
      de: "Zähle die Buchstaben des Wortes PODCAST auf dem Plakat und ziehe 2 ab.",
      en: "Count the letters in the word PODCAST on the poster, then subtract 2.",
      ar: "عُدّ أحرف كلمة PODCAST على الملصق، ثم اطرح ٢.",
      ru: "Посчитай буквы в слове PODCAST на плакате и вычти 2."
    },
    answers: { de: ["5", "FÜNF"], en: ["5", "FIVE"], ar: ["5", "٥", "خمسة"], ru: ["5", "ПЯТЬ"] },
    hint: {
      de: "PODCAST hat 7 Buchstaben. Rechne 7 − 2.",
      en: "PODCAST has 7 letters. Work out 7 − 2.",
      ar: "تتكوّن PODCAST من ٧ أحرف. احسب ٧ − ٢.",
      ru: "В слове PODCAST 7 букв. Вычисли 7 − 2."
    }
  }
};

const translations = {
  de: {
    language: "Sprache", languageSelect: "Sprache auswählen", homeLink: "Mission Stadtschule – Startseite", backHome: "Zurück zur Mission Stadtschule Startseite", mainNav: "Hauptnavigation", navStations: "Stationen", navFinal: "Finale", stationCount: "7 STATIONEN",
    progressAria: "Fortschritt der sieben Stationen", resetProgress: "Fortschritt zurücksetzen", resetConfirm: "Möchtest du deinen Fortschritt wirklich zurücksetzen?", resetDone: "Fortschritt zurückgesetzt. Du kannst neu starten.",
    heroEyebrow: "DIE SCHULRALLYE", heroTitle: "Deine Schule.<br><span>Deine Mission.</span>",
    heroDescription: "Entdecke die Stadtschule aus einer neuen Perspektive. Finde die QR-Codes, löse sieben Aufgaben und sammle die Buchstaben für das geheime Lösungswort.",
    startMission: "MISSION STARTEN", seeStations: "Alle Stationen ansehen", heroNote: "Sieben Stationen · ein geheimes Lösungswort",
    progressTitle: "DEIN ABENTEUER", progressCaption: "Stationen geschafft", progressWaiting: "Deine Buchstaben warten auf dich.",
    progressEach: "Jede Station schenkt dir einen Buchstaben.", progressDone: "Geschafft! Jetzt kannst du das Finale öffnen.",
    rulesLabel: "So funktioniert die Rallye", rule1: "QR-Code finden", rule2: "Aufgabe lösen", rule3: "Buchstaben sammeln", rule4: "Finale knacken",
    overviewEyebrow: "DEIN WEG DURCH DIE SCHULE", overviewTitle: "Sieben Orte.<br><span>Sieben Geheimnisse.</span>",
    overviewDescription: "Scanne den QR-Code vor Ort oder wähle eine Station aus der Übersicht.",
    done: "✓ GESCHAFFT", discover: "ENTDECKEN →", station: "STATION", photoLabel: "ORIGINALFOTO AUS DER SCHULE",
    mission: "MISSION:", answerLabel: "Deine Antwort", answerPlaceholder: "DEINE ANTWORT",
    checkAnswer: "ANTWORT PRÜFEN", checkAgain: "NOCH EINMAL PRÜFEN", tip: "Tipp:", correct: "✓ RICHTIG! Dein Geheim-Buchstabe ist",
    nextStation: "WEITER ZUR NÄCHSTEN STATION", finalCode: "ZUM FINALEN CODE",
    incorrect: "✕ Noch nicht richtig. Schau dir das Foto und den Hinweis noch einmal genau an.",
    showHint: "Tipp anzeigen", hideHint: "Tipp verbergen",
    storageLoadError: "Dein Fortschritt konnte nicht geladen werden. Bitte prüfe die Speichereinstellungen deines Browsers.",
    storageSaveError: "Der Browser konnte deinen Fortschritt nicht speichern. Bitte aktiviere den lokalen Speicher.",
    stationMissing: "Diese Station gibt es nicht.", stationMissingText: "Prüfe den QR-Code oder gehe zurück zur Übersicht.",
    overview: "ZUR ÜBERSICHT", backOverview: "← Zurück zur Übersicht", progressSaved: "Dein Fortschritt wird auf diesem Gerät gespeichert.",
    finalMission: "FINAL MISSION", finalTitle: "Bereit fürs<br><span>Finale?</span>",
    finalDescription: "Setze deine sieben Buchstaben zusammen und gib das geheime Lösungswort ein.",
    lockedTitle: "Das Finale ist noch verschlossen.",
    lockedText: "Sammle erst alle sieben Buchstaben. Dein nächster offener Hinweis wartet schon.",
    nextOpen: "ZUR NÄCHSTEN STATION", solutionLabel: "Dein Lösungswort", solutionPlaceholder: "LÖSUNGSWORT",
    checkCode: "CODE PRÜFEN", accepted: "✓ CODE AKZEPTIERT! Die letzte Mission ist freigeschaltet.",
    wrongCode: "✕ Der Code stimmt noch nicht. Sammle alle sieben Buchstaben.",
    welcome: "Willkommen an der Stadtschule!", videoDescription: "Das hast du dir verdient. Schau dir zum Abschluss das Video an.",
    closingVideo: "DEIN ABSCHLUSSVIDEO", videoPrompt: "Füge hier euer YouTube- oder MP4-Video ein.",
    footerHome: "Eine Entdeckungsreise durch deine Schule.", footerFinal: "Mission Stadtschule · Finale",
    titleHome: "Mission Stadtschule – Die QR-Rallye", titleStation: "Station", titleNotFound: "Station nicht gefunden",
    titleFinal: "Mission Stadtschule – Finale", metaHome: "Entdecke die Stadtschule bei einer interaktiven QR-Rallye mit sieben spannenden Stationen.", metaStation: "Löse eine Station der QR-Rallye an der Stadtschule.", metaFinal: "Setze die gesammelten Buchstaben zusammen und knacke das Finale der Mission Stadtschule."
  },
  en: {
    language: "Language", languageSelect: "Choose language", homeLink: "Mission Stadtschule home", backHome: "Back to Mission Stadtschule home", mainNav: "Main navigation", navStations: "Stations", navFinal: "Final", stationCount: "7 STATIONS",
    progressAria: "Progress through the seven stations", resetProgress: "Reset progress", resetConfirm: "Are you sure you want to reset your progress?", resetDone: "Progress reset. You can start again.",
    heroEyebrow: "THE SCHOOL RALLY", heroTitle: "Your school.<br><span>Your mission.</span>",
    heroDescription: "Explore Stadtschule from a new perspective. Find the QR codes, solve seven puzzles and collect the letters to reveal the secret word.",
    startMission: "START MISSION", seeStations: "View all stations", heroNote: "Seven stations · one secret word",
    progressTitle: "YOUR ADVENTURE", progressCaption: "stations completed", progressWaiting: "Your letters are waiting for you.",
    progressEach: "Each station gives you one letter.", progressDone: "You did it! You can open the final mission now.",
    rulesLabel: "How the rally works", rule1: "Find a QR code", rule2: "Solve the puzzle", rule3: "Collect the letters", rule4: "Crack the final code",
    overviewEyebrow: "YOUR ROUTE THROUGH THE SCHOOL", overviewTitle: "Seven places.<br><span>Seven mysteries.</span>",
    overviewDescription: "Scan a QR code at the location or choose a station from the overview.",
    done: "✓ COMPLETED", discover: "EXPLORE →", station: "STATION", photoLabel: "ORIGINAL SCHOOL PHOTO",
    mission: "MISSION:", answerLabel: "Your answer", answerPlaceholder: "YOUR ANSWER",
    checkAnswer: "CHECK ANSWER", checkAgain: "CHECK AGAIN", tip: "Hint:", correct: "✓ CORRECT! Your secret letter is",
    nextStation: "NEXT STATION", finalCode: "GO TO FINAL CODE",
    incorrect: "✕ Not quite. Take another look at the photo and the hint.",
    showHint: "Show hint", hideHint: "Hide hint",
    storageLoadError: "Your progress could not be loaded. Check your browser storage settings.",
    storageSaveError: "Your browser could not save your progress. Please enable local storage.",
    stationMissing: "This station does not exist.", stationMissingText: "Check the QR code or return to the overview.",
    overview: "BACK TO STATIONS", backOverview: "← Back to overview", progressSaved: "Your progress is saved on this device.",
    finalMission: "FINAL MISSION", finalTitle: "Ready for the<br><span>finale?</span>",
    finalDescription: "Put your seven letters together and enter the secret word.",
    lockedTitle: "The final mission is still locked.",
    lockedText: "Collect all seven letters first. Your next unsolved clue is waiting.",
    nextOpen: "NEXT STATION", solutionLabel: "Your secret word", solutionPlaceholder: "SECRET WORD",
    checkCode: "CHECK CODE", accepted: "✓ CODE ACCEPTED! The final mission is unlocked.",
    wrongCode: "✕ That code is not right yet. Collect all seven letters.",
    welcome: "Welcome to Stadtschule!", videoDescription: "You earned it. Watch the video to finish the rally.",
    closingVideo: "YOUR FINAL VIDEO", videoPrompt: "Add your YouTube or MP4 video here.",
    footerHome: "An adventure through your school.", footerFinal: "Mission Stadtschule · Final",
    titleHome: "Mission Stadtschule – QR Rally", titleStation: "Station", titleNotFound: "Station not found",
    titleFinal: "Mission Stadtschule – Final", metaHome: "Explore Stadtschule in an interactive QR rally with seven exciting stations.", metaStation: "Solve a station in the Stadtschule QR rally.", metaFinal: "Put your collected letters together and crack the final mission."
  },
  ar: {
    language: "اللغة", languageSelect: "اختر اللغة", homeLink: "الصفحة الرئيسية لمهمة شتادتشوله", backHome: "العودة إلى الصفحة الرئيسية لمهمة شتادتشوله", mainNav: "القائمة الرئيسية", navStations: "المحطات", navFinal: "النهاية", stationCount: "٧ محطات",
    progressAria: "التقدم في المحطات السبع", resetProgress: "إعادة ضبط التقدم", resetConfirm: "هل تريد بالتأكيد إعادة ضبط تقدمك؟", resetDone: "تمت إعادة ضبط التقدم. يمكنك البدء من جديد.",
    heroEyebrow: "جولة المدرسة", heroTitle: "مدرستك.<br><span>مهمتك.</span>",
    heroDescription: "اكتشف مدرسة شتادتشوله من منظور جديد. اعثر على رموز QR، وحلّ سبعة ألغاز، واجمع الحروف لاكتشاف الكلمة السرية.",
    startMission: "ابدأ المهمة", seeStations: "عرض جميع المحطات", heroNote: "سبع محطات · كلمة سرية واحدة",
    progressTitle: "مغامرتك", progressCaption: "محطات مكتملة", progressWaiting: "حروفك بانتظارك.",
    progressEach: "كل محطة تمنحك حرفًا.", progressDone: "أحسنت! يمكنك الآن فتح المهمة النهائية.",
    rulesLabel: "كيف تسير الجولة", rule1: "اعثر على رمز QR", rule2: "حلّ اللغز", rule3: "اجمع الحروف", rule4: "اكتشف الرمز النهائي",
    overviewEyebrow: "طريقك عبر المدرسة", overviewTitle: "سبعة أماكن.<br><span>سبعة ألغاز.</span>",
    overviewDescription: "امسح رمز QR في المكان أو اختر محطة من القائمة.",
    done: "✓ مكتملة", discover: "اكتشف ←", station: "المحطة", photoLabel: "صورة أصلية من المدرسة",
    mission: "المهمة:", answerLabel: "إجابتك", answerPlaceholder: "اكتب إجابتك",
    checkAnswer: "تحقق من الإجابة", checkAgain: "تحقق مرة أخرى", tip: "تلميح:", correct: "✓ صحيح! حرفك السري هو",
    nextStation: "المحطة التالية", finalCode: "إلى الرمز النهائي",
    incorrect: "✕ ليست صحيحة بعد. ألقِ نظرة أخرى على الصورة والتلميح.",
    showHint: "إظهار التلميح", hideHint: "إخفاء التلميح",
    storageLoadError: "تعذّر تحميل تقدمك. تحقّق من إعدادات التخزين في المتصفح.",
    storageSaveError: "تعذّر على المتصفح حفظ تقدمك. يُرجى تفعيل التخزين المحلي.",
    stationMissing: "هذه المحطة غير موجودة.", stationMissingText: "تحقّق من رمز QR أو عُد إلى القائمة.",
    overview: "العودة إلى المحطات", backOverview: "← العودة إلى القائمة", progressSaved: "يُحفظ تقدمك على هذا الجهاز.",
    finalMission: "المهمة النهائية", finalTitle: "هل أنت مستعد<br><span>للنهاية؟</span>",
    finalDescription: "رتّب حروفك السبعة وأدخل الكلمة السرية.",
    lockedTitle: "المهمة النهائية ما زالت مغلقة.",
    lockedText: "اجمع الحروف السبعة أولًا. التلميح التالي بانتظارك.",
    nextOpen: "المحطة التالية", solutionLabel: "الكلمة السرية", solutionPlaceholder: "الكلمة السرية",
    checkCode: "تحقق من الرمز", accepted: "✓ الرمز صحيح! فُتحت المهمة النهائية.",
    wrongCode: "✕ الرمز غير صحيح بعد. اجمع الحروف السبعة.",
    welcome: "مرحبًا بك في مدرسة شتادتشوله!", videoDescription: "لقد استحققت ذلك. شاهد الفيديو لإنهاء الجولة.",
    closingVideo: "فيديو الختام", videoPrompt: "أضف فيديو YouTube أو MP4 هنا.",
    footerHome: "مغامرة لاكتشاف مدرستك.", footerFinal: "مهمة شتادتشوله · النهاية",
    titleHome: "مهمة شتادتشوله – جولة QR", titleStation: "المحطة", titleNotFound: "المحطة غير موجودة",
    titleFinal: "مهمة شتادتشوله – النهاية", metaHome: "اكتشف مدرسة شتادتشوله في جولة تفاعلية برموز QR تضم سبع محطات ممتعة.", metaStation: "حل إحدى محطات جولة رموز QR في مدرسة شتادتشوله.", metaFinal: "اجمع الحروف التي حصلت عليها واكتشف المهمة النهائية."
  },
  ru: {
    language: "Язык", languageSelect: "Выбрать язык", homeLink: "Главная страница миссии Stadtschule", backHome: "Вернуться на главную страницу миссии Stadtschule", mainNav: "Главная навигация", navStations: "Станции", navFinal: "Финал", stationCount: "7 СТАНЦИЙ",
    progressAria: "Прогресс прохождения семи станций", resetProgress: "Сбросить прогресс", resetConfirm: "Ты действительно хочешь сбросить прогресс?", resetDone: "Прогресс сброшен. Можно начать заново.",
    heroEyebrow: "ШКОЛЬНЫЙ КВЕСТ", heroTitle: "Твоя школа.<br><span>Твоя миссия.</span>",
    heroDescription: "Открой для себя Stadtschule с новой стороны. Найди QR-коды, реши семь загадок и собери буквы секретного слова.",
    startMission: "НАЧАТЬ МИССИЮ", seeStations: "Все станции", heroNote: "Семь станций · одно секретное слово",
    progressTitle: "ТВОЁ ПРИКЛЮЧЕНИЕ", progressCaption: "станций пройдено", progressWaiting: "Твои буквы ждут тебя.",
    progressEach: "Каждая станция даёт одну букву.", progressDone: "Готово! Теперь можно открыть финал.",
    rulesLabel: "Как проходит квест", rule1: "Найди QR-код", rule2: "Реши загадку", rule3: "Собери буквы", rule4: "Разгадай финальный код",
    overviewEyebrow: "ТВОЙ МАРШРУТ ПО ШКОЛЕ", overviewTitle: "Семь мест.<br><span>Семь загадок.</span>",
    overviewDescription: "Отсканируй QR-код на месте или выбери станцию из списка.",
    done: "✓ ПРОЙДЕНО", discover: "СМОТРЕТЬ →", station: "СТАНЦИЯ", photoLabel: "НАСТОЯЩЕЕ ФОТО ИЗ ШКОЛЫ",
    mission: "ЗАДАНИЕ:", answerLabel: "Твой ответ", answerPlaceholder: "ТВОЙ ОТВЕТ",
    checkAnswer: "ПРОВЕРИТЬ ОТВЕТ", checkAgain: "ПРОВЕРИТЬ ЕЩЁ РАЗ", tip: "Подсказка:", correct: "✓ ВЕРНО! Твоя секретная буква:",
    nextStation: "СЛЕДУЮЩАЯ СТАНЦИЯ", finalCode: "К ФИНАЛЬНОМУ КОДУ",
    incorrect: "✕ Пока неверно. Внимательно посмотри на фото и подсказку.",
    showHint: "Показать подсказку", hideHint: "Скрыть подсказку",
    storageLoadError: "Не удалось загрузить прогресс. Проверь настройки хранилища браузера.",
    storageSaveError: "Браузеру не удалось сохранить прогресс. Включи локальное хранилище.",
    stationMissing: "Такой станции нет.", stationMissingText: "Проверь QR-код или вернись к списку.",
    overview: "К СПИСКУ СТАНЦИЙ", backOverview: "← Назад к списку", progressSaved: "Прогресс сохранён на этом устройстве.",
    finalMission: "ФИНАЛЬНАЯ МИССИЯ", finalTitle: "Готов к<br><span>финалу?</span>",
    finalDescription: "Составь секретное слово из семи букв и введи его.",
    lockedTitle: "Финальная миссия пока закрыта.",
    lockedText: "Сначала собери все семь букв. Следующая нерешённая загадка уже ждёт.",
    nextOpen: "СЛЕДУЮЩАЯ СТАНЦИЯ", solutionLabel: "Секретное слово", solutionPlaceholder: "СЕКРЕТНОЕ СЛОВО",
    checkCode: "ПРОВЕРИТЬ КОД", accepted: "✓ КОД ПРИНЯТ! Финальная миссия открыта.",
    wrongCode: "✕ Код пока неверный. Собери все семь букв.",
    welcome: "Добро пожаловать в Stadtschule!", videoDescription: "Ты заслужил это. Посмотри видео в конце квеста.",
    closingVideo: "ФИНАЛЬНОЕ ВИДЕО", videoPrompt: "Добавь сюда видео YouTube или MP4.",
    footerHome: "Приключение по твоей школе.", footerFinal: "Миссия Stadtschule · Финал",
    titleHome: "Миссия Stadtschule – QR-квест", titleStation: "Станция", titleNotFound: "Станция не найдена",
    titleFinal: "Миссия Stadtschule – Финал", metaHome: "Исследуй Stadtschule в интерактивном QR-квесте с семью интересными станциями.", metaStation: "Реши одну из станций QR-квеста Stadtschule.", metaFinal: "Составь финальное слово из собранных букв и разгадай последнюю загадку."
  }
};

let currentLanguage = "de";

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  try {
    localStorage.setItem("missionLanguage", language);
  } catch (error) {
    console.error("Mission Stadtschule: Sprache konnte nicht gespeichert werden.", error);
  }
  document.querySelectorAll("#languageSelect").forEach((select) => { select.value = language; });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = translations[language][element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = translations[language][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  const finalMessage = document.getElementById("finalMessage");
  if (finalMessage?.firstElementChild?.classList.contains("success")) {
    finalMessage.firstElementChild.textContent = translations[language].accepted;
  } else if (finalMessage?.firstElementChild?.classList.contains("error")) {
    finalMessage.firstElementChild.textContent = translations[language].wrongCode;
  }
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    const key = document.getElementById("finalForm") ? "metaFinal" : document.getElementById("stationCard") ? "metaStation" : "metaHome";
    description.content = translations[language][key];
  }
  renderProgress();
  renderStation();
  renderFinal();
  if (document.getElementById("finalForm")) document.title = translations[language].titleFinal;
  if (document.getElementById("stationGrid")) document.title = translations[language].titleHome;
}

function initLanguage() {
  try {
    const savedLanguage = localStorage.getItem("missionLanguage");
    if (translations[savedLanguage]) currentLanguage = savedLanguage;
  } catch (error) {
    console.error("Mission Stadtschule: Sprache konnte nicht geladen werden.", error);
  }
  document.querySelectorAll("#languageSelect").forEach((select) => {
    select.value = currentLanguage;
    select.addEventListener("change", () => setLanguage(select.value));
  });
  setLanguage(currentLanguage);
}

function stationText(station, key) {
  return station[key][currentLanguage] || station[key].de;
}

function normalize(s) {
  return String(s || "").trim().toUpperCase()
    .replaceAll("Ä","AE").replaceAll("Ö","OE").replaceAll("Ü","UE").replaceAll("ß","SS")
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
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
    storageMessage = translations[currentLanguage].storageLoadError;
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
    storageMessage = translations[currentLanguage].storageSaveError;
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
    return `<a class="letter ${done ? "done" : ""}" href="station.html?station=${n}" aria-label="${translations[currentLanguage].station} ${n}: ${done ? translations[currentLanguage].done : translations[currentLanguage].discover}">${done ? stations[n].letter : "·"}</a>`;
  }).join("");
  const count = document.getElementById("progressCount");
  if (count) count.textContent = String(solved.length);
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = `${solved.length / Object.keys(stations).length * 100}%`;
  const status = document.getElementById("progressStatus");
  if (status) {
    status.textContent = storageMessage || (solved.length === 7
      ? translations[currentLanguage].progressDone
      : translations[currentLanguage].progressEach);
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
    const place = stationText(station, "place");
    return `
      <a class="station-tile" data-station="${number}" href="station.html?station=${number}" aria-label="${translations[currentLanguage].station} ${number}: ${place}, ${done ? translations[currentLanguage].done : translations[currentLanguage].discover}">
        <img src="${station.image}" alt="${place}" loading="lazy">
        <div class="station-tile-content">
          <div class="station-tile-top">
            <span class="station-tile-number">${translations[currentLanguage].station} ${String(number).padStart(2, "0")}</span>
            <span class="station-tile-status ${done ? "done" : ""}">${done ? translations[currentLanguage].done : translations[currentLanguage].discover}</span>
          </div>
          <h3>${stationText(station, "title")}</h3>
          <p>${place}</p>
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
  const previousAnswer = document.getElementById("stationAnswer")?.value || "";
  const hintWasOpen = document.getElementById("hintToggle")?.getAttribute("aria-expanded") === "true";
  const n = stationFromUrl();
  const s = stations[n];
  const stationLabel = document.getElementById("stationNumber");
  if (stationLabel) stationLabel.textContent = s ? `${translations[currentLanguage].station} ${n}/7` : translations[currentLanguage].station;
  if (!s) {
    card.innerHTML = `<div class="station-error"><div class="eyebrow">${translations[currentLanguage].station}</div><h1>${translations[currentLanguage].stationMissing}</h1><p>${translations[currentLanguage].stationMissingText}</p><a class="btn" href="index.html#stationen">${translations[currentLanguage].overview} <span aria-hidden="true">→</span></a></div>`;
    document.title = translations[currentLanguage].titleNotFound;
    return;
  }
  const place = stationText(s, "place");
  const title = stationText(s, "title");
  document.title = `${translations[currentLanguage].station} ${n}: ${title} – Mission Stadtschule`;
  const solved = getSolved().includes(n);
  card.dataset.station = String(n);
  card.innerHTML = `
    <div class="station-image-wrap"><img src="${s.image}" alt="${place}"><span class="station-photo-label">${translations[currentLanguage].photoLabel}</span></div>
    <div class="station-content">
      <div class="eyebrow"><span class="eyebrow-mark" aria-hidden="true">⌖</span> ${place}</div>
      <h1>${translations[currentLanguage].station} ${n}<br><span>${title}</span></h1>
      <div class="mission-box"><b>${translations[currentLanguage].mission}</b><p>${stationText(s, "question")}</p></div>
      <form id="stationForm">
        <label class="field-label" for="stationAnswer">${translations[currentLanguage].answerLabel}</label>
        <input id="stationAnswer" class="answer" autocomplete="off" autocapitalize="characters" placeholder="${translations[currentLanguage].answerPlaceholder}" aria-describedby="stationMessage" required>
        <button class="btn" type="submit">${solved ? translations[currentLanguage].checkAgain : translations[currentLanguage].checkAnswer} <span aria-hidden="true">→</span></button>
      </form>
      <div id="stationMessage" aria-live="polite"></div>
      <div class="hint-panel">
        <button id="hintToggle" class="hint-toggle" type="button" aria-expanded="${hintWasOpen}" aria-controls="stationHint">${hintWasOpen ? translations[currentLanguage].hideHint : translations[currentLanguage].showHint} <span aria-hidden="true">${hintWasOpen ? "−" : "+"}</span></button>
        <div id="stationHint" class="hint" ${hintWasOpen ? "" : "hidden"}><strong>${translations[currentLanguage].tip}</strong> ${stationText(s, "hint")}</div>
      </div>
    </div>`;
  document.getElementById("stationAnswer").value = previousAnswer;
  bindAnswerFields();
}
function resetProgress() {
  if (!window.confirm(translations[currentLanguage].resetConfirm)) return;
  if (!saveSolved([])) {
    renderProgress();
    return;
  }
  renderProgress();
  const status = document.getElementById("progressStatus");
  if (status) status.textContent = translations[currentLanguage].resetDone;
  renderFinal();
}
function checkStation(n) {
  const s = stations[n];
  const input = document.getElementById("stationAnswer");
  const value = normalize(input?.value);
  const msg = document.getElementById("stationMessage");
  if (!s || !input || !msg) return;
  if (s.answers[currentLanguage].map(normalize).includes(value)) {
    const solved = getSolved();
    if (!solved.includes(n)) solved.push(n);
    const saved = saveSolved(solved);
    if (saved) renderProgress();
    msg.innerHTML = `<div class="success">${translations[currentLanguage].correct} <strong>${s.letter}</strong>.${saved ? "" : `<br>${storageMessage}`}</div>
      <a class="btn secondary" href="${n < 7 ? `station.html?station=${n + 1}` : "final.html"}">${n < 7 ? translations[currentLanguage].nextStation : translations[currentLanguage].finalCode} <span aria-hidden="true">→</span></a>`;
  } else {
    msg.innerHTML = `<div class="error">${translations[currentLanguage].incorrect}</div>`;
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
    const heading = lockedMessage.querySelector("strong");
    const description = lockedMessage.querySelector("p");
    if (heading) heading.textContent = translations[currentLanguage].lockedTitle;
    if (description) description.textContent = translations[currentLanguage].lockedText;
    if (nextStationLink) nextStationLink.innerHTML = `${translations[currentLanguage].nextOpen} <span aria-hidden="true">→</span>`;
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
    msg.innerHTML = `<div class="success">${translations[currentLanguage].accepted}</div>`;
    document.getElementById("videoBox").classList.remove("hidden");
  } else {
    msg.innerHTML = `<div class="error">${translations[currentLanguage].wrongCode}</div>`;
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
document.addEventListener("click", (event) => {
  const hintToggle = event.target.closest("#hintToggle");
  if (hintToggle) {
    const hint = document.getElementById("stationHint");
    const isOpen = hintToggle.getAttribute("aria-expanded") === "true";
    hintToggle.setAttribute("aria-expanded", String(!isOpen));
    hintToggle.innerHTML = `${isOpen ? translations[currentLanguage].showHint : translations[currentLanguage].hideHint} <span aria-hidden="true">${isOpen ? "+" : "−"}</span>`;
    hint.hidden = isOpen;
    return;
  }
  if (event.target.closest("#resetProgress")) resetProgress();
});
initLanguage();
bindAnswerFields();
