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
    image: "images/station5.jpg",
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
    image: "images/station6.jpg",
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
    image: "images/station7.jpg",
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
  es: {
    language: "Idioma", languageSelect: "Elegir idioma", homeLink: "Inicio de Mission Stadtschule", backHome: "Volver al inicio de Mission Stadtschule", mainNav: "Navegación principal", navStations: "Estaciones", navFinal: "Final", stationCount: "7 ESTACIONES",
    progressAria: "Progreso de las siete estaciones", resetProgress: "Reiniciar progreso", resetConfirm: "¿Seguro que quieres reiniciar el progreso?", resetDone: "Progreso reiniciado. Puedes empezar de nuevo.",
    heroEyebrow: "EL RETO ESCOLAR", heroTitle: "Tu escuela.<br><span>Tu misión.</span>", heroDescription: "Descubre Stadtschule desde otra perspectiva. Encuentra los códigos QR, resuelve siete acertijos y reúne las letras de la palabra secreta.",
    startMission: "EMPEZAR MISIÓN", seeStations: "Ver todas las estaciones", heroNote: "Siete estaciones · una palabra secreta",
    progressTitle: "TU AVENTURA", progressCaption: "estaciones completadas", progressWaiting: "Tus letras te están esperando.", progressEach: "Cada estación te da una letra.", progressDone: "¡Lo has conseguido! Ya puedes abrir el final.",
    rulesLabel: "Cómo funciona el reto", rule1: "Encuentra un código QR", rule2: "Resuelve el acertijo", rule3: "Reúne las letras", rule4: "Descifra el código final",
    overviewEyebrow: "TU RECORRIDO POR LA ESCUELA", overviewTitle: "Siete lugares.<br><span>Siete misterios.</span>", overviewDescription: "Escanea el código QR en el lugar o elige una estación de la lista.",
    done: "✓ COMPLETADA", discover: "DESCUBRIR →", station: "ESTACIÓN", photoLabel: "FOTO ORIGINAL DE LA ESCUELA",
    mission: "MISIÓN:", answerLabel: "Tu respuesta", answerPlaceholder: "TU RESPUESTA", checkAnswer: "COMPROBAR", checkAgain: "COMPROBAR OTRA VEZ", tip: "Pista:", correct: "✓ ¡CORRECTO! Tu letra secreta es",
    nextStation: "SIGUIENTE ESTACIÓN", previousStation: "ESTACIÓN ANTERIOR", stationOverview: "TODAS LAS ESTACIONES", finalCode: "IR AL CÓDIGO FINAL",
    incorrect: "✕ Aún no. Mira otra vez la foto y la pista.", showHint: "Mostrar pista", hideHint: "Ocultar pista",
    storageLoadError: "No se pudo cargar tu progreso. Revisa el almacenamiento del navegador.", storageSaveError: "No se pudo guardar tu progreso. Activa el almacenamiento local.",
    stationMissing: "Esta estación no existe.", stationMissingText: "Comprueba el código QR o vuelve a la lista.", overview: "VER ESTACIONES", backOverview: "← Volver a la lista", progressSaved: "Tu progreso se guarda en este dispositivo.",
    finalMission: "MISIÓN FINAL", finalTitle: "¿Listo para el<br><span>final?</span>", finalDescription: "Une tus siete letras e introduce la palabra secreta.",
    lockedTitle: "La misión final todavía está bloqueada.", lockedText: "Primero reúne las siete letras. Tu siguiente pista te espera.", nextOpen: "SIGUIENTE ESTACIÓN",
    solutionLabel: "Palabra secreta", solutionPlaceholder: "PALABRA SECRETA", checkCode: "COMPROBAR CÓDIGO", accepted: "✓ ¡CÓDIGO ACEPTADO! La misión final está desbloqueada.",
    wrongCode: "✕ El código aún no es correcto. Reúne las siete letras.",
    storyKicker: "LA HISTORIA DE NUESTRA ESCUELA", storyTitle: "Un colegio.<br><span>Muchas historias.</span>",
    easterEggButton: "Descubrir la estrella secreta", developerCredit: "Desarrollado por Konstantin Korneev", colorSequenceLabel: "Secuencia secreta de colores",
    colorRed: "Rojo", colorBlue: "Azul", colorGreen: "Verde", schoolSecret: "¡Has encontrado la combinación secreta de colores!",
    footerHome: "Una aventura por tu escuela.", footerFinal: "Mission Stadtschule · Final",
    titleHome: "Mission Stadtschule – Reto QR", titleStation: "Estación", titleNotFound: "Estación no encontrada", titleFinal: "Mission Stadtschule – Final",
    metaHome: "Descubre Stadtschule con un reto QR interactivo de siete estaciones.", metaStation: "Resuelve una estación del reto QR de Stadtschule.", metaFinal: "Reúne las letras y descifra la misión final."
  },
  fr: {
    language: "Langue", languageSelect: "Choisir la langue", homeLink: "Accueil Mission Stadtschule", backHome: "Retour à l’accueil Mission Stadtschule", mainNav: "Navigation principale", navStations: "Étapes", navFinal: "Finale", stationCount: "7 ÉTAPES",
    progressAria: "Progression dans les sept étapes", resetProgress: "Réinitialiser la progression", resetConfirm: "Veux-tu vraiment réinitialiser ta progression ?", resetDone: "Progression réinitialisée. Tu peux recommencer.",
    heroEyebrow: "LE DÉFI DE L’ÉCOLE", heroTitle: "Ton école.<br><span>Ta mission.</span>", heroDescription: "Découvre Stadtschule autrement. Trouve les codes QR, résous sept énigmes et rassemble les lettres du mot secret.",
    startMission: "COMMENCER", seeStations: "Voir toutes les étapes", heroNote: "Sept étapes · un mot secret",
    progressTitle: "TON AVENTURE", progressCaption: "étapes terminées", progressWaiting: "Tes lettres t’attendent.", progressEach: "Chaque étape te donne une lettre.", progressDone: "Bravo ! Tu peux maintenant ouvrir le final.",
    rulesLabel: "Comment fonctionne le défi", rule1: "Trouve un code QR", rule2: "Résous l’énigme", rule3: "Rassemble les lettres", rule4: "Déchiffre le code final",
    overviewEyebrow: "TON PARCOURS DANS L’ÉCOLE", overviewTitle: "Sept lieux.<br><span>Sept mystères.</span>", overviewDescription: "Scanne le code QR sur place ou choisis une étape dans la liste.",
    done: "✓ TERMINÉE", discover: "DÉCOUVRIR →", station: "ÉTAPE", photoLabel: "PHOTO ORIGINALE DE L’ÉCOLE",
    mission: "MISSION :", answerLabel: "Ta réponse", answerPlaceholder: "TA RÉPONSE", checkAnswer: "VÉRIFIER", checkAgain: "VÉRIFIER ENCORE", tip: "Indice :", correct: "✓ CORRECT ! Ta lettre secrète est",
    nextStation: "ÉTAPE SUIVANTE", previousStation: "ÉTAPE PRÉCÉDENTE", stationOverview: "TOUTES LES ÉTAPES", finalCode: "PASSER AU CODE FINAL",
    incorrect: "✕ Pas encore. Regarde attentivement la photo et l’indice.", showHint: "Afficher l’indice", hideHint: "Masquer l’indice",
    storageLoadError: "Impossible de charger ta progression. Vérifie le stockage de ton navigateur.", storageSaveError: "Impossible d’enregistrer ta progression. Active le stockage local.",
    stationMissing: "Cette étape n’existe pas.", stationMissingText: "Vérifie le code QR ou retourne à la liste.", overview: "VOIR LES ÉTAPES", backOverview: "← Retour à la liste", progressSaved: "Ta progression est enregistrée sur cet appareil.",
    finalMission: "MISSION FINALE", finalTitle: "Prêt pour le<br><span>final ?</span>", finalDescription: "Assemble tes sept lettres et saisis le mot secret.",
    lockedTitle: "La mission finale est encore verrouillée.", lockedText: "Rassemble d’abord les sept lettres. Le prochain indice t’attend.", nextOpen: "ÉTAPE SUIVANTE",
    solutionLabel: "Mot secret", solutionPlaceholder: "MOT SECRET", checkCode: "VÉRIFIER LE CODE", accepted: "✓ CODE ACCEPTÉ ! La mission finale est débloquée.",
    wrongCode: "✕ Ce n’est pas encore le bon code. Rassemble les sept lettres.",
    storyKicker: "L’HISTOIRE DE NOTRE ÉCOLE", storyTitle: "Une école.<br><span>Mille histoires.</span>",
    easterEggButton: "Découvrir l’étoile secrète", developerCredit: "Développé par Konstantin Korneev", colorSequenceLabel: "Séquence secrète de couleurs",
    colorRed: "Rouge", colorBlue: "Bleu", colorGreen: "Vert", schoolSecret: "Tu as trouvé la combinaison secrète de couleurs !",
    footerHome: "Une aventure à travers ton école.", footerFinal: "Mission Stadtschule · Final",
    titleHome: "Mission Stadtschule – Défi QR", titleStation: "Étape", titleNotFound: "Étape introuvable", titleFinal: "Mission Stadtschule – Final",
    metaHome: "Découvre Stadtschule avec un défi QR interactif en sept étapes.", metaStation: "Résous une étape du défi QR de Stadtschule.", metaFinal: "Rassemble les lettres et déchiffre la mission finale."
  },
  tr: {
    language: "Dil", languageSelect: "Dil seç", homeLink: "Mission Stadtschule ana sayfa", backHome: "Mission Stadtschule ana sayfasına dön", mainNav: "Ana menü", navStations: "İstasyonlar", navFinal: "Final", stationCount: "7 İSTASYON",
    progressAria: "Yedi istasyondaki ilerleme", resetProgress: "İlerlemeyi sıfırla", resetConfirm: "İlerlemeni sıfırlamak istediğine emin misin?", resetDone: "İlerleme sıfırlandı. Yeniden başlayabilirsin.",
    heroEyebrow: "OKUL MACERASI", heroTitle: "Okulun.<br><span>Görevin.</span>", heroDescription: "Stadtschule’yi yeni bir gözle keşfet. QR kodlarını bul, yedi bulmacayı çöz ve gizli kelimenin harflerini topla.",
    startMission: "GÖREVE BAŞLA", seeStations: "Tüm istasyonları gör", heroNote: "Yedi istasyon · bir gizli kelime",
    progressTitle: "MACERAN", progressCaption: "tamamlanan istasyon", progressWaiting: "Harflerin seni bekliyor.", progressEach: "Her istasyon sana bir harf verir.", progressDone: "Başardın! Artık finali açabilirsin.",
    rulesLabel: "Oyun nasıl oynanır", rule1: "QR kodunu bul", rule2: "Bulmacayı çöz", rule3: "Harfleri topla", rule4: "Son kodu çöz",
    overviewEyebrow: "OKULDAKİ ROTAN", overviewTitle: "Yedi yer.<br><span>Yedi sır.</span>", overviewDescription: "Bulunduğun yerdeki QR kodunu tara veya listeden bir istasyon seç.",
    done: "✓ TAMAMLANDI", discover: "KEŞFET →", station: "İSTASYON", photoLabel: "OKULDAN GERÇEK FOTOĞRAF",
    mission: "GÖREV:", answerLabel: "Cevabın", answerPlaceholder: "CEVABIN", checkAnswer: "CEVABI KONTROL ET", checkAgain: "TEKRAR KONTROL ET", tip: "İpucu:", correct: "✓ DOĞRU! Gizli harfin:",
    nextStation: "SONRAKİ İSTASYON", previousStation: "ÖNCEKİ İSTASYON", stationOverview: "TÜM İSTASYONLAR", finalCode: "SON KODA GİT",
    incorrect: "✕ Henüz doğru değil. Fotoğrafa ve ipucuna tekrar bak.", showHint: "İpucunu göster", hideHint: "İpucunu gizle",
    storageLoadError: "İlerlemen yüklenemedi. Tarayıcı depolama ayarlarını kontrol et.", storageSaveError: "İlerlemen kaydedilemedi. Lütfen yerel depolamayı etkinleştir.",
    stationMissing: "Bu istasyon mevcut değil.", stationMissingText: "QR kodunu kontrol et veya istasyon listesine dön.", overview: "İSTASYONLARA DÖN", backOverview: "← Listeye dön", progressSaved: "İlerlemen bu cihazda kaydedilir.",
    finalMission: "SON GÖREV", finalTitle: "Finale<br><span>hazır mısın?</span>", finalDescription: "Yedi harfi birleştir ve gizli kelimeyi gir.",
    lockedTitle: "Son görev henüz kilitli.", lockedText: "Önce yedi harfi topla. Sıradaki çözülmemiş ipucu seni bekliyor.", nextOpen: "SONRAKİ İSTASYON",
    solutionLabel: "Gizli kelime", solutionPlaceholder: "GİZLİ KELİME", checkCode: "KODU KONTROL ET", accepted: "✓ KOD KABUL EDİLDİ! Son görev açıldı.",
    wrongCode: "✕ Kod henüz doğru değil. Yedi harfin tamamını topla.",
    storyKicker: "OKULUMUZUN HİKÂYESİ", storyTitle: "Bir okul.<br><span>Birçok hikâye.</span>",
    easterEggButton: "Gizli yıldızı keşfet", developerCredit: "Konstantin Korneev tarafından geliştirildi", colorSequenceLabel: "Gizli renk sırası",
    colorRed: "Kırmızı", colorBlue: "Mavi", colorGreen: "Yeşil", schoolSecret: "Gizli renk dizisini buldun!",
    footerHome: "Okulunda bir keşif yolculuğu.", footerFinal: "Mission Stadtschule · Final",
    titleHome: "Mission Stadtschule – QR Macerası", titleStation: "İstasyon", titleNotFound: "İstasyon bulunamadı", titleFinal: "Mission Stadtschule – Final",
    metaHome: "Stadtschule’yi yedi istasyonlu etkileşimli QR macerasıyla keşfet.", metaStation: "Stadtschule QR macerasında bir istasyonu çöz.", metaFinal: "Harfleri birleştir ve son görevin şifresini çöz."
  }
};

const stationTranslations = {
  es: [
    { title: "CÓDIGO DEL CARTEL", place: "Sala de profesores", question: "El nombre grande en inglés de la puerta tiene dos palabras. Multiplica el número de palabras por 3.", hint: "Mira «STAFF ROOM» y calcula 2 × 3.", answers: ["6", "SEIS"] },
    { title: "ACERTIJO DEL CARTEL", place: "Secretaría", question: "Cuenta las letras de la palabra grande del cartel y réstale 4.", hint: "«Sekretariat» tiene 11 letras. Calcula 11 − 4.", answers: ["7", "SIETE"] },
    { title: "CÓDIGO DEL INDICADOR", place: "Señal hacia el salón de actos y el comedor", question: "Suma las letras de los dos lugares que aparecen en la señal. ¿Cuál es el resultado?", hint: "AULA tiene 4 letras y MENSA tiene 5.", answers: ["9", "NUEVE"] },
    { title: "CÓDIGO DEL NÚMERO DE SALA", place: "Puerta de la sala de lavado de vajilla", question: "En la puerta pone N.E35. Suma las dos cifras del número de la sala.", hint: "Las cifras son 3 y 5.", answers: ["8", "OCHO"] },
    { title: "SUMA DEL PASILLO", place: "Pasillo de la escuela", question: "Cuenta los extintores rojos de la foto y suma 6.", hint: "En la foto hay un extintor. Calcula 1 + 6.", answers: ["7", "SIETE"] },
    { title: "CÓDIGO DEL PATIO", place: "Pista deportiva exterior", question: "Busca el color de la pista. Suma 5 al número de letras de la palabra alemana ROT.", hint: "La pista es roja. ROT tiene 3 letras: 3 + 5.", answers: ["8", "OCHO"] },
    { title: "SUMA DEL CARTEL", place: "Pasillo junto al cartel del pódcast", question: "Cuenta las letras de PODCAST en el cartel y réstale 2.", hint: "PODCAST tiene 7 letras. Calcula 7 − 2.", answers: ["5", "CINCO"] }
  ],
  fr: [
    { title: "CODE DE L’ENSEIGNE", place: "Salle des professeurs", question: "Le grand nom anglais sur la porte contient deux mots. Multiplie le nombre de mots par 3.", hint: "Regarde « STAFF ROOM » et calcule 2 × 3.", answers: ["6", "SIX"] },
    { title: "ÉNIGME DE L’ENSEIGNE", place: "Secrétariat", question: "Compte les lettres du grand mot sur l’enseigne, puis soustrais 4.", hint: "« Sekretariat » contient 11 lettres. Calcule 11 − 4.", answers: ["7", "SEPT"] },
    { title: "CODE DU PANNEAU", place: "Panneau indiquant l’aula et la cantine", question: "Additionne le nombre de lettres des deux lieux indiqués. Quel est le résultat ?", hint: "AULA a 4 lettres et MENSA en a 5.", answers: ["9", "NEUF"] },
    { title: "CODE DE LA SALLE", place: "Porte de la plonge", question: "La porte indique N.E35. Additionne les deux chiffres du numéro de salle.", hint: "Les chiffres sont 3 et 5.", answers: ["8", "HUIT"] },
    { title: "CALCUL DU COULOIR", place: "Couloir de l’école", question: "Compte les extincteurs rouges sur la photo et ajoute 6.", hint: "Il y a un extincteur sur la photo. Calcule 1 + 6.", answers: ["7", "SEPT"] },
    { title: "CODE DE LA COUR", place: "Terrain de sport extérieur", question: "Trouve la couleur du terrain. Ajoute 5 au nombre de lettres du mot allemand ROT.", hint: "Le terrain est rouge. ROT a 3 lettres : 3 + 5.", answers: ["8", "HUIT"] },
    { title: "CALCUL DE L’AFFICHE", place: "Couloir près de l’affiche du podcast", question: "Compte les lettres de PODCAST sur l’affiche, puis soustrais 2.", hint: "PODCAST contient 7 lettres. Calcule 7 − 2.", answers: ["5", "CINQ"] }
  ],
  tr: [
    { title: "KAPI TABELASI KODU", place: "Öğretmenler odası", question: "Kapıdaki büyük İngilizce oda adında iki kelime var. Kelime sayısını 3 ile çarp.", hint: "«STAFF ROOM» yazısına bak ve 2 × 3 işlemini yap.", answers: ["6", "ALTI"] },
    { title: "TABELA BULMACASI", place: "Sekreterlik", question: "Tabeladaki büyük kelimenin harflerini say ve 4 çıkar.", hint: "«Sekretariat» 11 harflidir. 11 − 4 işlemini yap.", answers: ["7", "YEDİ"] },
    { title: "YÖN TABELASI KODU", place: "Konferans salonu ve yemekhane yön tabelası", question: "Yön tabelasındaki iki yer adının harf sayılarını topla. Sonuç kaç?", hint: "AULA 4, MENSA 5 harflidir.", answers: ["9", "DOKUZ"] },
    { title: "ODA NUMARASI KODU", place: "Bulaşık odasının kapısı", question: "Kapı tabelasında N.E35 yazıyor. Oda numarasındaki iki rakamı topla.", hint: "Rakamlar 3 ve 5.", answers: ["8", "SEKİZ"] },
    { title: "KORİDOR İŞLEMİ", place: "Okul koridoru", question: "Fotoğraftaki kırmızı yangın söndürücüleri say ve 6 ekle.", hint: "Fotoğrafta bir yangın söndürücü var. 1 + 6 işlemini yap.", answers: ["7", "YEDİ"] },
    { title: "OKUL BAHÇESİ KODU", place: "Açık hava spor sahası", question: "Sahanın rengini bul. Almanca ROT kelimesinin harf sayısına 5 ekle.", hint: "Saha kırmızı. ROT 3 harflidir: 3 + 5.", answers: ["8", "SEKİZ"] },
    { title: "AFİŞ İŞLEMİ", place: "Podcast afişinin yanındaki koridor", question: "Afişteki PODCAST kelimesinin harflerini say ve 2 çıkar.", hint: "PODCAST 7 harflidir. 7 − 2 işlemini yap.", answers: ["5", "BEŞ"] }
  ]
};

for (const [language, translatedStations] of Object.entries(stationTranslations)) {
  translatedStations.forEach((translatedStation, index) => {
    for (const [key, value] of Object.entries(translatedStation)) {
      stations[index + 1][key][language] = value;
    }
  });
}

Object.assign(translations, {
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
    finalMission: "FINALE MISSION", finalTitle: "Bereit fürs<br><span>Finale?</span>",
    finalDescription: "Setze deine sieben Buchstaben zusammen und gib das geheime Lösungswort ein.",
    lockedTitle: "Das Finale ist noch verschlossen.",
    lockedText: "Sammle erst alle sieben Buchstaben. Dein nächster offener Hinweis wartet schon.",
    nextOpen: "ZUR NÄCHSTEN STATION", solutionLabel: "Dein Lösungswort", solutionPlaceholder: "LÖSUNGSWORT",
    checkCode: "CODE PRÜFEN", accepted: "✓ CODE AKZEPTIERT! Die letzte Mission ist freigeschaltet.",
    wrongCode: "✕ Der Code stimmt noch nicht. Sammle alle sieben Buchstaben.",
    storyKicker: "DIE GESCHICHTE UNSERER SCHULE", storyTitle: "Ein Ort.<br><span>Viele Geschichten.</span>",
    easterEggButton: "Den geheimen Stern entdecken", developerCredit: "Entwickelt von Konstantin Korneev", colorSequenceLabel: "Geheime Farbenfolge",
    colorRed: "Rot", colorBlue: "Blau", colorGreen: "Grün", schoolSecret: "Geheime Farbkombination gefunden!",
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
    storyKicker: "THE STORY OF OUR SCHOOL", storyTitle: "One school.<br><span>Many stories.</span>",
    easterEggButton: "Find the hidden star", developerCredit: "Developed by Konstantin Korneev", colorSequenceLabel: "Secret color sequence",
    colorRed: "Red", colorBlue: "Blue", colorGreen: "Green", schoolSecret: "Secret color sequence found!",
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
    storyKicker: "قصة مدرستنا", storyTitle: "مدرسة واحدة.<br><span>قصص كثيرة.</span>",
    easterEggButton: "اكتشف النجمة المخفية", developerCredit: "تطوير كونستانتين كورنييف", colorSequenceLabel: "تسلسل الألوان السري",
    colorRed: "أحمر", colorBlue: "أزرق", colorGreen: "أخضر", schoolSecret: "لقد وجدت تسلسل الألوان السري!",
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
    storyKicker: "ИСТОРИЯ НАШЕЙ ШКОЛЫ", storyTitle: "Одна школа.<br><span>Много историй.</span>",
    easterEggButton: "Найти спрятанную звезду", developerCredit: "Разработано Константином Корнеевым", colorSequenceLabel: "Секретная последовательность цветов",
    colorRed: "Красный", colorBlue: "Синий", colorGreen: "Зелёный", schoolSecret: "Секретная цветовая комбинация найдена!",
    footerHome: "Приключение по твоей школе.", footerFinal: "Миссия Stadtschule · Финал",
    titleHome: "Миссия Stadtschule – QR-квест", titleStation: "Станция", titleNotFound: "Станция не найдена",
    titleFinal: "Миссия Stadtschule – Финал", metaHome: "Исследуй Stadtschule в интерактивном QR-квесте с семью интересными станциями.", metaStation: "Реши одну из станций QR-квеста Stadtschule.", metaFinal: "Составь финальное слово из собранных букв и разгадай последнюю загадку."
  }
});

Object.assign(translations.de, { previousStation: "VORHERIGE STATION", stationOverview: "ALLE STATIONEN" });
Object.assign(translations.en, { previousStation: "PREVIOUS STATION", stationOverview: "ALL STATIONS" });
Object.assign(translations.ar, { previousStation: "المحطة السابقة", stationOverview: "جميع المحطات" });
Object.assign(translations.ru, { previousStation: "ПРЕДЫДУЩАЯ СТАНЦИЯ", stationOverview: "ВСЕ СТАНЦИИ" });

Object.assign(translations.de, { factMonth: "💡 Wusstest du schon? An dieser QR-Rallye wurde einen Monat lang gearbeitet!", factClass: "🏫 Wusstest du schon? An unserer Schule gibt es seit Kurzem die Klasse 5e!", creditsTitle: "Das Team hinter der Rallye", sliderToggle: "Neon-Regler öffnen", sliderLabel: "Neon-Leuchten", sliderSecret: "✨ Neon-Level eingestellt!", colorSecret: "🌈 Geheime Neon-Farbenfolge gefunden!", starSecret: "⭐ Sternen-Geheimnis entdeckt!" });
Object.assign(translations.en, { factMonth: "💡 Did you know? This QR rally took a whole month to create!", factClass: "🏫 Did you know? Our school recently welcomed class 5e!", creditsTitle: "The team behind the rally", sliderToggle: "Open neon slider", sliderLabel: "Neon glow", sliderSecret: "✨ Neon level set!", colorSecret: "🌈 Secret neon colour sequence found!", starSecret: "⭐ Star secret discovered!" });
Object.assign(translations.ar, { factMonth: "💡 هل تعلم؟ استغرق إعداد جولة QR هذه شهرًا كاملًا!", factClass: "🏫 هل تعلم؟ انضم الصف 5e إلى مدرستنا مؤخرًا!", creditsTitle: "فريق إعداد الجولة", sliderToggle: "افتح شريط ضبط النيون", sliderLabel: "سطوع النيون", sliderSecret: "✨ تم ضبط مستوى النيون!", colorSecret: "🌈 اكتشفت تسلسل ألوان النيون السري!", starSecret: "⭐ اكتشفت سر النجمة!" });
Object.assign(translations.ru, { factMonth: "💡 Знаешь ли ты? На создание этого QR-квеста ушёл целый месяц!", factClass: "🏫 Знаешь ли ты? Недавно в нашей школе появился класс 5e!", creditsTitle: "Команда создателей квеста", sliderToggle: "Открыть неоновый ползунок", sliderLabel: "Яркость неона", sliderSecret: "✨ Уровень неона настроен!", colorSecret: "🌈 Секретная последовательность неоновых цветов найдена!", starSecret: "⭐ Секрет звезды раскрыт!" });
Object.assign(translations.es, { factMonth: "💡 ¿Sabías que…? ¡Esta ruta QR se creó durante todo un mes!", factClass: "🏫 ¿Sabías que…? ¡Hace poco llegó a nuestra escuela la clase 5e!", creditsTitle: "El equipo detrás de la ruta", sliderToggle: "Abrir el control de neón", sliderLabel: "Brillo de neón", sliderSecret: "✨ ¡Nivel de neón ajustado!", colorSecret: "🌈 ¡Has encontrado la secuencia de neón!", starSecret: "⭐ ¡Secreto de la estrella descubierto!" });
Object.assign(translations.fr, { factMonth: "💡 Le savais-tu ? Cette aventure QR a été créée en un mois !", factClass: "🏫 Le savais-tu ? La classe 5e a récemment rejoint notre école !", creditsTitle: "L’équipe derrière le parcours", sliderToggle: "Ouvrir le réglage néon", sliderLabel: "Lueur néon", sliderSecret: "✨ Intensité néon réglée !", colorSecret: "🌈 Séquence de couleurs néon découverte !", starSecret: "⭐ Secret de l’étoile découvert !" });
Object.assign(translations.tr, { factMonth: "💡 Biliyor muydun? Bu QR macerası bir ay boyunca hazırlandı!", factClass: "🏫 Biliyor muydun? Okulumuzda kısa süre önce 5e sınıfı açıldı!", creditsTitle: "Rallinin arkasındaki ekip", sliderToggle: "Neon ayarını aç", sliderLabel: "Neon parlaklığı", sliderSecret: "✨ Neon seviyesi ayarlandı!", colorSecret: "🌈 Gizli neon renk sırası bulundu!", starSecret: "⭐ Yıldız sırrı keşfedildi!" });

Object.assign(translations.de, { settingsTitle: "ANSICHT & TON", settingsOpen: "Einstellungen öffnen", brightness: "Bildschirmhelligkeit", soundEffects: "Klicksounds", storyThanks: "Danke, dass du unsere Rallye gespielt hast. Schön, dass du dabei warst! 💙" });
Object.assign(translations.en, { settingsTitle: "DISPLAY & SOUND", settingsOpen: "Open settings", brightness: "Screen brightness", soundEffects: "Click sounds", storyThanks: "Thanks for playing our rally! We are glad you joined us! 💙" });
Object.assign(translations.ar, { settingsTitle: "العرض والصوت", settingsOpen: "فتح الإعدادات", brightness: "سطوع الشاشة", soundEffects: "أصوات النقر", storyThanks: "شكرًا لمشاركتك في لعبتنا! سعدنا بوجودك معنا! 💙" });
Object.assign(translations.ru, { settingsTitle: "ЭКРАН И ЗВУК", settingsOpen: "Открыть настройки", brightness: "Яркость экрана", soundEffects: "Звуки нажатий", storyThanks: "Спасибо, что прошёл нашу игру! Рады, что ты был с нами! 💙" });
Object.assign(translations.es, { settingsTitle: "PANTALLA Y SONIDO", settingsOpen: "Abrir ajustes", brightness: "Brillo de pantalla", soundEffects: "Sonidos al pulsar", storyThanks: "¡Gracias por jugar nuestra aventura! ¡Nos alegra que hayas participado! 💙" });
Object.assign(translations.fr, { settingsTitle: "ÉCRAN ET SON", settingsOpen: "Ouvrir les réglages", brightness: "Luminosité de l’écran", soundEffects: "Sons des clics", storyThanks: "Merci d’avoir joué à notre aventure ! Nous sommes ravis de ta participation ! 💙" });
Object.assign(translations.tr, { settingsTitle: "EKRAN VE SES", settingsOpen: "Ayarları aç", brightness: "Ekran parlaklığı", soundEffects: "Tıklama sesleri", storyThanks: "Oyunumuzu oynadığın için teşekkürler! Katıldığın için çok mutluyuz! 💙" });
Object.assign(translations.de, { showcaseEyebrow: "SCHULE MIT KLANG", showcaseTitle: "Eine Schule.<br><span>Voller Energie.</span>", showcaseDescription: "Hier wirken Lernen, Bewegung und Gemeinschaft zusammen – genau wie bei einer echten Rallye durch den Schulalltag.", showcaseCommunity: "Gemeinschaft", showcaseCommunityText: "Jede Stunde baut auf Vertrauen, Hilfe und gemeinsamen Erfolg auf.", showcaseLearning: "Lernen", showcaseLearningText: "Von der ersten Idee bis zum großen Durchbruch steckt in jeder Aufgabe eine neue Entdeckung.", showcaseSport: "Bewegung", showcaseSportText: "Schule ist nicht nur sitzen – sie ist Energie, Teamgeist und gemeinsame Momente.", showcaseFuture: "Zukunft", showcaseFutureText: "Jeder kann seinen eigenen Weg finden – mit Neugier, Mut und Ideen.", reviewsEyebrow: "SCHUL-STIMMEN", reviewsTitle: "Was andere sagen.<br><span>Und was wir lieben.</span>", reviewsDescription: "Teile deine Meinung, lies die ersten Eindrücke anderer und trage dich in die Schulgeschichte ein.", reviewFormTitle: "Deine Meinung", reviewName: "Name", reviewNamePlaceholder: "Dein Name", reviewText: "Feedback", reviewTextPlaceholder: "Wie war die Rallye?", reviewRatingLabel: "Bewertung", reviewSubmit: "Veröffentlichen", showReviewsButton: "Alle Bewertungen", adminReplyTitle: "Admin Antwort", adminSelect: "Bewertung auswählen", adminReplyText: "Antwort", adminReplyPlaceholder: "Antwort für die Community", adminReplySubmit: "Antwort speichern", adminDelete: "Bewertung löschen", adminHint: "Nur für den Schul-Admin sichtbar. Verwende den Code AdminSS oder ?admin=AdminSS, um die Antworten zu verwalten.", adminAccessTitle: "Admin-Zugang", adminAccessText: "Gib den Code ein, um den Admin-Modus zu aktivieren.", adminAccessLabel: "Code", adminAccessActivate: "Aktivieren", reviewEmptyTitle: "Noch keine Stimmen", reviewEmptyText: "Sei der Erste und hinterlasse dein Feedback!", reviewAdminLabel: "Admin", reviewNoReply: "Noch keine Antwort von der Schule.", reviewAddTitle: "Danke für dein Feedback!" });
Object.assign(translations.en, { showcaseEyebrow: "SCHOOL WITH SPIRIT", showcaseTitle: "A school.<br><span>Full of energy.</span>", showcaseDescription: "Here, learning, movement and community come together – just like in a real school-day rally.", showcaseCommunity: "Community", showcaseCommunityText: "Every lesson grows through trust, support and shared success.", showcaseLearning: "Learning", showcaseLearningText: "From the first idea to the big breakthrough, each task reveals a new discovery.", showcaseSport: "Movement", showcaseSportText: "School is not only sitting still – it is energy, teamwork and shared moments.", showcaseFuture: "Future", showcaseFutureText: "Everyone can find their own path with curiosity, courage and ideas.", reviewsEyebrow: "SCHOOL VOICES", reviewsTitle: "What others say.<br><span>And what we love.</span>", reviewsDescription: "Share your opinion, read the first impressions of others and become part of the school story.", reviewFormTitle: "Your voice", reviewName: "Name", reviewNamePlaceholder: "Your name", reviewText: "Feedback", reviewTextPlaceholder: "How was the rally?", reviewRatingLabel: "Rating", reviewSubmit: "Publish", showReviewsButton: "All reviews", adminReplyTitle: "Admin reply", adminSelect: "Choose feedback", adminReplyText: "Reply", adminReplyPlaceholder: "Reply to the community", adminReplySubmit: "Save reply", adminDelete: "Delete review", adminHint: "Only for the school admin. Use the code AdminSS or ?admin=AdminSS to manage replies.", adminAccessTitle: "Admin access", adminAccessText: "Enter the code to activate admin mode.", adminAccessLabel: "Code", adminAccessActivate: "Activate", reviewEmptyTitle: "No voices yet", reviewEmptyText: "Be the first and leave your feedback!", reviewAdminLabel: "Admin", reviewNoReply: "No school reply yet.", reviewAddTitle: "Thanks for the feedback!" });
Object.assign(translations.ar, { showcaseEyebrow: "مدرسة مليئة بالحيوية", showcaseTitle: "مدرسة.<br><span>مليئة بالطاقة.</span>", showcaseDescription: "هنا تتلاقى التعلم والحركة والمجتمع – تمامًا مثل جولة المدرسة الحقيقية.", showcaseCommunity: "المجتمع", showcaseCommunityText: "كل درس يزدهر بالثقة والمساعدة والنجاح المشترك.", showcaseLearning: "التعلم", showcaseLearningText: "من الفكرة الأولى إلى الإنجاز الكبير، كل مهمة تكشف اكتشافًا جديدًا.", showcaseSport: "الحركة", showcaseSportText: "المدرسة ليست مجرد الجلوس – بل هي الطاقة والعمل الجماعي واللحظات المشتركة.", showcaseFuture: "المستقبل", showcaseFutureText: "يمكن لكل شخص أن يجد طريقه الخاص بفضول وشجاعة وأفكار.", reviewsEyebrow: "أصوات المدرسة", reviewsTitle: "ما يقوله الآخرون.<br><span>وما نحبّه.</span>", reviewsDescription: "شارك رأيك واقرأ انطباعات الآخرين واصبح جزءًا من قصة المدرسة.", reviewFormTitle: "رأيك", reviewName: "الاسم", reviewNamePlaceholder: "اسمك", reviewText: "الملاحظات", reviewTextPlaceholder: "كيف كانت الجولة؟", reviewRatingLabel: "التقييم", reviewSubmit: "نشر", showReviewsButton: "جميع الملاحظات", adminReplyTitle: "رد الإدارة", adminSelect: "اختر تعليقًا", adminReplyText: "الرد", adminReplyPlaceholder: "رد للمجتمع", adminReplySubmit: "حفظ الرد", adminDelete: "حذف التقييم", adminHint: "مرئي فقط لإدارة المدرسة. استخدم الرمز AdminSS أو ?admin=AdminSS لإدارة الردود.", adminAccessTitle: "وصول الإدارة", adminAccessText: "أدخل الرمز لتفعيل وضع الإدارة.", adminAccessLabel: "الرمز", adminAccessActivate: "تفعيل", reviewEmptyTitle: "لا توجد أصوات بعد", reviewEmptyText: "كن أول من يترك تعليقًا!", reviewAdminLabel: "الإدارة", reviewNoReply: "لا يوجد رد من المدرسة بعد.", reviewAddTitle: "شكرًا لتعليقك!" });
Object.assign(translations.ru, { showcaseEyebrow: "ШКОЛА С ДУХОМ", showcaseTitle: "Школа.<br><span>Полна энергии.</span>", showcaseDescription: "Здесь сочетаются учёба, движение и общение — как в настоящем школьном квесте.", showcaseCommunity: "Сообщество", showcaseCommunityText: "Каждый урок строится на доверии, поддержке и общем успехе.", showcaseLearning: "Учёба", showcaseLearningText: "От первой идеи до большого открытия каждая задача открывает что-то новое.", showcaseSport: "Движение", showcaseSportText: "Школа — это не только сидеть за партой, но и энергия, командный дух и моменты вместе.", showcaseFuture: "Будущее", showcaseFutureText: "Каждый может найти свой путь с любопытством, мужеством и идеями.", reviewsEyebrow: "ГОЛОСА ШКОЛЫ", reviewsTitle: "Что говорят другие.<br><span>И что нам нравится.</span>", reviewsDescription: "Поделись мнением, прочитай отзывы других и стань частью истории школы.", reviewFormTitle: "Твоё мнение", reviewName: "Имя", reviewNamePlaceholder: "Твоё имя", reviewText: "Отзыв", reviewTextPlaceholder: "Как прошёл квест?", reviewRatingLabel: "Оценка", reviewSubmit: "Опубликовать", showReviewsButton: "Все отзывы", adminReplyTitle: "Ответ администрации", adminSelect: "Выбери отзыв", adminReplyText: "Ответ", adminReplyPlaceholder: "Ответ для сообщества", adminReplySubmit: "Сохранить ответ", adminDelete: "Удалить отзыв", adminHint: "Только для школьного администратора. Используй код AdminSS или ?admin=AdminSS для управления ответами.", adminAccessTitle: "Доступ администратора", adminAccessText: "Введи код, чтобы активировать режим администратора.", adminAccessLabel: "Код", adminAccessActivate: "Активировать", reviewEmptyTitle: "Пока без отзывов", reviewEmptyText: "Будь первым и оставь свой отзыв!", reviewAdminLabel: "Админ", reviewNoReply: "Пока нет ответа от школы.", reviewAddTitle: "Спасибо за отзыв!" });
Object.assign(translations.es, { showcaseEyebrow: "ESCUELA CON ENERGÍA", showcaseTitle: "Una escuela.<br><span>Llena de energía.</span>", showcaseDescription: "Aquí se reúnen aprendizaje, movimiento y comunidad, como en una verdadera ruta escolar.", showcaseCommunity: "Comunidad", showcaseCommunityText: "Cada hora se construye con confianza, ayuda y éxito compartido.", showcaseLearning: "Aprendizaje", showcaseLearningText: "Desde la primera idea hasta el gran avance, cada tarea revela un nuevo descubrimiento.", showcaseSport: "Movimiento", showcaseSportText: "La escuela no es solo estar sentado: es energía, trabajo en equipo y momentos juntos.", showcaseFuture: "Futuro", showcaseFutureText: "Cada persona puede encontrar su camino con curiosidad, valentía e ideas.", reviewsEyebrow: "VOCES DE LA ESCUELA", reviewsTitle: "Lo que dicen otros.<br><span>Y lo que nos encanta.</span>", reviewsDescription: "Comparte tu opinión, lee las primeras impresiones y forma parte de la historia escolar.", reviewFormTitle: "Tu opinión", reviewName: "Nombre", reviewNamePlaceholder: "Tu nombre", reviewText: "Comentario", reviewTextPlaceholder: "¿Cómo fue la ruta?", reviewRatingLabel: "Valoración", reviewSubmit: "Publicar", showReviewsButton: "Todas las opiniones", adminReplyTitle: "Respuesta del administrador", adminSelect: "Elige una opinión", adminReplyText: "Respuesta", adminReplyPlaceholder: "Respuesta para la comunidad", adminReplySubmit: "Guardar respuesta", adminDelete: "Eliminar opinión", adminHint: "Solo para la administración escolar. Usa el código AdminSS o ?admin=AdminSS para gestionar respuestas.", adminAccessTitle: "Acceso de admin", adminAccessText: "Escribe el código para activar el modo admin.", adminAccessLabel: "Código", adminAccessActivate: "Activar", reviewEmptyTitle: "Aún no hay opiniones", reviewEmptyText: "¡Sé el primero y deja tu feedback!", reviewAdminLabel: "Admin", reviewNoReply: "Todavía no hay respuesta de la escuela.", reviewAddTitle: "¡Gracias por tu opinión!" });
Object.assign(translations.fr, { showcaseEyebrow: "ÉCOLE EN ÉNERGIE", showcaseTitle: "Une école.<br><span> Pleine d’énergie.</span>", showcaseDescription: "Ici, apprentissage, mouvement et esprit de groupe se réunissent — comme dans une vraie aventure scolaire.", showcaseCommunity: "Communauté", showcaseCommunityText: "Chaque heure se construit avec confiance, aide et réussite commune.", showcaseLearning: "Apprentissage", showcaseLearningText: "De la première idée au grand déclic, chaque tâche révèle une nouvelle découverte.", showcaseSport: "Mouvement", showcaseSportText: "L’école n’est pas seulement assis : c’est énergie, esprit d’équipe et moments partagés.", showcaseFuture: "Avenir", showcaseFutureText: "Tout le monde peut trouver sa voie avec curiosité, courage et idées.", reviewsEyebrow: "VOIX DE L’ÉCOLE", reviewsTitle: "Ce que disent les autres.<br><span>Et ce que nous aimons.</span>", reviewsDescription: "Partage ton avis, lis les premières impressions et rejoins l’histoire de l’école.", reviewFormTitle: "Ton avis", reviewName: "Nom", reviewNamePlaceholder: "Ton nom", reviewText: "Feedback", reviewTextPlaceholder: "Comment s’est passée la randonnée ?", reviewRatingLabel: "Note", reviewSubmit: "Publier", showReviewsButton: "Tous les avis", adminReplyTitle: "Réponse admin", adminSelect: "Choisir un avis", adminReplyText: "Réponse", adminReplyPlaceholder: "Réponse pour la communauté", adminReplySubmit: "Enregistrer", adminDelete: "Supprimer l’avis", adminHint: "Visible uniquement pour l’admin de l’école. Utilise le code AdminSS ou ?admin=AdminSS pour gérer les réponses.", adminAccessTitle: "Accès admin", adminAccessText: "Saisis le code pour activer le mode admin.", adminAccessLabel: "Code", adminAccessActivate: "Activer", reviewEmptyTitle: "Pas encore d’avis", reviewEmptyText: "Sois le premier à laisser un commentaire !", reviewAdminLabel: "Admin", reviewNoReply: "Pas encore de réponse de l’école.", reviewAddTitle: "Merci pour ton avis !" });
Object.assign(translations.tr, { showcaseEyebrow: "ENERJİK OKUL", showcaseTitle: "Bir okul.<br><span>Enerjiyle dolu.</span>", showcaseDescription: "Burada öğrenme, hareket ve topluluk gerçek bir okul gününde olduğu gibi bir araya gelir.", showcaseCommunity: "Topluluk", showcaseCommunityText: "Her saat güven, yardım ve ortak başarı üzerine kurulur.", showcaseLearning: "Öğrenme", showcaseLearningText: "İlk fikirden büyük çıkışa kadar her görev yeni bir keşif sunar.", showcaseSport: "Hareket", showcaseSportText: "Okul sadece oturmak değil; enerji, takım ruhu ve ortak anlar demektir.", showcaseFuture: "Gelecek", showcaseFutureText: "Herkes merak, cesaret ve fikirlerle kendi yolunu bulabilir.", reviewsEyebrow: "OKUL SESSİZLERİ", reviewsTitle: "Diğerleri ne diyor?<br><span>Ve biz neyi seviyoruz.</span>", reviewsDescription: "Fikrini paylaş, diğerlerinin ilk izlenimlerini oku ve okul hikâyesine katıl.", reviewFormTitle: "Görüşün", reviewName: "Adın", reviewNamePlaceholder: "Adın", reviewText: "Geri bildirim", reviewTextPlaceholder: "Rallye nasıl geçti?", reviewRatingLabel: "Puan", reviewSubmit: "Yayınla", showReviewsButton: "Tüm yorumlar", adminReplyTitle: "Yönetici cevabı", adminSelect: "Yorumu seç", adminReplyText: "Cevap", adminReplyPlaceholder: "Topluluk için cevap", adminReplySubmit: "Cevabı kaydet", adminDelete: "Yorumu sil", adminHint: "Yalnızca okul yöneticisi görür. Cevapları yönetmek için AdminSS kodunu veya ?admin=AdminSS kullan.", adminAccessTitle: "Admin girişi", adminAccessText: "Admin modunu açmak için kodu gir.", adminAccessLabel: "Kod", adminAccessActivate: "Etkinleştir", reviewEmptyTitle: "Henüz yorum yok", reviewEmptyText: "İlk sen ol ve geri bildirimini bırak!", reviewAdminLabel: "Admin", reviewNoReply: "Okuldan henüz cevap gelmedi.", reviewAddTitle: "Geri bildirimin için teşekkürler!" });

Object.assign(translations.de, { leaveReviewButton: "Bewertung schreiben" });
Object.assign(translations.en, { leaveReviewButton: "Leave a review" });
Object.assign(translations.ar, { leaveReviewButton: "أضف تقييمًا" });
Object.assign(translations.ru, { leaveReviewButton: "Оставить отзыв" });
Object.assign(translations.es, { leaveReviewButton: "Dejar una opinión" });
Object.assign(translations.fr, { leaveReviewButton: "Laisser un avis" });
Object.assign(translations.tr, { leaveReviewButton: "Yorum bırak" });

Object.assign(translations.de, { creditProgram: "Programmiert von Konstantin Korneev, Klasse 7A", creditDesign: "Design von Konstantin Korneev, Klasse 7A", creditText: "Text von Vladyslav Shevchenko, Klasse 7A", creditTest: "Getestet von Konstantin Korneev und Vladyslav Shevchenko, beide Klasse 7A", soundVolume: "Lautstärke", emojiGameOpen: "Emoji-Spiel öffnen", emojiGameTitle: "DIE EMOJI-MISSION", emojiGameQuestion: "Welches Emoji gehört zu unserer Schule?", emojiGameWrong: "Fast! Such noch einmal.", emojiGameCorrect: "Richtig! 🏫 Du kennst dich aus!" });
Object.assign(translations.en, { creditProgram: "Programmed by Konstantin Korneev, class 7A", creditDesign: "Designed by Konstantin Korneev, class 7A", creditText: "Text by Vladyslav Shevchenko, class 7A", creditTest: "Tested by Konstantin Korneev and Vladyslav Shevchenko, both class 7A", soundVolume: "Sound volume", emojiGameOpen: "Open the emoji game", emojiGameTitle: "THE EMOJI MISSION", emojiGameQuestion: "Which emoji belongs at our school?", emojiGameWrong: "Almost! Give it another try.", emojiGameCorrect: "Correct! 🏫 You know your school!" });
Object.assign(translations.ar, { creditProgram: "البرمجة: Konstantin Korneev، الصف 7A", creditDesign: "التصميم: Konstantin Korneev، الصف 7A", creditText: "النص: Vladyslav Shevchenko، الصف 7A", creditTest: "الاختبار: Konstantin Korneev وVladyslav Shevchenko، الصف 7A", soundVolume: "مستوى الصوت", emojiGameOpen: "افتح لعبة الرموز", emojiGameTitle: "مهمة الرموز التعبيرية", emojiGameQuestion: "أي رمز تعبيري يناسب مدرستنا؟", emojiGameWrong: "قريب! حاول مرة أخرى.", emojiGameCorrect: "صحيح! 🏫 أنت تعرف مدرستك جيدًا!" });
Object.assign(translations.ru, { creditProgram: "Программирование: Константин Корнеев (Konstantin Korneev), 7А", creditDesign: "Дизайн: Константин Корнеев (Konstantin Korneev), 7А", creditText: "Текст: Владислав Шевченко (Vladyslav Shevchenko), 7А", creditTest: "Тестирование: Константин Корнеев (Konstantin Korneev) и Владислав Шевченко (Vladyslav Shevchenko), 7А", soundVolume: "Громкость звука", emojiGameOpen: "Открыть игру с эмодзи", emojiGameTitle: "ЭМОДЗИ-МИССИЯ", emojiGameQuestion: "Какой эмодзи подходит нашей школе?", emojiGameWrong: "Почти! Попробуй ещё раз.", emojiGameCorrect: "Верно! 🏫 Ты отлично знаешь свою школу!" });
Object.assign(translations.es, { creditProgram: "Programación: Konstantin Korneev, clase 7A", creditDesign: "Diseño: Konstantin Korneev, clase 7A", creditText: "Texto: Vladyslav Shevchenko, clase 7A", creditTest: "Pruebas: Konstantin Korneev y Vladyslav Shevchenko, ambos de 7A", soundVolume: "Volumen del sonido", emojiGameOpen: "Abrir el juego de emojis", emojiGameTitle: "LA MISIÓN DE LOS EMOJIS", emojiGameQuestion: "¿Qué emoji representa nuestra escuela?", emojiGameWrong: "¡Casi! Inténtalo otra vez.", emojiGameCorrect: "¡Correcto! 🏫 ¡Conoces muy bien tu escuela!" });
Object.assign(translations.fr, { creditProgram: "Programmation : Konstantin Korneev, classe 7A", creditDesign: "Design : Konstantin Korneev, classe 7A", creditText: "Texte : Vladyslav Shevchenko, classe 7A", creditTest: "Tests : Konstantin Korneev et Vladyslav Shevchenko, tous deux en 7A", soundVolume: "Volume sonore", emojiGameOpen: "Ouvrir le jeu d’émojis", emojiGameTitle: "LA MISSION DES ÉMOJIS", emojiGameQuestion: "Quel émoji représente notre école ?", emojiGameWrong: "Presque ! Réessaie.", emojiGameCorrect: "Bonne réponse ! 🏫 Tu connais bien ton école !" });
Object.assign(translations.tr, { creditProgram: "Programlama: Konstantin Korneev, 7A sınıfı", creditDesign: "Tasarım: Konstantin Korneev, 7A sınıfı", creditText: "Metin: Vladyslav Shevchenko, 7A sınıfı", creditTest: "Test edenler: Konstantin Korneev ve Vladyslav Shevchenko, ikisi de 7A sınıfında", soundVolume: "Ses düzeyi", emojiGameOpen: "Emoji oyununu aç", emojiGameTitle: "EMOJİ GÖREVİ", emojiGameQuestion: "Okulumuzu hangi emoji temsil ediyor?", emojiGameWrong: "Az kaldı! Tekrar dene.", emojiGameCorrect: "Doğru! 🏫 Okulunu çok iyi tanıyorsun!" });
Object.assign(translations.de, { emojiGameGroup: "Emoji-Spiel", emojiTree: "Baum", emojiSchool: "Schule", emojiFootball: "Fußball" });
Object.assign(translations.en, { emojiGameGroup: "Emoji game", emojiTree: "Tree", emojiSchool: "School", emojiFootball: "Football" });
Object.assign(translations.ar, { emojiGameGroup: "لعبة الرموز التعبيرية", emojiTree: "شجرة", emojiSchool: "مدرسة", emojiFootball: "كرة قدم" });
Object.assign(translations.ru, { emojiGameGroup: "Игра с эмодзи", emojiTree: "Дерево", emojiSchool: "Школа", emojiFootball: "Футбольный мяч" });
Object.assign(translations.es, { emojiGameGroup: "Juego de emojis", emojiTree: "Árbol", emojiSchool: "Escuela", emojiFootball: "Fútbol" });
Object.assign(translations.fr, { emojiGameGroup: "Jeu d’émojis", emojiTree: "Arbre", emojiSchool: "École", emojiFootball: "Ballon de football" });
Object.assign(translations.tr, { emojiGameGroup: "Emoji oyunu", emojiTree: "Ağaç", emojiSchool: "Okul", emojiFootball: "Futbol topu" });

const schoolStories = {
  de: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>Gemeinsam lernen. Gemeinsam wachsen. Gemeinsam erfolgreich sein!</p><p>Willkommen an der Stadtschule Lübbecke! 🌟 Lernen, Gemeinschaft, Kreativität und persönliche Entwicklung gehören zusammen. Schülerinnen und Schüler entdecken Interessen, stärken Fähigkeiten und finden ihren eigenen Weg in die Zukunft. Wir sind eine Ganztagsschule für die Jahrgänge 5 bis 10 und bieten verschiedene Schulabschlüsse der Sekundarstufe I. Bei uns ist jeder Mensch wichtig! ❤️</p><h3>📚 1. Spannender Unterricht ab Klasse 5</h3><p>Mathematik stärkt logisches Denken; in Deutsch lesen und schreiben wir, in Englisch üben wir eine internationale Sprache. Gesellschaftslehre verbindet Geschichte, Erdkunde, Politik und Kulturen. Naturwissenschaften entdecken Tiere, Pflanzen, den menschlichen Körper und Naturphänomene. Informatik erkundet Computer und digitale Technologien. Sport und Schwimmen bringen Bewegung und Teamgeist; Kunst und Musik fördern Kreativität. Religion und Praktische Philosophie beschäftigen sich mit Werten und Lebensfragen. Soziales Lernen übt Respekt, Zusammenarbeit und Konfliktlösung.</p><h3>🧪 2. Naturwissenschaften: Forschen und Entdecken</h3><p>In höheren Klassen werden die Fächer vertieft: 🧬 Biologie behandelt Körper, Tiere, Pflanzen, Umwelt und Gesundheit. ⚗️ Chemie erforscht Stoffe, Reaktionen, Experimente und Chemie im Alltag. ⚡ Physik beschäftigt sich mit Energie, Bewegung, Elektrizität, Licht, Schall und Technik.</p><h3>⭐ 3. Wahlpflicht ab Klasse 7</h3><p>Am Ende der 6. Klasse wählen Jugendliche ein zusätzliches Fach: 🇫🇷 Französisch, 🇪🇸 Spanisch, 💻 MINT (Mathematik, Informatik, Naturwissenschaften und Technik), 🎭 Darstellen und Gestalten, 🍳 Hauswirtschaft oder 🔧 Technik. Es zählt wie ein Hauptfach; Interessen und Stärken helfen bei der Wahl.</p><h3>🌍 4. Bilingualer Unterricht</h3><p>Erweiterter Englischunterricht ab Klasse 5 kann auf den bilingualen Schwerpunkt ab Klasse 7 vorbereiten. Ausgewählte Unterrichtsinhalte können dann auch auf Englisch behandelt werden.</p><h3>💻 5. MINT – Die Zukunft entdecken</h3><p>MINT steht für Mathematik, Informatik, Naturwissenschaften und Technik. Jugendliche probieren Neues aus und erforschen Computer, Technik und Wissenschaft.</p><h3>⏰ 6. Ganztagsschule und Lernzeiten</h3><p>Dazu gehören begleitete Lernzeiten für Aufgaben und Wiederholung, Mittagspause in der schuleigenen Cafeteria, Arbeitsgemeinschaften und überwiegend 90-minütige Unterrichtsblöcke für vertieftes Lernen.</p><h3>❤️ 7. Eine Schule für alle</h3><p>Kinder und Jugendliche mit unterschiedlichen Fähigkeiten und Lernvoraussetzungen lernen gemeinsam. Lehrkräfte, Sonderpädagoginnen und Sonderpädagogen sowie weitere Fachkräfte bieten individuelle Unterstützung, differenziertes Lernen, zusätzliche Förderung und gegenseitige Rücksichtnahme.</p><p class="story-motto">Unser Motto: Jeder Mensch ist unterschiedlich – und genau das macht unsere Gemeinschaft stark! 🌈</p>`,
  en: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>Learning together. Growing together. Succeeding together!</p><p>Welcome to Stadtschule Lübbecke! 🌟 Learning, community, creativity and personal development belong together. Students discover their interests, build their strengths and find their own path to the future. We are an all-day school for grades 5–10, offering several lower-secondary qualifications. Everyone matters here! ❤️</p><h3>📚 1. Exciting lessons from grade 5</h3><p>Maths develops logical thinking; in German we read and write, and in English we practise an international language. Social studies explores history, geography, politics and cultures. Science investigates animals, plants, the human body and nature. Computing explores computers and digital technology. Sport and swimming bring movement and teamwork; art and music encourage creativity. Religion and Practical Philosophy explore values and life’s big questions. Social learning builds respect, cooperation and conflict-resolution skills.</p><h3>🧪 2. Science: explore and discover</h3><p>In higher grades, subjects go deeper: 🧬 Biology covers the body, animals, plants, the environment and health. ⚗️ Chemistry explores materials, reactions, experiments and everyday chemistry. ⚡ Physics looks at energy, motion, electricity, light, sound and technology.</p><h3>⭐ 3. Electives from grade 7</h3><p>At the end of grade 6, students choose an extra subject: 🇫🇷 French, 🇪🇸 Spanish, 💻 STEM, 🎭 Performing Arts and Design, 🍳 Home Economics or 🔧 Technology. It counts as a core subject, so interests and strengths matter.</p><h3>🌍 4. Bilingual learning</h3><p>Extended English lessons from grade 5 can prepare students for the bilingual focus from grade 7, where selected subject content may also be taught in English.</p><h3>💻 5. STEM: discover the future</h3><p>STEM means science, technology, engineering and mathematics. Students explore questions, try new things and discover computing, technology and science.</p><h3>⏰ 6. All-day school and study time</h3><p>The school day includes teacher-supported study time for assignments and revision, lunch in the school cafeteria, clubs and mostly 90-minute lesson blocks for in-depth learning.</p><h3>❤️ 7. A school for everyone</h3><p>Students with different abilities and learning needs learn together. Teachers, special-education teachers and other professionals provide individual support, differentiated learning, extra help and mutual respect.</p><p class="story-motto">Our motto: Everyone is different – and that is what makes our community strong! 🌈</p>`,
  ru: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>Учимся вместе. Растём вместе. Добиваемся успеха вместе!</p><p>Добро пожаловать в Stadtschule Lübbecke! 🌟 Здесь соединяются учёба, дружба, творчество и личное развитие. Ученики раскрывают интересы, развивают способности и находят свой путь в будущее. Мы — школа полного дня для 5–10 классов, где можно получить разные аттестаты о среднем образовании. У нас важен каждый человек! ❤️</p><h3>📚 1. Интересные уроки с 5 класса</h3><p>Математика развивает логику; на немецком мы читаем и пишем, на английском изучаем международный язык. Обществознание объединяет историю, географию, политику и культуры. Естественные науки знакомят с животными, растениями, телом человека и природными явлениями. Информатика — с компьютерами и цифровыми технологиями. Спорт и плавание развивают движение и командный дух, искусство и музыка — творчество. На религии и практической философии обсуждают ценности и вопросы жизни. Социальное обучение помогает уважать друг друга, сотрудничать и решать конфликты.</p><h3>🧪 2. Естественные науки: исследуем и открываем</h3><p>В старших классах предметы изучаются глубже: 🧬 биология — тело, животные, растения, природа и здоровье; ⚗️ химия — вещества, реакции, эксперименты и химия вокруг нас; ⚡ физика — энергия, движение, электричество, свет, звук и техника.</p><h3>⭐ 3. Предметы по выбору с 7 класса</h3><p>В конце 6 класса выбирают дополнительный предмет: 🇫🇷 французский, 🇪🇸 испанский, 💻 MINT (математика, информатика, естественные науки и техника), 🎭 театр и творчество, 🍳 домоводство или 🔧 техника. Он оценивается как основной, поэтому важны интересы и сильные стороны.</p><h3>🌍 4. Билингвальное обучение</h3><p>Расширенные занятия английским с 5 класса готовят к билингвальному направлению с 7 класса, где отдельные темы могут изучаться на английском.</p><h3>💻 5. MINT — знакомство с будущим</h3><p>MINT — математика, информатика, естественные науки и техника. Ученики исследуют вопросы, пробуют новое и знакомятся с наукой и технологиями.</p><h3>⏰ 6. Полный день и время для учёбы</h3><p>В школьный день входят занятия под руководством учителей для выполнения и разбора заданий, обед в школьном кафе, кружки и преимущественно 90-минутные уроки для углублённого изучения тем.</p><h3>❤️ 7. Школа для каждого</h3><p>Дети и подростки с разными способностями и учебными потребностями учатся вместе. Учителя, педагоги специального образования и другие специалисты обеспечивают индивидуальную поддержку, разные форматы обучения, дополнительную помощь и взаимное уважение.</p><p class="story-motto">Наш девиз: все люди разные — и именно это делает наше сообщество сильным! 🌈</p>`,
  es: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>¡Aprender juntos. Crecer juntos. Triunfar juntos!</p><p>¡Te damos la bienvenida a Stadtschule Lübbecke! 🌟 Aquí se unen aprendizaje, convivencia, creatividad y desarrollo personal. El alumnado descubre sus intereses, fortalece sus capacidades y encuentra su propio camino. Somos un centro de jornada completa para los cursos 5.º a 10.º, con varias titulaciones de secundaria. ¡Cada persona importa! ❤️</p><h3>📚 1. Clases interesantes desde 5.º</h3><p>Matemáticas desarrolla la lógica; en Alemán leemos y escribimos, y en Inglés practicamos una lengua internacional. Ciencias Sociales abarca historia, geografía, política y culturas. Ciencias Naturales explora animales, plantas, el cuerpo humano y la naturaleza. Informática descubre los ordenadores y la tecnología digital. Deporte y natación aportan movimiento y trabajo en equipo; Arte y Música fomentan la creatividad. Religión y Filosofía Práctica tratan valores y preguntas de la vida. El aprendizaje social enseña respeto, colaboración y resolución de conflictos.</p><h3>🧪 2. Ciencias: investigar y descubrir</h3><p>En cursos superiores se profundiza: 🧬 Biología estudia cuerpo, animales, plantas, medioambiente y salud. ⚗️ Química explora sustancias, reacciones, experimentos y química cotidiana. ⚡ Física aborda energía, movimiento, electricidad, luz, sonido y tecnología.</p><h3>⭐ 3. Optativas desde 7.º</h3><p>Al terminar 6.º se elige una materia adicional: 🇫🇷 Francés, 🇪🇸 Español, 💻 MINT (matemáticas, informática, ciencias y tecnología), 🎭 Expresión y Diseño, 🍳 Economía doméstica o 🔧 Tecnología. Cuenta como materia principal; importan los intereses y fortalezas.</p><h3>🌍 4. Enseñanza bilingüe</h3><p>El inglés ampliado desde 5.º prepara para el itinerario bilingüe de 7.º, donde algunos contenidos también pueden impartirse en inglés.</p><h3>💻 5. MINT: descubrir el futuro</h3><p>MINT reúne matemáticas, informática, ciencias naturales y tecnología. El alumnado investiga, experimenta y descubre la ciencia y la tecnología.</p><h3>⏰ 6. Jornada completa y tiempos de estudio</h3><p>Hay tiempos de estudio con docentes para tareas y repaso, almuerzo en la cafetería escolar, actividades extraescolares y clases de 90 minutos en su mayoría para profundizar.</p><h3>❤️ 7. Una escuela para todos</h3><p>Jóvenes con distintas capacidades y necesidades aprenden juntos. Docentes, especialistas en educación especial y otros profesionales ofrecen apoyo individual, aprendizaje adaptado, refuerzo y respeto mutuo.</p><p class="story-motto">Nuestro lema: cada persona es diferente, ¡y eso hace fuerte a nuestra comunidad! 🌈</p>`,
  fr: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>Apprendre ensemble. Grandir ensemble. Réussir ensemble !</p><p>Bienvenue à la Stadtschule Lübbecke ! 🌟 Notre école associe apprentissage, vie collective, créativité et développement personnel. Les élèves découvrent leurs intérêts, renforcent leurs capacités et trouvent leur voie. Nous accueillons les classes de la 5e à la 10e à temps plein et proposons plusieurs diplômes du secondaire inférieur. Ici, chaque personne compte ! ❤️</p><h3>📚 1. Des cours passionnants dès la 5e</h3><p>Les mathématiques développent la logique ; en allemand, on lit et écrit, et en anglais, on pratique une langue internationale. Les sciences humaines abordent histoire, géographie, politique et cultures. Les sciences naturelles explorent animaux, plantes, corps humain et nature. L’informatique fait découvrir le numérique. Sport et natation favorisent mouvement et esprit d’équipe ; arts et musique stimulent la créativité. Religion et philosophie pratique abordent valeurs et questions de la vie. L’apprentissage social encourage respect, coopération et résolution des conflits.</p><h3>🧪 2. Sciences : chercher et découvrir</h3><p>Dans les classes supérieures : 🧬 la biologie étudie le corps, les animaux, les plantes, l’environnement et la santé ; ⚗️ la chimie explore substances, réactions, expériences et vie quotidienne ; ⚡ la physique traite énergie, mouvement, électricité, lumière, son et technologie.</p><h3>⭐ 3. Options à partir de la 7e</h3><p>À la fin de la 6e, les élèves choisissent : 🇫🇷 français, 🇪🇸 espagnol, 💻 MINT (mathématiques, informatique, sciences et technologie), 🎭 expression et création, 🍳 économie familiale ou 🔧 technologie. Cette option compte comme matière principale ; intérêts et points forts guident le choix.</p><h3>🌍 4. Enseignement bilingue</h3><p>L’anglais renforcé dès la 5e prépare au parcours bilingue à partir de la 7e, où certains contenus peuvent aussi être enseignés en anglais.</p><h3>💻 5. MINT : découvrir l’avenir</h3><p>MINT désigne les mathématiques, l’informatique, les sciences naturelles et la technologie. Les jeunes expérimentent et découvrent les sciences et les techniques.</p><h3>⏰ 6. Journée complète et temps d’étude</h3><p>La journée comprend des temps d’étude encadrés pour devoirs et révisions, le déjeuner à la cafétéria, des clubs et surtout des cours de 90 minutes pour approfondir les sujets.</p><h3>❤️ 7. Une école pour toutes et tous</h3><p>Des élèves aux capacités et besoins différents apprennent ensemble. Enseignants, spécialistes de l’éducation inclusive et autres professionnels proposent accompagnement individuel, apprentissages adaptés, soutien et entraide.</p><p class="story-motto">Notre devise : chacun est différent, et c’est ce qui rend notre communauté forte ! 🌈</p>`,
  tr: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>Birlikte öğren. Birlikte geliş. Birlikte başarılı ol!</p><p>Stadtschule Lübbecke’ye hoş geldin! 🌟 Okulumuz öğrenmeyi, topluluğu, yaratıcılığı ve kişisel gelişimi bir araya getirir. Öğrenciler ilgi alanlarını keşfeder, yeteneklerini geliştirir ve gelecekleri için kendi yollarını bulur. 5–10. sınıflar için tam gün eğitim verir ve ortaöğretimin farklı bitirme diplomalarını sunarız. Burada herkes önemlidir! ❤️</p><h3>📚 1. 5. sınıftan itibaren ilgi çekici dersler</h3><p>Matematik mantığı geliştirir; Almanca dersinde okur ve yazar, İngilizcede uluslararası bir dili öğreniriz. Sosyal bilgiler tarih, coğrafya, siyaset ve kültürleri ele alır. Fen bilimleri hayvanları, bitkileri, insan bedenini ve doğayı araştırır. Bilişim dijital teknolojiyi tanıtır. Spor ve yüzme hareketi ve takım ruhunu, sanat ve müzik yaratıcılığı destekler. Din ve Uygulamalı Felsefe değerleri ve yaşam sorularını ele alır. Sosyal öğrenme saygı, iş birliği ve sorun çözmeyi öğretir.</p><h3>🧪 2. Fen bilimleri: araştır ve keşfet</h3><p>Üst sınıflarda dersler derinleşir: 🧬 Biyoloji beden, hayvanlar, bitkiler, çevre ve sağlığı; ⚗️ Kimya maddeleri, tepkimeleri, deneyleri ve günlük yaşamı; ⚡ Fizik enerji, hareket, elektrik, ışık, ses ve teknolojiyi inceler.</p><h3>⭐ 3. 7. sınıftan itibaren seçmeli dersler</h3><p>6. sınıfın sonunda öğrenciler ek ders seçer: 🇫🇷 Fransızca, 🇪🇸 İspanyolca, 💻 MINT (matematik, bilişim, fen bilimleri ve teknoloji), 🎭 Drama ve Tasarım, 🍳 Ev Ekonomisi veya 🔧 Teknoloji. Ana ders sayılır; seçimde ilgi alanları ve güçlü yönler önemlidir.</p><h3>🌍 4. İki dilli eğitim</h3><p>5. sınıftan itibaren genişletilmiş İngilizce dersleri, 7. sınıfta başlayan iki dilli programa hazırlar. Bazı konular İngilizce işlenebilir.</p><h3>💻 5. MINT: geleceği keşfet</h3><p>MINT; matematik, bilişim, fen bilimleri ve teknoloji demektir. Öğrenciler yeni şeyler dener, bilim ve teknolojiyle tanışır.</p><h3>⏰ 6. Tam gün okul ve öğrenme zamanları</h3><p>Öğretmen eşliğinde ödev ve tekrar saatleri, okul kafeteryasında öğle arası, kulüpler ve derinlemesine öğrenme için çoğunlukla 90 dakikalık dersler vardır.</p><h3>❤️ 7. Herkes için bir okul</h3><p>Farklı yetenek ve öğrenme ihtiyaçlarına sahip öğrenciler birlikte öğrenir. Öğretmenler, özel eğitim uzmanları ve diğer çalışanlar bireysel destek, farklılaştırılmış öğrenme, ek yardım ve karşılıklı saygı sağlar.</p><p class="story-motto">Mottomuz: Her insan farklıdır ve topluluğumuzu güçlü kılan da budur! 🌈</p>`,
  ar: `<p class="story-lead">💙🏫 <strong>STADTSCHULE LÜBBECKE</strong><br>نتعلم معًا. ننمو معًا. وننجح معًا!</p><p>أهلًا بكم في مدرسة شتادتشوله لوبكه! 🌟 تجمع مدرستنا بين التعلم والتعاون والإبداع والتطور الشخصي. يكتشف الطلاب اهتماماتهم وينمّون قدراتهم ويختارون طريقهم نحو المستقبل. نحن مدرسة دوام كامل للصفوف من الخامس إلى العاشر، ونقدم شهادات مختلفة للمرحلة الثانوية الأولى. كل شخص مهم لدينا! ❤️</p><h3>📚 ١. دروس ممتعة من الصف الخامس</h3><p>تنمّي الرياضيات التفكير المنطقي، ونتعلم القراءة والكتابة بالألمانية ونتدرب على الإنجليزية. تتناول الدراسات الاجتماعية التاريخ والجغرافيا والسياسة والثقافات. وتستكشف العلوم الحيوانات والنباتات وجسم الإنسان والظواهر الطبيعية. وتعرّف المعلوماتية بالحواسيب والتقنيات الرقمية. تدعم الرياضة والسباحة الحركة والعمل الجماعي، ويطوّر الفن والموسيقى الإبداع. يناقش الدين والفلسفة العملية القيم وأسئلة الحياة، ويعزز التعلم الاجتماعي الاحترام والتعاون وحل الخلافات.</p><h3>🧪 ٢. العلوم: البحث والاكتشاف</h3><p>تتعمق المواد في الصفوف الأعلى: 🧬 الأحياء تدرس الجسم والحيوانات والنباتات والبيئة والصحة؛ ⚗️ الكيمياء تستكشف المواد والتفاعلات والتجارب والحياة اليومية؛ ⚡ الفيزياء تتناول الطاقة والحركة والكهرباء والضوء والصوت والتقنية.</p><h3>⭐ ٣. مواد اختيارية من الصف السابع</h3><p>في نهاية الصف السادس يختار الطلاب مادة إضافية: 🇫🇷 الفرنسية، 🇪🇸 الإسبانية، 💻 MINT (الرياضيات والمعلوماتية والعلوم والتقنية)، 🎭 التعبير والتصميم، 🍳 الاقتصاد المنزلي أو 🔧 التقنية. تُقيّم كمادة أساسية، لذلك تراعي الاختيارات الاهتمامات والقدرات.</p><h3>🌍 ٤. التعليم الثنائي اللغة</h3><p>يساعد درس إنجليزي موسع من الصف الخامس على الاستعداد للمسار الثنائي اللغة من الصف السابع، حيث يمكن تدريس موضوعات مختارة بالإنجليزية.</p><h3>💻 ٥. MINT: اكتشاف المستقبل</h3><p>يرمز MINT إلى الرياضيات والمعلوماتية والعلوم والتقنية. يبحث الطلاب ويجربون ويكتشفون عالم العلوم والتكنولوجيا.</p><h3>⏰ ٦. الدوام الكامل وأوقات التعلم</h3><p>يشمل اليوم أوقات تعلم بإشراف المعلمين للواجبات والمراجعة، واستراحة غداء في مقصف المدرسة، وأنشطة جماعية، وحصصًا مدتها ٩٠ دقيقة في الغالب للتعمق في الموضوعات.</p><h3>❤️ ٧. مدرسة للجميع</h3><p>يتعلم الطلاب ذوو القدرات واحتياجات التعلم المختلفة معًا. يقدم المعلمون ومتخصصو التربية الخاصة وغيرهم دعمًا فرديًا وتعليمًا متنوعًا ومساعدة إضافية ويعززون الاحترام المتبادل.</p><p class="story-motto">شعارنا: كل إنسان مختلف، وهذا ما يجعل مجتمعنا قويًا! 🌈</p>`
};
Object.assign(translations.de, { adminAccessText: "Code eingeben", adminAccessPlaceholder: "Code eingeben", adminHint: "Nur für die Schulverwaltung sichtbar.", emojiCheerLabel: "Mach mit!", emojiRocket: "Raketen-Reaktion", emojiHeart: "Herz-Reaktion", emojiSparkles: "Glitzer-Reaktion" });
Object.assign(translations.en, { adminAccessText: "Enter code", adminAccessPlaceholder: "Enter code", adminHint: "Visible only to the school administrator.", emojiCheerLabel: "Add some spirit", emojiRocket: "Rocket reaction", emojiHeart: "Heart reaction", emojiSparkles: "Sparkle reaction" });
Object.assign(translations.ar, { adminAccessText: "أدخل الرمز", adminAccessPlaceholder: "أدخل الرمز", adminHint: "مرئي لإدارة المدرسة فقط.", emojiCheerLabel: "أضف بعض الحماس", emojiRocket: "تفاعل الصاروخ", emojiHeart: "تفاعل القلب", emojiSparkles: "تفاعل اللمعان" });
Object.assign(translations.ru, { adminAccessText: "Введите код", adminAccessPlaceholder: "Введите код", adminHint: "Видно только администрации школы.", emojiCheerLabel: "Добавь настроения", emojiRocket: "Реакция-ракета", emojiHeart: "Реакция-сердце", emojiSparkles: "Реакция-блёстки" });
Object.assign(translations.es, { adminAccessText: "Introduce el código", adminAccessPlaceholder: "Introduce el código", adminHint: "Visible solo para la administración escolar.", emojiCheerLabel: "¡Dale energía!", emojiRocket: "Reacción de cohete", emojiHeart: "Reacción de corazón", emojiSparkles: "Reacción brillante" });
Object.assign(translations.fr, { adminAccessText: "Saisis le code", adminAccessPlaceholder: "Saisis le code", adminHint: "Visible uniquement par l’administration de l’école.", emojiCheerLabel: "Ajoute de l’énergie", emojiRocket: "Réaction fusée", emojiHeart: "Réaction cœur", emojiSparkles: "Réaction brillante" });
Object.assign(translations.tr, { adminAccessText: "Kodu gir", adminAccessPlaceholder: "Kodu gir", adminHint: "Yalnızca okul yönetimi görür.", emojiCheerLabel: "Enerji kat", emojiRocket: "Roket tepkisi", emojiHeart: "Kalp tepkisi", emojiSparkles: "Işıl ışıl tepki" });
Object.assign(translations.de, { deviceModeTitle: "Gerätegröße", deviceModeAuto: "Auto", deviceModePhone: "Handy", deviceModeTablet: "Tablet" });
Object.assign(translations.en, { deviceModeTitle: "Device size", deviceModeAuto: "Auto", deviceModePhone: "Phone", deviceModeTablet: "Tablet" });
Object.assign(translations.ar, { deviceModeTitle: "حجم الجهاز", deviceModeAuto: "تلقائي", deviceModePhone: "هاتف", deviceModeTablet: "جهاز لوحي" });
Object.assign(translations.ru, { deviceModeTitle: "Режим экрана", deviceModeAuto: "Авто", deviceModePhone: "Телефон", deviceModeTablet: "Планшет" });
Object.assign(translations.es, { deviceModeTitle: "Tamaño del dispositivo", deviceModeAuto: "Auto", deviceModePhone: "Móvil", deviceModeTablet: "Tableta" });
Object.assign(translations.fr, { deviceModeTitle: "Format de l’écran", deviceModeAuto: "Auto", deviceModePhone: "Téléphone", deviceModeTablet: "Tablette" });
Object.assign(translations.tr, { deviceModeTitle: "Cihaz boyutu", deviceModeAuto: "Otomatik", deviceModePhone: "Telefon", deviceModeTablet: "Tablet" });
Object.assign(translations.de, { reviewPhotoLabel: "Foto (optional)", adminReplyPhotoLabel: "Antwortfoto (optional)", reviewCloudSetup: "Foto-Uploads werden nach der Cloud-Einrichtung aktiviert.", adminEmailLabel: "Admin-E-Mail", adminLoginError: "Anmeldung fehlgeschlagen.", adminCloudError: "Anmeldung oder Admin-Berechtigung fehlt.", adminCloudAccessText: "Melde dich mit dem Schul-Admin-Konto an.", adminPasswordLabel: "Passwort", reviewCloudError: "Speichern fehlgeschlagen. Prüfe die Cloud-Einrichtung.", photoError: "Das Bild ist zu groß oder hat ein nicht unterstütztes Format." });
Object.assign(translations.en, { reviewPhotoLabel: "Photo (optional)", adminReplyPhotoLabel: "Reply photo (optional)", reviewCloudSetup: "Photo uploads will be enabled after cloud setup.", adminEmailLabel: "Admin email", adminLoginError: "Sign-in failed.", adminCloudError: "Sign-in failed or admin access is not assigned.", adminCloudAccessText: "Sign in with the school admin account.", adminPasswordLabel: "Password", reviewCloudError: "Could not save. Check the cloud setup.", photoError: "The image is too large or its format is not supported." });
Object.assign(translations.ar, { reviewPhotoLabel: "صورة (اختياري)", adminReplyPhotoLabel: "صورة الرد (اختياري)", reviewCloudSetup: "سيتم تفعيل رفع الصور بعد إعداد التخزين السحابي.", adminEmailLabel: "بريد المسؤول", adminLoginError: "تعذر تسجيل الدخول.", adminCloudError: "فشل تسجيل الدخول أو لم يتم منح صلاحية الإدارة.", adminCloudAccessText: "سجّل الدخول بحساب إدارة المدرسة.", adminPasswordLabel: "كلمة المرور", reviewCloudError: "تعذر الحفظ. تحقق من إعداد السحابة.", photoError: "الصورة كبيرة جدًا أو تنسيقها غير مدعوم." });
Object.assign(translations.ru, { reviewPhotoLabel: "Фото (необязательно)", adminReplyPhotoLabel: "Фото к ответу (необязательно)", reviewCloudSetup: "Загрузка фото станет доступна после настройки облака.", adminEmailLabel: "Почта администратора", adminLoginError: "Не удалось войти.", adminCloudError: "Не удалось войти или аккаунту не выданы права администратора.", adminCloudAccessText: "Войди через аккаунт школьного администратора.", adminPasswordLabel: "Пароль", reviewCloudError: "Не удалось сохранить. Проверь настройки облака.", photoError: "Файл слишком большой или его формат не поддерживается.", adminSignOut: "Выйти" });
Object.assign(translations.es, { reviewPhotoLabel: "Foto (opcional)", adminReplyPhotoLabel: "Foto de respuesta (opcional)", reviewCloudSetup: "La carga de fotos estará disponible tras configurar la nube.", adminEmailLabel: "Correo del administrador", adminLoginError: "No se pudo iniciar sesión.", adminCloudError: "No se pudo iniciar sesión o falta el permiso de administrador.", adminCloudAccessText: "Inicia sesión con la cuenta de administración escolar.", adminPasswordLabel: "Contraseña", reviewCloudError: "No se pudo guardar. Comprueba la configuración de la nube.", photoError: "La imagen es demasiado grande o su formato no está admitido." });
Object.assign(translations.fr, { reviewPhotoLabel: "Photo (facultatif)", adminReplyPhotoLabel: "Photo de réponse (facultatif)", reviewCloudSetup: "L’envoi de photos sera activé après la configuration du cloud.", adminEmailLabel: "E-mail admin", adminLoginError: "Échec de la connexion.", adminCloudError: "Connexion impossible ou droits admin absents.", adminCloudAccessText: "Connecte-toi avec le compte admin de l’école.", adminPasswordLabel: "Mot de passe", reviewCloudError: "Échec de l’enregistrement. Vérifie la configuration cloud.", photoError: "L’image est trop volumineuse ou son format n’est pas pris en charge." });
Object.assign(translations.tr, { reviewPhotoLabel: "Fotoğraf (isteğe bağlı)", adminReplyPhotoLabel: "Yanıt fotoğrafı (isteğe bağlı)", reviewCloudSetup: "Fotoğraf yükleme bulut kurulumu tamamlanınca açılır.", adminEmailLabel: "Yönetici e-postası", adminLoginError: "Giriş başarısız.", adminCloudError: "Giriş başarısız veya yönetici yetkisi verilmemiş.", adminCloudAccessText: "Okul yönetici hesabıyla giriş yap.", adminPasswordLabel: "Şifre", reviewCloudError: "Kaydedilemedi. Bulut kurulumunu kontrol et.", photoError: "Görsel çok büyük veya biçimi desteklenmiyor." });
Object.assign(translations.de, { adminSignOut: "Abmelden" });
Object.assign(translations.en, { adminSignOut: "Sign out" });
Object.assign(translations.ar, { adminSignOut: "تسجيل الخروج" });
Object.assign(translations.es, { adminSignOut: "Cerrar sesión" });
Object.assign(translations.fr, { adminSignOut: "Se déconnecter" });
Object.assign(translations.tr, { adminSignOut: "Çıkış yap" });
Object.assign(translations.de, { photoPending: "Foto wartet auf Freigabe", photoApprove: "Freigeben", photoRevoke: "Veröffentlichung zurücknehmen" });
Object.assign(translations.en, { photoPending: "Photo awaiting approval", photoApprove: "Approve", photoRevoke: "Unpublish" });
Object.assign(translations.ar, { photoPending: "الصورة بانتظار الموافقة", photoApprove: "موافقة", photoRevoke: "إلغاء النشر" });
Object.assign(translations.ru, { photoPending: "Фото ожидает одобрения", photoApprove: "Одобрить фото", photoRevoke: "Снять с публикации" });
Object.assign(translations.es, { photoPending: "Foto pendiente de aprobación", photoApprove: "Aprobar", photoRevoke: "Retirar" });
Object.assign(translations.fr, { photoPending: "Photo en attente d’approbation", photoApprove: "Approuver", photoRevoke: "Retirer" });
Object.assign(translations.tr, { photoPending: "Fotoğraf onay bekliyor", photoApprove: "Onayla", photoRevoke: "Yayından kaldır" });
Object.assign(translations.de, { photoPreviewUnavailable: "Foto-Vorschau konnte nicht geladen werden.", reviewReactionUsed: "Diese Reaktion hast du bereits verwendet.", historyFact: "Die Stadtschule ist eine Ganztagsschule für die Klassen 5 bis 10.", lessonFact: "Viele Unterrichtsstunden dauern 90 Minuten.", choiceFact: "Ab Klasse 7 können Schülerinnen und Schüler Wahlpflichtfächer wählen.", creditComments: "Kommentare und Bereiche: Konstantin Korneev, Klasse 7A", creditIdeas: "Vielen Dank an Herrn Hafner für die Ideen." });
Object.assign(translations.en, { photoPreviewUnavailable: "The photo preview could not be loaded.", reviewReactionUsed: "You have already used this reaction.", historyFact: "Stadtschule is an all-day school for grades 5 to 10.", lessonFact: "Many lessons last 90 minutes.", choiceFact: "Students can choose elective subjects from grade 7.", creditComments: "Comments and sections: Konstantin Korneev, class 7A", creditIdeas: "Many thanks to Mr Hafner for the ideas." });
Object.assign(translations.ar, { photoPreviewUnavailable: "تعذر تحميل معاينة الصورة.", reviewReactionUsed: "لقد استخدمت هذا التفاعل بالفعل.", historyFact: "مدرسة شتادتشوله مدرسة دوام كامل للصفوف من الخامس إلى العاشر.", lessonFact: "تستمر كثير من الحصص 90 دقيقة.", choiceFact: "يمكن للطلاب اختيار مواد اختيارية ابتداءً من الصف السابع.", creditComments: "التعليقات والأقسام: Konstantin Korneev، الصف 7A", creditIdeas: "جزيل الشكر للسيد Hafner على الأفكار." });
Object.assign(translations.ru, { photoPreviewUnavailable: "Не удалось загрузить превью фотографии.", reviewReactionUsed: "Ты уже поставил эту реакцию.", historyFact: "Stadtschule — школа полного дня для учеников с 5-го по 10-й класс.", lessonFact: "Многие занятия длятся 90 минут.", choiceFact: "С 7-го класса ученики могут выбирать дополнительные предметы.", creditComments: "Комментарии и разделы: Константин Корнеев, 7А", creditIdeas: "Большое спасибо господину Хафнеру за идеи." });
Object.assign(translations.es, { photoPreviewUnavailable: "No se pudo cargar la vista previa de la foto.", reviewReactionUsed: "Ya has usado esta reacción.", historyFact: "Stadtschule es un centro de jornada completa para los cursos 5.º a 10.º.", lessonFact: "Muchas clases duran 90 minutos.", choiceFact: "Desde 7.º se pueden elegir asignaturas optativas.", creditComments: "Comentarios y secciones: Konstantin Korneev, clase 7A", creditIdeas: "Muchas gracias al señor Hafner por las ideas." });
Object.assign(translations.fr, { photoPreviewUnavailable: "Impossible de charger l’aperçu de la photo.", reviewReactionUsed: "Tu as déjà utilisé cette réaction.", historyFact: "La Stadtschule est un établissement à temps plein pour les classes de la 5e à la 10e.", lessonFact: "De nombreux cours durent 90 minutes.", choiceFact: "Les élèves peuvent choisir des options à partir de la 7e.", creditComments: "Commentaires et sections : Konstantin Korneev, classe 7A", creditIdeas: "Merci beaucoup à M. Hafner pour ses idées." });
Object.assign(translations.tr, { photoPreviewUnavailable: "Fotoğraf önizlemesi yüklenemedi.", reviewReactionUsed: "Bu tepkiyi zaten kullandın.", historyFact: "Stadtschule, 5–10. sınıflar için tam gün eğitim veren bir okuldur.", lessonFact: "Birçok ders 90 dakika sürer.", choiceFact: "Öğrenciler 7. sınıftan itibaren seçmeli ders seçebilir.", creditComments: "Yorumlar ve bölümler: Konstantin Korneev, 7A sınıfı", creditIdeas: "Fikirleri için Bay Hafner'e çok teşekkürler." });
Object.assign(translations.de, {
  developerCredit: "Entwickelt von Konstantin Kornieiev",
  creditProgram: "Programmiert von Konstantin Kornieiev, Klasse 7A", creditDesign: "Design von Konstantin Kornieiev, Klasse 7A",
  creditTest: "Getestet von Konstantin Kornieiev und Vladyslav Shevchenko, beide Klasse 7A",
  creditComments: "Das Kommentarsystem wurde von Konstantin Kornieiev aus der Klasse 7A entwickelt.",
  creditAdmin: "Auch das Administrationssystem wurde von Konstantin Kornieiev aus der Klasse 7A entwickelt.",
  cipherEggButton: "Die geheime Botschaft entdecken", cipherEggSecret: "🕵️ Geheime Botschaft entschlüsselt! Du hast den Fall geknackt.",
  keyboardEggSecret: "🗝️ Geheimcode erkannt: Konstantin Kornieiev und die Klasse 7A grüßen dich!"
});
Object.assign(translations.en, {
  developerCredit: "Developed by Konstantin Kornieiev",
  creditProgram: "Programmed by Konstantin Kornieiev, class 7A", creditDesign: "Designed by Konstantin Kornieiev, class 7A",
  creditTest: "Tested by Konstantin Kornieiev and Vladyslav Shevchenko, both class 7A",
  creditComments: "The comment system was developed by Konstantin Kornieiev from class 7A.",
  creditAdmin: "The admin system was also developed by Konstantin Kornieiev from class 7A.",
  cipherEggButton: "Discover the secret message", cipherEggSecret: "🕵️ Secret message decoded! You cracked the case.",
  keyboardEggSecret: "🗝️ Secret code recognized: Konstantin Kornieiev and class 7A say hello!"
});
Object.assign(translations.ar, {
  developerCredit: "طوّره Konstantin Kornieiev",
  creditProgram: "البرمجة: Konstantin Kornieiev، الصف 7A", creditDesign: "التصميم: Konstantin Kornieiev، الصف 7A",
  creditTest: "الاختبار: Konstantin Kornieiev وVladyslav Shevchenko، الصف 7A",
  creditComments: "طوّر Konstantin Kornieiev من الصف 7A نظام التعليقات.",
  creditAdmin: "كما طوّر Konstantin Kornieiev من الصف 7A نظام الإدارة.",
  cipherEggButton: "اكتشف الرسالة السرية", cipherEggSecret: "🕵️ فُكّت الرسالة السرية! لقد حللت القضية.",
  keyboardEggSecret: "🗝️ تم التعرّف على الرمز السري: يحييك Konstantin Kornieiev والصف 7A!"
});
Object.assign(translations.ru, {
  developerCredit: "Разработано Konstantin Kornieiev",
  creditProgram: "Программирование: Konstantin Kornieiev, 7А", creditDesign: "Дизайн: Konstantin Kornieiev, 7А",
  creditTest: "Тестирование: Konstantin Kornieiev и Vladyslav Shevchenko, 7А",
  creditComments: "Систему комментариев разработал Konstantin Kornieiev из класса 7А.",
  creditAdmin: "Систему администрирования тоже разработал Konstantin Kornieiev из класса 7А.",
  cipherEggButton: "Открыть секретное послание", cipherEggSecret: "🕵️ Тайное послание расшифровано! Дело раскрыто.",
  keyboardEggSecret: "🗝️ Секретный код принят: Konstantin Kornieiev и класс 7А передают привет!"
});
Object.assign(translations.es, {
  developerCredit: "Desarrollado por Konstantin Kornieiev",
  creditProgram: "Programación: Konstantin Kornieiev, clase 7A", creditDesign: "Diseño: Konstantin Kornieiev, clase 7A",
  creditTest: "Pruebas: Konstantin Kornieiev y Vladyslav Shevchenko, ambos de 7A",
  creditComments: "El sistema de comentarios fue desarrollado por Konstantin Kornieiev, de la clase 7A.",
  creditAdmin: "El sistema de administración también fue desarrollado por Konstantin Kornieiev, de la clase 7A.",
  cipherEggButton: "Descubre el mensaje secreto", cipherEggSecret: "🕵️ ¡Mensaje secreto descifrado! Has resuelto el caso.",
  keyboardEggSecret: "🗝️ Código secreto reconocido: ¡Konstantin Kornieiev y la clase 7A te saludan!"
});
Object.assign(translations.fr, {
  developerCredit: "Développé par Konstantin Kornieiev",
  creditProgram: "Programmation : Konstantin Kornieiev, classe 7A", creditDesign: "Design : Konstantin Kornieiev, classe 7A",
  creditTest: "Tests : Konstantin Kornieiev et Vladyslav Shevchenko, tous deux en 7A",
  creditComments: "Le système de commentaires a été développé par Konstantin Kornieiev, de la classe 7A.",
  creditAdmin: "Le système d’administration a également été développé par Konstantin Kornieiev, de la classe 7A.",
  cipherEggButton: "Découvrir le message secret", cipherEggSecret: "🕵️ Message secret déchiffré ! Affaire résolue.",
  keyboardEggSecret: "🗝️ Code secret reconnu : Konstantin Kornieiev et la classe 7A te saluent !"
});
Object.assign(translations.tr, {
  developerCredit: "Konstantin Kornieiev tarafından geliştirildi",
  creditProgram: "Programlama: Konstantin Kornieiev, 7A sınıfı", creditDesign: "Tasarım: Konstantin Kornieiev, 7A sınıfı",
  creditTest: "Test edenler: Konstantin Kornieiev ve Vladyslav Shevchenko, ikisi de 7A sınıfında",
  creditComments: "Yorum sistemi 7A sınıfından Konstantin Kornieiev tarafından geliştirildi.",
  creditAdmin: "Yönetim sistemi de 7A sınıfından Konstantin Kornieiev tarafından geliştirildi.",
  cipherEggButton: "Gizli mesajı keşfet", cipherEggSecret: "🕵️ Gizli mesaj çözüldü! Dosyayı kapattın.",
  keyboardEggSecret: "🗝️ Gizli kod tanındı: Konstantin Kornieiev ve 7A sınıfı sana selam söylüyor!"
});
Object.assign(translations.de, { activityFact: "Im Juli 2026 nahmen fünf Schüler am Schachturnier in Preußisch Oldendorf teil.", mediatorFact: "Neun Schüler absolvierten eine Streitschlichter-Ausbildung." });
Object.assign(translations.en, { activityFact: "In July 2026, five students took part in a chess tournament in Preußisch Oldendorf.", mediatorFact: "Nine students completed peer-mediator training." });
Object.assign(translations.ar, { activityFact: "في يوليو 2026، شارك خمسة طلاب في بطولة شطرنج في بريوسيش أولدندورف.", mediatorFact: "أكمل تسعة طلاب تدريبًا على الوساطة بين الأقران." });
Object.assign(translations.ru, { activityFact: "В июле 2026 года пять учеников участвовали в шахматном турнире в Пройсиш-Ольдендорфе.", mediatorFact: "Девять учеников прошли подготовку школьных медиаторов." });
Object.assign(translations.es, { activityFact: "En julio de 2026, cinco estudiantes participaron en un torneo de ajedrez en Preußisch Oldendorf.", mediatorFact: "Nueve estudiantes completaron una formación de mediación escolar." });
Object.assign(translations.fr, { activityFact: "En juillet 2026, cinq élèves ont participé à un tournoi d’échecs à Preußisch Oldendorf.", mediatorFact: "Neuf élèves ont suivi une formation de médiation entre pairs." });
Object.assign(translations.tr, { activityFact: "Temmuz 2026'da beş öğrenci Preußisch Oldendorf'daki satranç turnuvasına katıldı.", mediatorFact: "Dokuz öğrenci akran arabuluculuğu eğitimi aldı." });
Object.assign(translations.de, { factsSource: "Quelle: offizielle Schulwebsite" });
Object.assign(translations.en, { factsSource: "Source: official school website" });
Object.assign(translations.ar, { factsSource: "المصدر: الموقع الرسمي للمدرسة" });
Object.assign(translations.ru, { factsSource: "Источник: официальный сайт школы" });
Object.assign(translations.es, { factsSource: "Fuente: sitio web oficial de la escuela" });
Object.assign(translations.fr, { factsSource: "Source : site officiel de l’école" });
Object.assign(translations.tr, { factsSource: "Kaynak: okulun resmî sitesi" });
Object.assign(translations.de, { navSchool: "Unsere Schule", schoolProfileEyebrow: "ÜBER DIE SCHULE", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Gemeinsam wachsen.</span>", schoolProfileDescription: "Eine Ganztagsschule für die Jahrgänge 5 bis 10: Hier gehören Lernen, individuelle Förderung und Gemeinschaft zusammen.", schoolFactsTitle: "Unsere Schule im Überblick", schoolPhotoAlt: "Schulgebäude der Stadtschule Lübbecke", schoolLinkCta: "Zur offiziellen Schulwebsite" });
Object.assign(translations.en, { navSchool: "Our school", schoolProfileEyebrow: "ABOUT OUR SCHOOL", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Growing together.</span>", schoolProfileDescription: "An all-day school for grades 5–10, where learning, individual support and community go hand in hand.", schoolFactsTitle: "Our school at a glance", schoolPhotoAlt: "Stadtschule Lübbecke school building", schoolLinkCta: "Visit the official school website" });
Object.assign(translations.ar, { navSchool: "مدرستنا", schoolProfileEyebrow: "عن مدرستنا", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>ننمو معًا.</span>", schoolProfileDescription: "مدرسة بدوام كامل للصفوف من الخامس إلى العاشر، تجمع بين التعلّم والدعم الفردي وروح المجتمع.", schoolFactsTitle: "مدرستنا في لمحة", schoolPhotoAlt: "مبنى مدرسة Stadtschule Lübbecke", schoolLinkCta: "زيارة الموقع الرسمي للمدرسة" });
Object.assign(translations.ru, { navSchool: "О школе", schoolProfileEyebrow: "О НАШЕЙ ШКОЛЕ", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Растём вместе.</span>", schoolProfileDescription: "Школа полного дня для 5–10 классов, где учёба, индивидуальная поддержка и дружное сообщество идут вместе.", schoolFactsTitle: "Наша школа вкратце", schoolPhotoAlt: "Здание школы Stadtschule Lübbecke", schoolLinkCta: "Официальный сайт школы" });
Object.assign(translations.es, { navSchool: "Nuestra escuela", schoolProfileEyebrow: "SOBRE NUESTRA ESCUELA", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Crecemos juntos.</span>", schoolProfileDescription: "Un centro de jornada completa para los cursos 5.º a 10.º, donde el aprendizaje, el apoyo individual y la comunidad van de la mano.", schoolFactsTitle: "Nuestra escuela de un vistazo", schoolPhotoAlt: "Edificio de la Stadtschule Lübbecke", schoolLinkCta: "Visitar el sitio web oficial de la escuela" });
Object.assign(translations.fr, { navSchool: "Notre école", schoolProfileEyebrow: "À PROPOS DE NOTRE ÉCOLE", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Grandir ensemble.</span>", schoolProfileDescription: "Un établissement à temps plein pour les classes de la 5e à la 10e, où apprentissage, accompagnement individuel et communauté vont de pair.", schoolFactsTitle: "Notre école en bref", schoolPhotoAlt: "Bâtiment de la Stadtschule Lübbecke", schoolLinkCta: "Visiter le site officiel de l’école" });
Object.assign(translations.tr, { navSchool: "Okulumuz", schoolProfileEyebrow: "OKULUMUZ HAKKINDA", schoolProfileTitle: "Stadtschule Lübbecke.<br><span>Birlikte büyüyoruz.</span>", schoolProfileDescription: "5–10. sınıflar için tam gün eğitim veren okulumuzda öğrenme, bireysel destek ve topluluk duygusu bir aradadır.", schoolFactsTitle: "Okulumuz hakkında kısa bilgiler", schoolPhotoAlt: "Stadtschule Lübbecke okul binası", schoolLinkCta: "Okulun resmî sitesini ziyaret et" });
Object.assign(translations.de, {
  intelEyebrow: "GEHEIME AKTE", intelTitle: "Deine Beute.<br><span>Dein Ruf.</span>", intelDescription: "Knacke die Fälle, sammle Beweise und finde fünf versteckte Bonusobjekte.",
  achievementsTitle: "AUSZEICHNUNGEN", collectionTitle: "FALLKARTEN", collectionDescription: "Jede gelöste Station schaltet eine Karte frei.",
  bonusTitle: "GEHEIME BEUTE", bonusDescription: "Finde die fünf versteckten Symbole für Bonuspunkte.",
  achievementEarned: "FREIGESCHALTET", achievementLocked: "NOCH GESPERRT", collectionUnlocked: "GESICHERT", collectionLocked: "VERSCHLÜSSELT",
  eggFound: "BONUS +25", eggHidden: "VERSTECKTES OBJEKT", eggPoints: "{count} BONUS-PUNKTE",
  intelAchievements: [{ title: "Erster Fall", text: "Löse deine erste Station." }, { title: "Meisterdetektiv", text: "Schließe alle sieben Stationen ab." }, { title: "Schattenjäger", text: "Finde alle fünf Bonusobjekte." }],
  intelEggs: ["Spur im Schatten", "Der alte Schlüssel", "Schwarzer Diamant", "Die schwarze Katze", "Das Ermittler-Abzeichen"]
});
Object.assign(translations.en, {
  intelEyebrow: "CLASSIFIED FILE", intelTitle: "Your loot.<br><span>Your legend.</span>", intelDescription: "Crack the cases, collect the evidence and uncover five hidden bonus items.",
  achievementsTitle: "ACHIEVEMENTS", collectionTitle: "CASE CARDS", collectionDescription: "Solve a station to unlock its card.",
  bonusTitle: "SECRET LOOT", bonusDescription: "Find five hidden symbols to earn bonus points.",
  achievementEarned: "UNLOCKED", achievementLocked: "STILL LOCKED", collectionUnlocked: "COLLECTED", collectionLocked: "ENCRYPTED",
  eggFound: "BONUS +25", eggHidden: "HIDDEN ITEM", eggPoints: "{count} BONUS POINTS",
  intelAchievements: [{ title: "First Case", text: "Solve your first station." }, { title: "Master Detective", text: "Complete all seven stations." }, { title: "Shadow Hunter", text: "Find all five bonus items." }],
  intelEggs: ["Shadow clue", "The old key", "Black diamond", "Black cat", "Detective badge"]
});
Object.assign(translations.ar, {
  intelEyebrow: "ملف سري", intelTitle: "غنيمتك.<br><span>أسطورتك.</span>", intelDescription: "حلّ القضايا واجمع الأدلة واكتشف خمسة أشياء إضافية مخفية.",
  achievementsTitle: "الإنجازات", collectionTitle: "بطاقات القضايا", collectionDescription: "حلّ محطة لفتح بطاقتها.",
  bonusTitle: "الغنائم السرية", bonusDescription: "اعثر على خمسة رموز مخفية لتحصل على نقاط إضافية.",
  achievementEarned: "تم الفتح", achievementLocked: "مغلق", collectionUnlocked: "تم الجمع", collectionLocked: "مشفّرة",
  eggFound: "مكافأة +٢٥", eggHidden: "عنصر مخفي", eggPoints: "{count} نقطة إضافية",
  intelAchievements: [{ title: "القضية الأولى", text: "حلّ محطتك الأولى." }, { title: "المحقق الخبير", text: "أكمل المحطات السبع." }, { title: "صياد الظلال", text: "اعثر على العناصر الإضافية الخمسة." }],
  intelEggs: ["أثر في الظل", "المفتاح القديم", "الماسة السوداء", "القطة السوداء", "شارة المحقق"]
});
Object.assign(translations.ru, {
  intelEyebrow: "СЕКРЕТНОЕ ДЕЛО", intelTitle: "Твоя добыча.<br><span>Твоя слава.</span>", intelDescription: "Раскрой дела, собери улики и найди пять спрятанных бонусных предметов.",
  achievementsTitle: "ДОСТИЖЕНИЯ", collectionTitle: "КАРТОЧКИ ДЕЛ", collectionDescription: "Пройди станцию, чтобы открыть её карточку.",
  bonusTitle: "ТАЙНЫЕ БОНУСЫ", bonusDescription: "Найди пять спрятанных символов и получи бонусные очки.",
  achievementEarned: "ОТКРЫТО", achievementLocked: "ПОКА ЗАКРЫТО", collectionUnlocked: "СОБРАНО", collectionLocked: "ЗАШИФРОВАНО",
  eggFound: "БОНУС +25", eggHidden: "ТАЙНЫЙ ПРЕДМЕТ", eggPoints: "{count} БОНУСНЫХ ОЧКОВ",
  intelAchievements: [{ title: "Первое дело", text: "Пройди первую станцию." }, { title: "Мастер-сыщик", text: "Пройди все семь станций." }, { title: "Охотник за тенями", text: "Найди все пять бонусных предметов." }],
  intelEggs: ["След в тени", "Старый ключ", "Чёрный алмаз", "Чёрная кошка", "Значок сыщика"]
});
Object.assign(translations.es, {
  intelEyebrow: "EXPEDIENTE SECRETO", intelTitle: "Tu botín.<br><span>Tu leyenda.</span>", intelDescription: "Resuelve los casos, reúne pruebas y encuentra cinco objetos de bonificación ocultos.",
  achievementsTitle: "LOGROS", collectionTitle: "CARTAS DE CASO", collectionDescription: "Resuelve una estación para desbloquear su carta.",
  bonusTitle: "BOTÍN SECRETO", bonusDescription: "Encuentra cinco símbolos ocultos para ganar puntos extra.",
  achievementEarned: "DESBLOQUEADO", achievementLocked: "AÚN BLOQUEADO", collectionUnlocked: "RECOGIDA", collectionLocked: "ENCRIPTADA",
  eggFound: "BONIFICACIÓN +25", eggHidden: "OBJETO OCULTO", eggPoints: "{count} PUNTOS EXTRA",
  intelAchievements: [{ title: "Primer caso", text: "Resuelve tu primera estación." }, { title: "Detective experto", text: "Completa las siete estaciones." }, { title: "Cazador de sombras", text: "Encuentra los cinco objetos extra." }],
  intelEggs: ["Pista en la sombra", "La llave antigua", "Diamante negro", "Gato negro", "Insignia de detective"]
});
Object.assign(translations.fr, {
  intelEyebrow: "DOSSIER SECRET", intelTitle: "Ton butin.<br><span>Ta légende.</span>", intelDescription: "Résous les affaires, rassemble les preuves et trouve cinq objets bonus cachés.",
  achievementsTitle: "SUCCÈS", collectionTitle: "CARTES D’AFFAIRES", collectionDescription: "Résous une étape pour débloquer sa carte.",
  bonusTitle: "BUTIN SECRET", bonusDescription: "Trouve cinq symboles cachés pour gagner des points bonus.",
  achievementEarned: "DÉBLOQUÉ", achievementLocked: "ENCORE VERROUILLÉ", collectionUnlocked: "COLLECTÉE", collectionLocked: "CHIFFRÉE",
  eggFound: "BONUS +25", eggHidden: "OBJET CACHÉ", eggPoints: "{count} POINTS BONUS",
  intelAchievements: [{ title: "Première affaire", text: "Résous ta première étape." }, { title: "Détective expert", text: "Termine les sept étapes." }, { title: "Chasseur d’ombres", text: "Trouve les cinq objets bonus." }],
  intelEggs: ["Indice dans l’ombre", "La vieille clé", "Diamant noir", "Chat noir", "Insigne de détective"]
});
Object.assign(translations.tr, {
  intelEyebrow: "GİZLİ DOSYA", intelTitle: "Ganimetin.<br><span>Efsanen.</span>", intelDescription: "Dosyaları çöz, kanıtları topla ve gizlenmiş beş bonus eşyayı bul.",
  achievementsTitle: "BAŞARILAR", collectionTitle: "DOSYA KARTLARI", collectionDescription: "Kartını açmak için bir istasyonu tamamla.",
  bonusTitle: "GİZLİ GANİMET", bonusDescription: "Bonus puan kazanmak için gizli beş sembolü bul.",
  achievementEarned: "AÇILDI", achievementLocked: "HÂLÂ KİLİTLİ", collectionUnlocked: "TOPLANDI", collectionLocked: "ŞİFRELİ",
  eggFound: "BONUS +25", eggHidden: "GİZLİ EŞYA", eggPoints: "{count} BONUS PUAN",
  intelAchievements: [{ title: "İlk Dosya", text: "İlk istasyonunu tamamla." }, { title: "Usta Dedektif", text: "Yedi istasyonun tamamını bitir." }, { title: "Gölge Avcısı", text: "Beş bonus eşyanın tümünü bul." }],
  intelEggs: ["Gölgede iz", "Eski anahtar", "Siyah elmas", "Siyah kedi", "Dedektif rozeti"]
});

let currentLanguage = "de";
let siteSettings = { brightness: 105, soundEffects: true, soundVolume: 80, layoutMode: "auto" };
let clickAudioContext;
let emojiGameResult = "";
let creditTapCount = 0;
let colorSequence = [];
let cipherTapCount = 0;
let secretCodeBuffer = "";
let secretCodeToastTimer;
const defaultReviews = [];
const ADMIN_SECRET = "AdminSS";
const LEGACY_ADMIN_SECRET = "stadtschule";
const REVIEW_REACTION_VOTES_KEY = "missionReviewReactionVotes";
const REVIEW_VISITOR_ID_KEY = "missionReviewVisitorId";
const HOME_REACTION_STATE_KEY = "missionHomeReactionState";
const SECRET_EGGS_KEY = "missionSecretEggs";
const supabaseConfig = window.MISSION_SUPABASE_CONFIG || {};
const supabaseClient = window.supabase?.createClient && supabaseConfig.url && supabaseConfig.anonKey
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;
let cloudReviews = [];
let cloudAdmin = false;

function isAdminMode() {
  if (supabaseClient) return cloudAdmin;
  try {
    const params = new URLSearchParams(window.location.search);
    const urlToken = (params.get("admin") || "").trim();
    const localFlag = localStorage.getItem("missionAdminMode");
    const normalizedToken = urlToken.toLowerCase();
    const isValidToken = normalizedToken === ADMIN_SECRET.toLowerCase() || normalizedToken === LEGACY_ADMIN_SECRET.toLowerCase();
    if (isValidToken || localFlag === "true") {
      localStorage.setItem("missionAdminMode", "true");
      return true;
    }
    if (urlToken.toLowerCase() === "off") {
      localStorage.removeItem("missionAdminMode");
      return false;
    }
    return Boolean(localFlag === "true");
  } catch (error) {
    return false;
  }
}

function setAdminMode(enabled) {
  if (supabaseClient) {
    cloudAdmin = enabled;
    renderReviews();
    return;
  }
  try {
    if (enabled) {
      localStorage.setItem("missionAdminMode", "true");
    } else {
      localStorage.removeItem("missionAdminMode");
    }
    renderReviews();
  } catch (error) {
    console.error("Mission Stadtschule: Admin-Status konnte nicht gespeichert werden.", error);
  }
}

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
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = translations[language][element.dataset.i18nTitle];
    if (value !== undefined) element.title = value;
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
  renderSchoolStory();
  renderSettings();
  setCloudUi();
  renderEmojiGame();
  renderReviews();
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

function renderSettings() {
  const brightness = document.getElementById("siteBrightness");
  if (!brightness) return;
  brightness.value = String(siteSettings.brightness);
  const output = document.getElementById("brightnessValue");
  if (output) output.value = `${new Intl.NumberFormat(currentLanguage).format(siteSettings.brightness)}%`;
  const soundToggle = document.getElementById("soundEffects");
  if (soundToggle) soundToggle.checked = siteSettings.soundEffects;
  const soundVolume = document.getElementById("soundVolume");
  if (soundVolume) soundVolume.value = String(siteSettings.soundVolume);
  const soundVolumeValue = document.getElementById("soundVolumeValue");
  if (soundVolumeValue) soundVolumeValue.value = `${new Intl.NumberFormat(currentLanguage).format(siteSettings.soundVolume)}%`;
  document.querySelectorAll('input[name="layoutMode"]').forEach((input) => {
    input.checked = input.value === siteSettings.layoutMode;
  });
  document.documentElement.dataset.layoutMode = siteSettings.layoutMode;
}

function getReviews() {
  if (supabaseClient) return cloudReviews;
  try {
    const saved = JSON.parse(localStorage.getItem("missionReviews") || "null");
    if (!Array.isArray(saved)) return [...defaultReviews];
    return saved
      .filter((review) => review && typeof review.text === "string" && review.text.trim().length > 0)
      .map((review, index) => ({
        id: review.id || `review-${Date.now()}-${index}`,
        name: typeof review.name === "string" ? review.name.trim() || "Guest" : "Guest",
        text: review.text.trim(),
        rating: Number.isFinite(Number(review.rating)) ? Math.max(1, Math.min(5, Number(review.rating))) : 5,
        reply: typeof review.reply === "string" ? review.reply : "",
        photoUrl: typeof review.photoUrl === "string" ? review.photoUrl : "",
        replyPhotoUrl: typeof review.replyPhotoUrl === "string" ? review.replyPhotoUrl : "",
        reactions: review.reactions && typeof review.reactions === "object" ? review.reactions : { love: 0, great: 0, fire: 0 }
      }));
  } catch (error) {
    console.error("Mission Stadtschule: Bewertungen konnten nicht geladen werden.", error);
    return [...defaultReviews];
  }
}

function saveReviews(reviews) {
  try {
    localStorage.setItem("missionReviews", JSON.stringify(reviews));
    return true;
  } catch (error) {
    console.error("Mission Stadtschule: Bewertungen konnten nicht gespeichert werden.", error);
    return false;
  }
}

function makeBrowserUuid() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 15) | 64;
  bytes[8] = (bytes[8] & 63) | 128;
  return [...bytes].map((byte, index) => `${[4, 6, 8, 10].includes(index) ? "-" : ""}${byte.toString(16).padStart(2, "0")}`).join("");
}

function getReviewVisitorId() {
  try {
    let visitorId = localStorage.getItem(REVIEW_VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = makeBrowserUuid();
      localStorage.setItem(REVIEW_VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  } catch (error) {
    console.error("Mission Stadtschule: Reaktions-ID konnte nicht gespeichert werden.", error);
    return makeBrowserUuid();
  }
}

function getReviewReactionVotes() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_REACTION_VOTES_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function hasUsedReviewReaction(reviewId, reactionKey) {
  return Boolean(getReviewReactionVotes()[reviewId]?.includes(reactionKey));
}

function markReviewReactionUsed(reviewId, reactionKey) {
  const votes = getReviewReactionVotes();
  votes[reviewId] = [...new Set([...(votes[reviewId] || []), reactionKey])];
  try {
    localStorage.setItem(REVIEW_REACTION_VOTES_KEY, JSON.stringify(votes));
  } catch (error) {
    console.error("Mission Stadtschule: Reaktion konnte im Browser nicht markiert werden.", error);
  }
}

function getHomeReactionState() {
  try {
    return JSON.parse(localStorage.getItem(HOME_REACTION_STATE_KEY) || '{"voted":[],"counts":{}}');
  } catch (error) {
    return { voted: [], counts: {} };
  }
}

function renderHomeReactions() {
  const state = getHomeReactionState();
  document.querySelectorAll("[data-hero-reaction]").forEach((button) => {
    const key = button.dataset.heroReaction;
    const voted = state.voted.includes(key);
    const count = button.querySelector("[data-hero-count]");
    if (count) count.textContent = String(state.counts[key] || 0);
    button.disabled = voted;
    button.setAttribute("aria-pressed", String(voted));
    button.classList.toggle("is-pressed", voted);
  });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

async function loadCloudReviews() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("reviews")
    .select("id,name,text,rating,photo_path,photo_approved,reply,reply_photo_path,reply_photo_approved,reactions,created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  if (error) {
    console.error("Mission Stadtschule: Cloud-Bewertungen konnten nicht geladen werden.", error);
    return;
  }
  const photoPaths = [...new Set((data || []).flatMap((review) => [
    review.photo_path && (review.photo_approved || cloudAdmin) ? review.photo_path : "",
    review.reply_photo_path && (review.reply_photo_approved || cloudAdmin) ? review.reply_photo_path : ""
  ]).filter(Boolean))];
  const signedPhotoUrls = new Map();
  if (photoPaths.length) {
    const { data: signedPhotos, error: signedPhotoError } = await supabaseClient.storage
      .from("review-photos")
      .createSignedUrls(photoPaths, 300);
    if (signedPhotoError) {
      console.error("Mission Stadtschule: Foto-Vorschauen konnten nicht signiert werden.", signedPhotoError);
    } else {
      signedPhotos?.forEach((photo) => {
        if (photo.signedUrl) signedPhotoUrls.set(photo.path, photo.signedUrl);
        else console.error("Mission Stadtschule: Foto-Vorschau fehlt.", photo.error);
      });
    }
  }
  cloudReviews = (data || []).map((review) => ({
    id: review.id,
    name: review.name,
    text: review.text,
    rating: review.rating,
    photoPath: review.photo_path || "",
    photoApproved: Boolean(review.photo_approved),
    photoUrl: signedPhotoUrls.get(review.photo_path) || "",
    reply: review.reply || "",
    replyPhotoPath: review.reply_photo_path || "",
    replyPhotoApproved: Boolean(review.reply_photo_approved),
    replyPhotoUrl: signedPhotoUrls.get(review.reply_photo_path) || "",
    reactions: review.reactions || { love: 0, great: 0, fire: 0 }
  }));
  renderReviews();
}

async function getCloudPhotoUrl(path, approved) {
  if (!path || (!approved && !cloudAdmin)) return "";
  const { data, error } = await supabaseClient.storage.from("review-photos").createSignedUrl(path, 300);
  if (error || !data?.signedUrl) {
    console.error("Mission Stadtschule: Foto konnte nicht signiert werden.", error || new Error("Signed photo URL missing."));
    return "";
  }
  return data.signedUrl;
}

async function syncCloudAdmin() {
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    cloudAdmin = false;
    renderReviews();
    return;
  }
  const { data, error } = await supabaseClient
    .from("review_admins")
    .select("user_id")
    .eq("user_id", session.user.id)
    .maybeSingle();
  cloudAdmin = Boolean(data && !error);
  if (!cloudAdmin) await supabaseClient.auth.signOut();
  await loadCloudReviews();
}

async function uploadCloudPhoto(file, folder) {
  if (!file) return "";
  if (!supabaseClient || !["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 5 * 1024 * 1024) {
    throw new Error("unsupported-photo");
  }
  const filePath = `${folder}/${crypto.randomUUID()}.${file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg"}`;
  const { data, error } = await supabaseClient.storage
    .from("review-photos")
    .upload(filePath, file, { contentType: file.type, upsert: false });
  if (error) throw error;
  return data.path;
}

function setCloudUi() {
  const enabled = Boolean(supabaseClient);
  document.querySelectorAll("#reviewPhoto, #adminReplyPhoto").forEach((input) => { input.disabled = !enabled; });
  document.getElementById("reviewCloudNotice")?.classList.toggle("hidden", enabled);
  document.getElementById("adminEmailField")?.classList.toggle("hidden", !enabled);
  document.getElementById("adminSignOutButton")?.classList.toggle("hidden", !enabled || !cloudAdmin);
  const codeLabel = document.getElementById("adminAccessLabelText");
  const accessText = document.getElementById("adminAccessDescription");
  const codeInput = document.getElementById("adminAccessInput");
  if (enabled) {
    if (codeLabel) codeLabel.textContent = translations[currentLanguage].adminPasswordLabel;
    if (accessText) accessText.textContent = translations[currentLanguage].adminCloudAccessText;
    if (codeInput) {
      codeInput.maxLength = 100;
      codeInput.placeholder = translations[currentLanguage].adminPasswordLabel;
      codeInput.autocomplete = "current-password";
    }
  }
}

function showFormMessage(form, text, isError = false) {
  form.querySelector(".review-success, .review-error")?.remove();
  const message = document.createElement("p");
  message.className = isError ? "review-error" : "review-success";
  message.textContent = text;
  form.appendChild(message);
  window.setTimeout(() => message.remove(), 3500);
}

function showReviewActionMessage(text, isError = true) {
  const container = document.querySelector(".review-list-wrap");
  if (container) showFormMessage(container, text, isError);
}

function renderReviews() {
  const list = document.getElementById("reviewsList");
  if (!list) return;
  const reviews = getReviews();
  const emptyTitle = translations[currentLanguage]?.reviewEmptyTitle || translations.de.reviewEmptyTitle;
  const emptyText = translations[currentLanguage]?.reviewEmptyText || translations.de.reviewEmptyText;
  const adminLabel = translations[currentLanguage]?.reviewAdminLabel || translations.de.reviewAdminLabel;
  const noReply = translations[currentLanguage]?.reviewNoReply || translations.de.reviewNoReply;
  const reactionConfig = [
    { key: "love", emoji: "💙" },
    { key: "great", emoji: "👏" },
    { key: "fire", emoji: "🔥" }
  ];

  if (!reviews.length) {
    list.innerHTML = `
      <div class="review-empty">
        <div class="review-empty-emoji" aria-hidden="true">✨</div>
        <h3>${emptyTitle}</h3>
        <p>${emptyText}</p>
      </div>`;
  } else {
    list.innerHTML = reviews.map((review) => {
      const reactions = review.reactions || { love: 0, great: 0, fire: 0 };
      const stars = Array.from({ length: 5 }, (_, index) => `<span class="star-display ${index < (Number(review.rating) || 5) ? "filled" : ""}">★</span>`).join("");
      const adminActions = isAdminMode()
        ? `
          <div class="review-admin-actions">
            <button type="button" class="admin-delete-btn" data-delete-review="${escapeHtml(review.id)}">${translations[currentLanguage]?.adminDelete || translations.de.adminDelete}</button>
          </div>
        `
        : "";
      const reactionButtons = reactionConfig.map(({ key, emoji }) => {
        const count = Number(reactions[key] || 0);
        const alreadyUsed = hasUsedReviewReaction(review.id, key);
        return `
            <button type="button" class="review-reaction" data-review-reaction="${key}" data-review-id="${escapeHtml(review.id)}" aria-label="${emoji}" aria-pressed="${alreadyUsed}" ${alreadyUsed ? "disabled" : ""}>
            <span>${emoji}</span>
            <span>${count}</span>
          </button>
        `;
      }).join("");
      const reviewPhoto = review.photoUrl
        ? `<img class="review-photo" data-cloud-photo data-photo-path="${escapeHtml(review.photoPath)}" data-photo-approved="${review.photoApproved}" src="${escapeHtml(review.photoUrl)}" alt="${escapeHtml(review.name)}">`
        : "";
      const replyPhoto = review.replyPhotoUrl
        ? `<img class="review-photo review-reply-photo" data-cloud-photo data-photo-path="${escapeHtml(review.replyPhotoPath)}" data-photo-approved="${review.replyPhotoApproved}" src="${escapeHtml(review.replyPhotoUrl)}" alt="${escapeHtml(adminLabel)}">`
        : "";
      const photoUnavailable = (path, url) => path && !url && isAdminMode()
        ? `<p class="photo-preview-error">${translations[currentLanguage].photoPreviewUnavailable}</p>`
        : "";
      const photoModeration = (path, approved, kind) => {
        if (!path) return "";
        if (!isAdminMode()) return approved ? "" : `<p class="photo-pending">${translations[currentLanguage].photoPending}</p>`;
        return `
          <div class="photo-moderation">
            <span>${approved ? translations[currentLanguage].photoApprove : translations[currentLanguage].photoPending}</span>
            <button type="button" class="photo-moderation-button" data-photo-approval data-review-id="${escapeHtml(review.id)}" data-photo-kind="${kind}" data-next-state="${!approved}">
              ${approved ? translations[currentLanguage].photoRevoke : translations[currentLanguage].photoApprove}
            </button>
          </div>
        `;
      };
      const reviewPhotoModeration = photoModeration(review.photoPath, review.photoApproved, "review");
      const replyPhotoModeration = photoModeration(review.replyPhotoPath, review.replyPhotoApproved, "reply");

      return `
        <article class="review-card">
          <div class="review-meta">
            <strong>${escapeHtml(review.name || "Guest")}</strong>
            <span class="review-stars" aria-label="${(Number(review.rating) || 5)} out of 5 stars">${stars}</span>
          </div>
          <p class="review-text">${escapeHtml(review.text)}</p>
          ${reviewPhoto}
          ${photoUnavailable(review.photoPath, review.photoUrl)}
          ${reviewPhotoModeration}
          <div class="review-reactions" aria-label="Reactions">${reactionButtons}</div>
          ${adminActions}
          <div class="review-reply">
            <strong>${adminLabel}</strong>
            <p>${review.reply ? escapeHtml(review.reply) : noReply}</p>
            ${replyPhoto}
            ${photoUnavailable(review.replyPhotoPath, review.replyPhotoUrl)}
            ${replyPhotoModeration}
          </div>
        </article>
      `;
    }).join("");
  }

  const adminPanel = document.getElementById("adminPanel");
  const isAdmin = isAdminMode();
  if (adminPanel) {
    adminPanel.classList.toggle("hidden", !isAdmin);
    adminPanel.setAttribute("aria-hidden", String(!isAdmin));
  }
  setCloudUi();

  const toggleReviewsButton = document.getElementById("toggleReviewsButton");
  if (toggleReviewsButton) {
    const noReviews = reviews.length === 0;
    const buttonLabel = noReviews ? (translations[currentLanguage]?.reviewEmptyTitle || translations.de.reviewEmptyTitle) : (translations[currentLanguage]?.showReviewsButton || translations.de.showReviewsButton);
    toggleReviewsButton.innerHTML = `
      <span aria-hidden="true">${noReviews ? "✨" : "💬"}</span>
      <span>${buttonLabel}</span>
      <span aria-hidden="true">↓</span>
    `;
    toggleReviewsButton.classList.toggle("is-empty", noReviews);
  }

  const select = document.getElementById("adminReviewSelect");
  if (select) {
    const selectedValue = select.value || (reviews[0] && reviews[0].id) || "";
    select.innerHTML = reviews.length
      ? reviews.map((review) => `<option value="${escapeHtml(review.id)}">${escapeHtml(review.name || "Guest")}</option>`).join("")
      : '<option value="">—</option>';
    if (selectedValue && [...select.options].some((option) => option.value === selectedValue)) {
      select.value = selectedValue;
    }
  }
}

function renderEmojiGame() {
  document.querySelectorAll("[data-emoji-choice]").forEach((choice) => {
    const isCorrect = choice.dataset.emojiChoice === "🏫";
    choice.setAttribute("aria-label", translations[currentLanguage][isCorrect ? "emojiSchool" : choice.dataset.emojiChoice === "🌳" ? "emojiTree" : "emojiFootball"]);
    choice.setAttribute("aria-pressed", String(emojiGameResult === choice.dataset.emojiChoice));
    choice.classList.toggle("is-correct", emojiGameResult === choice.dataset.emojiChoice && isCorrect);
    choice.classList.toggle("is-wrong", emojiGameResult === choice.dataset.emojiChoice && !isCorrect);
  });
  const group = document.querySelector(".emoji-choices");
  if (group) group.setAttribute("aria-label", translations[currentLanguage].emojiGameGroup);
  const message = document.getElementById("emojiGameMessage");
  if (message) {
    message.textContent = emojiGameResult ? translations[currentLanguage][emojiGameResult === "🏫" ? "emojiGameCorrect" : "emojiGameWrong"] : "";
    message.classList.toggle("is-wrong", Boolean(emojiGameResult && emojiGameResult !== "🏫"));
  }
}

function saveSettings() {
  try {
    localStorage.setItem("missionSettings", JSON.stringify(siteSettings));
  } catch (error) {
    console.error("Mission Stadtschule: Einstellungen konnten nicht gespeichert werden.", error);
  }
}

function initSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("missionSettings") || "{}");
    if (Number.isFinite(saved.brightness)) siteSettings.brightness = Math.min(120, Math.max(80, Math.round(saved.brightness)));
    if (typeof saved.soundEffects === "boolean") siteSettings.soundEffects = saved.soundEffects;
    if (Number.isFinite(saved.soundVolume)) siteSettings.soundVolume = Math.min(100, Math.max(0, Math.round(saved.soundVolume)));
    if (["auto", "phone", "tablet"].includes(saved.layoutMode)) siteSettings.layoutMode = saved.layoutMode;
  } catch (error) {
    console.error("Mission Stadtschule: Einstellungen konnten nicht geladen werden.", error);
  }
  document.documentElement.style.setProperty("--display-brightness", String(siteSettings.brightness / 100));
  renderSettings();
}

function playClickSound() {
  if (!siteSettings.soundEffects || siteSettings.soundVolume === 0) return;
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return;
  try {
    clickAudioContext ||= new AudioContextConstructor();
    if (clickAudioContext.state === "suspended") clickAudioContext.resume().catch(() => {});
    const oscillator = clickAudioContext.createOscillator();
    const volume = clickAudioContext.createGain();
    const start = clickAudioContext.currentTime;
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(880, start);
    oscillator.frequency.exponentialRampToValueAtTime(587, start + 0.11);
    volume.gain.setValueAtTime(0.12 * siteSettings.soundVolume / 100, start);
    volume.gain.exponentialRampToValueAtTime(0.001, start + 0.13);
    oscillator.connect(volume);
    volume.connect(clickAudioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.13);
  } catch (error) {
    console.warn("Mission Stadtschule: Klicksound ist nicht verfügbar.", error);
  }
}

function stationText(station, key) {
  return station[key][currentLanguage] || station[key].de;
}

function normalize(s) {
  return String(s || "").trim().toLocaleUpperCase(currentLanguage)
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
      if (input.id === "finalInput") input.removeAttribute("aria-invalid");

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
function getSecretEggs() {
  try {
    const saved = localStorage.getItem(SECRET_EGGS_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) throw new TypeError("Gespeicherte Bonusobjekte sind kein Array.");
    return [...new Set(parsed.filter((egg) => Number.isInteger(egg) && egg >= 1 && egg <= 5))];
  } catch (error) {
    console.error("Mission Stadtschule: Bonusobjekte konnten nicht aus dem Browserspeicher geladen werden.", error);
    return [];
  }
}
function saveSecretEggs(eggs) {
  try {
    localStorage.setItem(SECRET_EGGS_KEY, JSON.stringify([...new Set(eggs)]));
    return true;
  } catch (error) {
    console.error("Mission Stadtschule: Bonusobjekt konnte nicht im Browserspeicher gespeichert werden.", error);
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
      : solved.length === 0
        ? translations[currentLanguage].progressWaiting
        : translations[currentLanguage].progressEach);
    status.classList.toggle("warning", Boolean(storageMessage));
  }
  renderStationLinks(solved);
  renderRewards(solved);
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
function renderRewards(solved = getSolved()) {
  const achievementGrid = document.getElementById("achievementGrid");
  const cardCollection = document.getElementById("cardCollection");
  const bonusCollection = document.getElementById("bonusCollection");
  if (!achievementGrid || !cardCollection || !bonusCollection) return;

  const copy = translations[currentLanguage];
  const foundEggs = getSecretEggs();
  const achievements = [
    { unlocked: solved.length > 0 },
    { unlocked: solved.length === Object.keys(stations).length },
    { unlocked: foundEggs.length === 5 }
  ];
  achievementGrid.innerHTML = achievements.map((achievement, index) => {
    const text = copy.intelAchievements[index];
    return `<article class="achievement-card ${achievement.unlocked ? "is-earned" : ""}">
      <span class="achievement-icon" aria-hidden="true">${["🕵️", "🏆", "🌑"][index]}</span>
      <div><h4>${text.title}</h4><p>${text.text}</p></div>
      <span class="achievement-status">${achievement.unlocked ? copy.achievementEarned : copy.achievementLocked}</span>
    </article>`;
  }).join("");

  cardCollection.innerHTML = Object.entries(stations).map(([key, station]) => {
    const number = Number(key);
    const unlocked = solved.includes(number);
    const title = stationText(station, "title");
    return `<a class="case-card ${unlocked ? "is-collected" : ""}" href="station.html?station=${number}" aria-label="${copy.station} ${number}: ${title}, ${unlocked ? copy.collectionUnlocked : copy.collectionLocked}">
      <span class="case-card-image"><img src="${station.image}" alt="" loading="lazy"><span class="case-card-letter">${unlocked ? station.letter : "?"}</span></span>
      <span class="case-card-number">${copy.station.toLocaleUpperCase(currentLanguage)} ${String(number).padStart(2, "0")}</span>
      <strong>${title}</strong>
      <span class="case-card-status">${unlocked ? copy.collectionUnlocked : copy.collectionLocked}</span>
    </a>`;
  }).join("");

  const count = document.getElementById("collectionCount");
  if (count) count.textContent = `${solved.length} / ${Object.keys(stations).length}`;
  const points = document.getElementById("bonusPoints");
  if (points) points.textContent = copy.eggPoints.replace("{count}", String(foundEggs.length * 25));
  bonusCollection.innerHTML = copy.intelEggs.map((title, index) => {
    const number = index + 1;
    const found = foundEggs.includes(number);
    return `<button type="button" class="bonus-token ${found ? "is-found" : ""}" data-secret-egg="${number}" aria-label="${title}: ${found ? copy.eggFound : copy.eggHidden}" aria-pressed="${found}">
      <span class="bonus-token-icon" aria-hidden="true">${found ? ["🕵️", "🗝️", "💎", "🐈‍⬛", "🔎"][index] : "?"}</span>
      <span class="bonus-token-title">${title}</span>
      <span class="bonus-token-status">${found ? copy.eggFound : copy.eggHidden}</span>
    </button>`;
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
      <nav class="station-nav" aria-label="${translations[currentLanguage].mainNav}">
        <a class="station-nav-button" href="${n > 1 ? `station.html?station=${n - 1}` : "index.html#stationen"}"><span aria-hidden="true">←</span> ${n > 1 ? translations[currentLanguage].previousStation : translations[currentLanguage].stationOverview}</a>
        <a class="station-nav-button primary" href="${n < 7 ? `station.html?station=${n + 1}` : "final.html"}">${n < 7 ? translations[currentLanguage].nextStation : translations[currentLanguage].finalCode} <span aria-hidden="true">→</span></a>
      </nav>
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
  saveSecretEggs([]);
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
    msg.innerHTML = `<div class="success mission-success"><span class="success-stamp" aria-hidden="true">✓</span><span>${translations[currentLanguage].correct} <strong>${s.letter}</strong>.${saved ? "" : `<br>${storageMessage}`}</span><span class="success-sparkles" aria-hidden="true">✦ ✨ ✦</span></div>
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
function renderSchoolStory() {
  const story = document.getElementById("schoolStory");
  if (story) {
    story.innerHTML = schoolStories[currentLanguage];
    story.querySelectorAll(":scope > *").forEach((line, index) => {
      line.style.setProperty("--line-delay", `${Math.min(index * 70, 900)}ms`);
    });
  }
  const facts = document.getElementById("schoolFacts");
  if (facts) facts.innerHTML = `<p>${translations[currentLanguage].historyFact}</p><p>${translations[currentLanguage].lessonFact}</p><p>${translations[currentLanguage].choiceFact}</p><p>${translations[currentLanguage].activityFact}</p><p>${translations[currentLanguage].mediatorFact}</p><p>${translations[currentLanguage].factMonth}</p><p class="school-facts-source"><a href="https://stadtschule-luebbecke.de/" target="_blank" rel="noopener noreferrer">${translations[currentLanguage].factsSource}</a></p>`;
  const credits = document.getElementById("creditsList");
  if (credits) credits.innerHTML = `<h3>${translations[currentLanguage].creditsTitle}</h3><ul><li>${translations[currentLanguage].creditProgram}</li><li>${translations[currentLanguage].creditDesign}</li><li>${translations[currentLanguage].creditText}</li><li>${translations[currentLanguage].creditTest}</li><li>${translations[currentLanguage].creditIdeas}</li></ul><div class="system-credits"><p>💬 ${translations[currentLanguage].creditComments}</p><p>🛡️ ${translations[currentLanguage].creditAdmin}</p></div>`;
  const slider = document.getElementById("neonIntensity");
  if (slider) slider.setAttribute("aria-label", translations[currentLanguage].sliderLabel);
  const toggle = document.getElementById("neonToggle");
  if (toggle) toggle.setAttribute("aria-label", translations[currentLanguage].sliderToggle);
  const starSecret = document.getElementById("developerCredit");
  if (starSecret && !starSecret.classList.contains("hidden")) starSecret.textContent = translations[currentLanguage].starSecret;
  const colorSecret = document.getElementById("schoolSecret");
  if (colorSecret && !colorSecret.classList.contains("hidden")) colorSecret.textContent = translations[currentLanguage].colorSecret;
  const sliderSecret = document.getElementById("sliderSecret");
  if (sliderSecret && !sliderSecret.classList.contains("hidden")) sliderSecret.textContent = translations[currentLanguage].sliderSecret;
  const cipherSecret = document.getElementById("cipherSecret");
  if (cipherSecret && !cipherSecret.classList.contains("hidden")) cipherSecret.textContent = translations[currentLanguage].cipherEggSecret;
}
function checkFinal() {
  const input = document.getElementById("finalInput");
  const value = normalize(input?.value);
  const msg = document.getElementById("finalMessage");
  if (!msg) return;
  if (getSolved().length < Object.keys(stations).length) {
    renderFinal();
    return;
  }
  if (value.replaceAll("İ", "I") === "STATION") {
    input?.setAttribute("aria-invalid", "false");
    msg.innerHTML = `<div class="success">${translations[currentLanguage].accepted}</div>`;
    document.getElementById("schoolReveal").classList.remove("hidden");
    renderSchoolStory();
    document.getElementById("schoolReveal").scrollIntoView?.({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  } else {
    input?.setAttribute("aria-invalid", "true");
    msg.innerHTML = `<div class="error">${translations[currentLanguage].wrongCode}</div>`;
  }
  input?.blur();
}
document.addEventListener("submit", async (event) => {
  if (event.target.id === "stationForm") {
    event.preventDefault();
    checkStation(stationFromUrl());
  }
  if (event.target.id === "finalForm") {
    event.preventDefault();
    checkFinal();
  }
  if (event.target.id === "reviewForm") {
    event.preventDefault();
    const form = event.target;
    const nameInput = form.querySelector("#reviewName");
    const textInput = form.querySelector("#reviewText");
    const ratingInput = form.querySelector("#reviewRatingValue");
    const name = (nameInput?.value || "Guest").trim();
    const text = (textInput?.value || "").trim();
    const rating = Number(ratingInput?.value || 5);
    if (!text) return;
    if (supabaseClient) {
      try {
        const photoFile = form.querySelector("#reviewPhoto")?.files?.[0];
        const photoUrl = await uploadCloudPhoto(photoFile, "reviews");
        const { error } = await supabaseClient.from("reviews").insert({
          name: name || "Guest",
          text,
          rating: Math.max(1, Math.min(5, rating)),
          photo_path: photoUrl || null,
        });
        if (error) throw error;
        form.reset();
        form.querySelectorAll(".star-button").forEach((button) => {
          const active = Number(button.dataset.rating) === 1;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        form.querySelector("#reviewRatingValue").value = "1";
        await loadCloudReviews();
        showFormMessage(form, translations[currentLanguage].reviewAddTitle);
      } catch (error) {
        console.error("Mission Stadtschule: Bewertung konnte nicht veröffentlicht werden.", error);
        showFormMessage(form, error.message === "unsupported-photo" ? translations[currentLanguage].photoError : translations[currentLanguage].reviewCloudError, true);
      }
      return;
    }
    const reviews = getReviews();
    const nextReview = {
      id: `review-${Date.now()}`,
      name: name || "Guest",
      text,
      rating: Math.max(1, Math.min(5, rating)),
      reply: "",
      reactions: { love: 0, great: 0, fire: 0 }
    };
    const updatedReviews = [nextReview, ...reviews].slice(0, 12);
    if (saveReviews(updatedReviews)) {
      form.reset();
      const defaultStars = form.querySelectorAll(".star-button");
      defaultStars.forEach((button) => {
        const active = Number(button.dataset.rating) === 1;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      const ratingHidden = form.querySelector("#reviewRatingValue");
      if (ratingHidden) ratingHidden.value = "1";
      renderReviews();
      const title = translations[currentLanguage]?.reviewAddTitle || translations.de.reviewAddTitle;
      showFormMessage(form, title);
    }
  }
  if (event.target.id === "adminReplyForm") {
    event.preventDefault();
    const select = document.getElementById("adminReviewSelect");
    const textArea = document.getElementById("adminReplyText");
    const photoFile = document.getElementById("adminReplyPhoto")?.files?.[0];
    const reviewId = select?.value;
    const reply = (textArea?.value || "").trim();
    if (!reviewId || (!reply && !photoFile)) return;
    if (supabaseClient) {
      if (!isAdminMode()) return;
      try {
        const photoUrl = await uploadCloudPhoto(photoFile, "replies");
        const { error } = await supabaseClient.from("reviews")
          .update({ reply, reply_photo_path: photoUrl || null, reply_photo_approved: false })
          .eq("id", reviewId);
        if (error) throw error;
        textArea.value = "";
        document.getElementById("adminReplyPhoto").value = "";
        await loadCloudReviews();
        showFormMessage(event.target, translations[currentLanguage].adminReplySubmit);
      } catch (error) {
        console.error("Mission Stadtschule: Admin-Antwort konnte nicht gespeichert werden.", error);
        showFormMessage(event.target, error.message === "unsupported-photo" ? translations[currentLanguage].photoError : translations[currentLanguage].reviewCloudError, true);
      }
      return;
    }
    if (!reply) return;
    const reviews = getReviews();
    const updatedReviews = reviews.map((review) => review.id === reviewId ? { ...review, reply } : review);
    if (saveReviews(updatedReviews)) {
      textArea.value = "";
      renderReviews();
    }
  }
});
document.addEventListener("click", async (event) => {
  const cipherEasterEgg = event.target.closest(".cipher-easter-egg");
  if (cipherEasterEgg) {
    cipherTapCount += 1;
    if (cipherTapCount >= 7) {
      const secret = document.getElementById("cipherSecret");
      secret.textContent = translations[currentLanguage].cipherEggSecret;
      secret.classList.remove("hidden");
      document.getElementById("schoolReveal").classList.add("secret-found");
      cipherTapCount = 0;
    }
    return;
  }
  const secretEgg = event.target.closest("[data-secret-egg]");
  if (secretEgg) {
    const number = Number(secretEgg.dataset.secretEgg);
    const foundEggs = getSecretEggs();
    if (foundEggs.includes(number)) return;
    foundEggs.push(number);
    if (!saveSecretEggs(foundEggs)) {
      document.getElementById("bonusMessage").textContent = translations[currentLanguage].storageSaveError;
      return;
    }
    renderRewards();
    const message = document.getElementById("bonusMessage");
    message.textContent = `${translations[currentLanguage].intelEggs[number - 1]} · ${translations[currentLanguage].eggFound}`;
    return;
  }
  const ratingButton = event.target.closest(".star-button");
  if (ratingButton) {
    const form = ratingButton.closest("#reviewForm");
    const ratingValue = Number(ratingButton.dataset.rating || 1);
    form?.querySelector("#reviewRatingValue")?.setAttribute("value", String(ratingValue));
    form?.querySelectorAll(".star-button").forEach((button) => {
      const active = Number(button.dataset.rating) <= ratingValue;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    return;
  }

  const adminButton = event.target.closest("#adminAccessButton");
  if (adminButton) {
    const modal = document.getElementById("adminAccessModal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      const input = document.getElementById(supabaseClient ? "adminAccessEmail" : "adminAccessInput");
      if (input) {
        input.focus();
      }
    }
    return;
  }

  const adminSignOutButton = event.target.closest("#adminSignOutButton");
  if (adminSignOutButton && supabaseClient) {
    await supabaseClient.auth.signOut();
    cloudAdmin = false;
    renderReviews();
    return;
  }

  const closeButton = event.target.closest("#adminAccessClose");
  if (closeButton) {
    const modal = document.getElementById("adminAccessModal");
    if (modal) {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
    }
    return;
  }

  const adminCodeConfirm = event.target.closest("#adminAccessConfirm");
  if (adminCodeConfirm) {
    const input = document.getElementById("adminAccessInput");
    const status = document.getElementById("adminAccessStatus");
    if (supabaseClient) {
      const email = document.getElementById("adminAccessEmail")?.value?.trim() || "";
      const password = input?.value || "";
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (!error) await syncCloudAdmin();
      if (!error && cloudAdmin) {
        if (status) status.textContent = "";
      } else {
        if (error) console.warn("Mission Stadtschule: Admin-Anmeldung fehlgeschlagen.", error);
        if (status) status.textContent = translations[currentLanguage].adminCloudError;
        input.value = "";
        input.focus();
        return;
      }
    } else {
      const code = input?.value?.trim() || "";
      if (code.toLowerCase() !== ADMIN_SECRET.toLowerCase()) {
        input.value = "";
        input.focus();
        return;
      }
      setAdminMode(true);
    }
    {
      const modal = document.getElementById("adminAccessModal");
      if (modal) {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
      }
      if (document.getElementById("adminPanel")) {
        document.getElementById("adminPanel").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    return;
  }

  const deleteSelectedButton = event.target.closest("#deleteSelectedReview");
  if (deleteSelectedButton) {
    const select = document.getElementById("adminReviewSelect");
    const reviewId = select?.value;
    if (!reviewId || !isAdminMode()) return;
    if (supabaseClient) {
      const { error } = await supabaseClient.from("reviews").delete().eq("id", reviewId);
      if (error) console.error("Mission Stadtschule: Bewertung konnte nicht gelöscht werden.", error);
      await loadCloudReviews();
      return;
    }
    const reviews = getReviews().filter((review) => review.id !== reviewId);
    if (saveReviews(reviews)) {
      renderReviews();
    }
    return;
  }

  const photoApprovalButton = event.target.closest("[data-photo-approval]");
  if (photoApprovalButton) {
    if (!supabaseClient || !isAdminMode()) return;
    const reviewId = photoApprovalButton.dataset.reviewId;
    const photoKind = photoApprovalButton.dataset.photoKind;
    const approved = photoApprovalButton.dataset.nextState === "true";
    const column = photoKind === "reply" ? "reply_photo_approved" : "photo_approved";
    const { data, error } = await supabaseClient.from("reviews")
      .update({ [column]: approved })
      .eq("id", reviewId)
      .select("id")
      .maybeSingle();
    if (error || !data) {
      console.error("Mission Stadtschule: Foto-Freigabe konnte nicht geändert werden.", error);
      showReviewActionMessage(translations[currentLanguage].reviewCloudError);
      return;
    }
    await loadCloudReviews();
    showReviewActionMessage(approved ? translations[currentLanguage].photoApprove : translations[currentLanguage].photoRevoke, false);
    return;
  }

  const deleteReviewButton = event.target.closest("[data-delete-review]");
  if (deleteReviewButton) {
    const reviewId = deleteReviewButton.getAttribute("data-delete-review");
    if (!isAdminMode()) return;
    if (supabaseClient) {
      const { error } = await supabaseClient.from("reviews").delete().eq("id", reviewId);
      if (error) console.error("Mission Stadtschule: Bewertung konnte nicht gelöscht werden.", error);
      await loadCloudReviews();
      return;
    }
    const reviews = getReviews().filter((review) => review.id !== reviewId);
    if (saveReviews(reviews)) {
      renderReviews();
    }
    return;
  }

  const reactionButton = event.target.closest("[data-review-reaction]");
  if (reactionButton) {
    const reviewId = reactionButton.getAttribute("data-review-id");
    const reactionKey = reactionButton.getAttribute("data-review-reaction");
    if (hasUsedReviewReaction(reviewId, reactionKey)) return;
    if (supabaseClient) {
      const { data: accepted, error } = await supabaseClient.rpc("add_review_reaction", {
        p_review_id: reviewId,
        p_reaction: reactionKey,
        p_visitor_id: getReviewVisitorId()
      });
      if (error) {
        console.error("Mission Stadtschule: Reaktion konnte nicht gespeichert werden.", error);
        showReviewActionMessage(translations[currentLanguage].reviewCloudError);
        return;
      }
      markReviewReactionUsed(reviewId, reactionKey);
      await loadCloudReviews();
      if (accepted === false) showReviewActionMessage(translations[currentLanguage].reviewReactionUsed);
      return;
    }
    markReviewReactionUsed(reviewId, reactionKey);
    const reviews = getReviews();
    const updatedReviews = reviews.map((review) => {
      if (review.id !== reviewId) return review;
      const nextReactions = { love: Number(review.reactions?.love || 0), great: Number(review.reactions?.great || 0), fire: Number(review.reactions?.fire || 0) };
      nextReactions[reactionKey] = (nextReactions[reactionKey] || 0) + 1;
      return { ...review, reactions: nextReactions };
    });
    if (saveReviews(updatedReviews)) {
      renderReviews();
    }
    return;
  }

  const reviewsToggleButton = event.target.closest("#toggleReviewsButton");
  if (reviewsToggleButton) {
    const listWrap = document.querySelector(".review-list-wrap");
    if (listWrap) {
      listWrap.scrollIntoView({ behavior: "smooth", block: "start" });
      listWrap.classList.toggle("is-focused");
      window.setTimeout(() => listWrap.classList.remove("is-focused"), 700);
    }
    return;
  }

  const leaveReviewButton = event.target.closest("#leaveReviewButton");
  if (leaveReviewButton) {
    const form = document.getElementById("reviewForm");
    form?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("reviewName")?.focus({ preventScroll: true });
    return;
  }

  const control = event.target.closest("button, a.btn");
  if (control) {
    if (!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      control.animate?.([
        { transform: "scale(1)" },
        { transform: "scale(.96)" },
        { transform: "scale(1)" }
      ], { duration: 190, easing: "ease-out" });
    }
    playClickSound();
  }
  const emojiChoice = event.target.closest("[data-emoji-choice]");
  if (emojiChoice) {
    emojiGameResult = emojiChoice.dataset.emojiChoice;
    renderEmojiGame();
    return;
  }
  const heroReaction = event.target.closest("[data-hero-reaction]");
  if (heroReaction) {
    const state = getHomeReactionState();
    const key = heroReaction.dataset.heroReaction;
    if (state.voted.includes(key)) return;
    state.voted.push(key);
    state.counts[key] = (state.counts[key] || 0) + 1;
    try {
      localStorage.setItem(HOME_REACTION_STATE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Mission Stadtschule: Startseiten-Reaktion konnte nicht gespeichert werden.", error);
    }
    renderHomeReactions();
    return;
  }
  const creditTrigger = event.target.closest("#creditTrigger");
  if (creditTrigger) {
    creditTapCount += 1;
    if (creditTapCount >= 5) {
      const secret = document.getElementById("developerCredit");
      secret.textContent = translations[currentLanguage].starSecret;
      secret.classList.remove("hidden");
      document.getElementById("schoolReveal").classList.add("secret-found");
    }
    return;
  }
  const colorKey = event.target.closest("[data-secret-color]");
  if (colorKey) {
    const sequence = ["red", "blue", "green"];
    const selectedColor = colorKey.dataset.secretColor;
    colorSequence.push(selectedColor);
    if (selectedColor !== sequence[colorSequence.length - 1]) {
      colorSequence = selectedColor === "red" ? ["red"] : [];
    }
    if (colorSequence.length === sequence.length) {
      document.getElementById("schoolSecret").textContent = translations[currentLanguage].colorSecret;
      document.getElementById("schoolSecret").classList.remove("hidden");
      document.getElementById("schoolReveal").classList.add("secret-found");
      colorSequence = [];
    }
    return;
  }
  const neonToggle = event.target.closest("#neonToggle");
  if (neonToggle) {
    const control = document.getElementById("neonControl");
    control.classList.toggle("hidden");
    neonToggle.setAttribute("aria-expanded", String(!control.classList.contains("hidden")));
    return;
  }
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
document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target.isContentEditable || target.closest("input, textarea, select")) {
    secretCodeBuffer = "";
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    if (target.matches?.(".cipher-easter-egg")) {
      event.preventDefault();
      target.click();
    }
    return;
  }
  if (!/^[a-z]$/i.test(event.key)) return;
  secretCodeBuffer = `${secretCodeBuffer}${event.key.toUpperCase()}`.slice(-"KORNIEIEV".length);
  if (secretCodeBuffer !== "KORNIEIEV") return;

  let toast = document.getElementById("secretCodeToast");
  if (!toast) {
    toast = document.createElement("p");
    toast.id = "secretCodeToast";
    toast.className = "secret-code-toast hidden";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.append(toast);
  }
  toast.textContent = translations[currentLanguage].keyboardEggSecret;
  toast.classList.remove("hidden");
  window.clearTimeout(secretCodeToastTimer);
  secretCodeToastTimer = window.setTimeout(() => toast.classList.add("hidden"), 5000);
  secretCodeBuffer = "";
});
document.addEventListener("error", async (event) => {
  const image = event.target;
  if (!image.matches?.("img[data-cloud-photo]")) return;
  if (image.dataset.photoRetried !== "true") {
    image.dataset.photoRetried = "true";
    const refreshedUrl = await getCloudPhotoUrl(image.dataset.photoPath, image.dataset.photoApproved === "true");
    if (refreshedUrl) {
      image.src = refreshedUrl;
      return;
    }
  }
  image.hidden = true;
  if (isAdminMode() && !image.nextElementSibling?.classList.contains("photo-preview-error")) {
    const error = document.createElement("p");
    error.className = "photo-preview-error";
    error.textContent = translations[currentLanguage].photoPreviewUnavailable;
    image.after(error);
  }
}, true);
document.addEventListener("input", (event) => {
  if (event.target.id === "siteBrightness") {
    siteSettings.brightness = Math.min(120, Math.max(80, Number(event.target.value)));
    document.documentElement.style.setProperty("--display-brightness", String(siteSettings.brightness / 100));
    renderSettings();
    saveSettings();
  } else if (event.target.id === "soundVolume") {
    siteSettings.soundVolume = Math.min(100, Math.max(0, Number(event.target.value)));
    renderSettings();
    saveSettings();
  } else if (event.target.id === "neonIntensity") {
    document.documentElement.style.setProperty("--neon-intensity", String(Number(event.target.value) / 100));
    const message = document.getElementById("sliderSecret");
    message.textContent = translations[currentLanguage].sliderSecret;
    message.classList.remove("hidden");
  }
});
document.addEventListener("change", (event) => {
  if (event.target.id === "soundEffects") {
    siteSettings.soundEffects = event.target.checked;
    saveSettings();
  } else if (event.target.name === "layoutMode") {
    siteSettings.layoutMode = event.target.value;
    renderSettings();
    saveSettings();
  }
});
initLanguage();
initSettings();
bindAnswerFields();
renderHomeReactions();
setCloudUi();
if (supabaseClient) {
  void loadCloudReviews();
  void syncCloudAdmin();
  supabaseClient.channel("public:reviews")
    .on("postgres_changes", { event: "*", schema: "public", table: "reviews" }, () => { void loadCloudReviews(); })
    .subscribe();
  supabaseClient.auth.onAuthStateChange(() => {
    window.setTimeout(() => { void syncCloudAdmin(); }, 0);
  });
}
