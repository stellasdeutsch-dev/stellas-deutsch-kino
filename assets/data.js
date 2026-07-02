/* Stellas Deutsch — Kino-Kollektion
   Подборка фильмов и сериалов для немецкого A0 · A1 · A2.
   Отзывы — в стиле Шынгыса. Коротко. По делу. Без воды. */

const FILMS = [
  /* ============================ A0 ============================ */
  {
    id: "peppa",
    title: "Peppa Wutz",
    titleRu: "Свинка Пеппа",
    level: "A0",
    genre: "Мультфильм",
    year: 2006,
    length: 5,
    lengthLabel: "5 мин / серия",
    rating: 4.8,
    poster: { from: "#ff8fb1", to: "#ff4d79", glyph: "🐷" },
    review:
      "Начинать всегда страшно. С Пеппой не страшно. Слова простые. Фразы короткие. Голоса чёткие. " +
      "Ты уже знаешь сюжет из детства. Мозг не отвлекается на историю. Мозг слушает язык. " +
      "Пять минут в день. Каждый день. И немецкий перестаёт быть чужим.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=peppa+wutz+deutsch" },
      { name: "Netflix", url: "https://www.netflix.com/search?q=peppa" }
    ]
  },
  {
    id: "maus",
    title: "Die Sendung mit der Maus",
    titleRu: "Передача с Мышонком",
    level: "A0",
    genre: "Познавательное",
    year: 1971,
    length: 30,
    lengthLabel: "30 мин",
    rating: 4.6,
    poster: { from: "#ffb15e", to: "#ff7a18", glyph: "🐭" },
    review:
      "Немцы растут на этой передаче полвека. Причина проста. Объясняют сложное простыми словами. " +
      "Это ровно то, что нужно новичку. Картинка помогает. Речь медленная. Логика ясная. " +
      "Смотришь про мир. Учишь язык фоном. Два в одном.",
    platforms: [
      { name: "ARD Mediathek", url: "https://www.wdrmaus.de/" },
      { name: "YouTube", url: "https://www.youtube.com/@diemaus" }
    ]
  },
  {
    id: "extra",
    title: "Extr@ auf Deutsch",
    titleRu: "Экстра по-немецки",
    level: "A0",
    genre: "Ситком",
    year: 2004,
    length: 25,
    lengthLabel: "25 мин",
    rating: 4.4,
    poster: { from: "#8fd3ff", to: "#4d79ff", glyph: "📺" },
    review:
      "Сериал сняли специально для тех, кто учит язык. Это чувствуется. Актёры говорят чётко. Без каши. " +
      "Сюжет глупый и весёлый. Друзья, квартира, недоразумения. Как Friends, только медленнее. " +
      "Ты смеёшься. И не замечаешь, что учишься.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=extra+auf+deutsch" }
    ]
  },
  {
    id: "sandmann",
    title: "Unser Sandmännchen",
    titleRu: "Наш Песочный человечек",
    level: "A0",
    genre: "Детское",
    year: 1959,
    length: 10,
    lengthLabel: "10 мин",
    rating: 4.1,
    poster: { from: "#c8a2ff", to: "#7b5cff", glyph: "🌙" },
    review:
      "Спокойное вечернее видео. Короткие истории на ночь. Речь тихая, медленная, добрая. " +
      "Идеально перед сном. Мозг расслаблен. Немецкий заходит мягко. " +
      "Не ждите экшена. Ждите уюта.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=unser+sandm%C3%A4nnchen" }
    ]
  },
  {
    id: "loewenzahn",
    title: "Löwenzahn",
    titleRu: "Одуванчик",
    level: "A0",
    genre: "Познавательное",
    year: 1981,
    length: 25,
    lengthLabel: "25 мин",
    rating: 4.5,
    poster: { from: "#a8e063", to: "#43a047", glyph: "🌱" },
    review:
      "Дядя в синем фургоне объясняет, как устроен мир. Медленно. Наглядно. По-доброму. " +
      "Каждая серия — одна тема. Одна тема — сотня новых слов. Но не пугают, а показывают. " +
      "Смотришь про природу. Уходишь с новым словарём.",
    platforms: [
      { name: "ZDF", url: "https://www.zdf.de/kinder/loewenzahn" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=l%C3%B6wenzahn+zdf" }
    ]
  },
  {
    id: "bibi-blocksberg",
    title: "Bibi Blocksberg",
    titleRu: "Биби Блоксберг",
    level: "A0",
    genre: "Мультфильм",
    year: 1980,
    length: 20,
    lengthLabel: "20 мин",
    rating: 4.2,
    poster: { from: "#ff9ce0", to: "#b64dff", glyph: "🧹" },
    review:
      "Маленькая ведьма и её приключения. Слова повторяются из серии в серию. Это и есть секрет. " +
      "Повтор — лучший учитель. Ты слышишь одно и то же по-разному. И запоминаешь без зубрёжки. " +
      "Волшебство простое. Как раз для старта.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=bibi+blocksberg+folgen" }
    ]
  },

  /* ============================ A1 ============================ */
  {
    id: "nicos-weg-a1",
    title: "Nicos Weg — A1",
    titleRu: "Путь Нико — A1",
    level: "A1",
    genre: "Драма / Курс",
    year: 2018,
    length: 4,
    lengthLabel: "4 мин / серия",
    rating: 4.9,
    poster: { from: "#7ee8fa", to: "#0f6cff", glyph: "🧭" },
    review:
      "Если смотреть что-то одно — смотрите это. Deutsche Welle сделали шедевр для новичков. " +
      "Нико приезжает в Германию. Не знает языка. Как и ты. Вы идёте вместе. " +
      "Серии короткие. История настоящая. К каждой — упражнения. Бесплатно. Это лучший старт из всех.",
    platforms: [
      { name: "DW Learn German", url: "https://learngerman.dw.com/de/nicos-weg/c-36519789" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=nicos+weg+a1" }
    ]
  },
  {
    id: "tuerkisch",
    title: "Türkisch für Anfänger",
    titleRu: "Турецкий для начинающих",
    level: "A1",
    genre: "Комедия",
    year: 2006,
    length: 25,
    lengthLabel: "25 мин",
    rating: 4.6,
    poster: { from: "#ffd36e", to: "#ff5e62", glyph: "👨‍👩‍👧‍👦" },
    review:
      "Две семьи, немецкая и турецкая, становятся одной. Хаос гарантирован. И смех тоже. " +
      "Речь бытовая, живая, современная. Так реально говорят дома. " +
      "На A1 будет непросто. Включай субтитры. Но втягивает намертво.",
    platforms: [
      { name: "ARD Mediathek", url: "https://www.ardmediathek.de/" },
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=t%C3%BCrkisch+f%C3%BCr+anf%C3%A4nger" }
    ]
  },
  {
    id: "bibi-tina",
    title: "Bibi & Tina",
    titleRu: "Биби и Тина",
    level: "A1",
    genre: "Семейный",
    year: 2014,
    length: 100,
    lengthLabel: "1 ч 40 мин",
    rating: 4.4,
    poster: { from: "#a1ffce", to: "#00b894", glyph: "🐴" },
    review:
      "Лошади, лето, деревня и песни. Фильм лёгкий, как выходной. " +
      "Диалоги простые, эмоции понятные. Даже если пропустишь слово — картинка объяснит. " +
      "Песни застревают в голове. А значит, и слова тоже.",
    platforms: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=bibi%20tina" },
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=bibi+und+tina" }
    ]
  },
  {
    id: "emil",
    title: "Emil und die Detektive",
    titleRu: "Эмиль и сыщики",
    level: "A1",
    genre: "Приключения",
    year: 2001,
    length: 111,
    lengthLabel: "1 ч 51 мин",
    rating: 4.3,
    poster: { from: "#f6d365", to: "#fda085", glyph: "🕵️" },
    review:
      "Классика Кестнера, снятая заново. Мальчик, большой город, банда друзей. " +
      "История детская, но не глупая. Речь ясная, темп ровный. " +
      "Держит в напряжении. Ты хочешь узнать, что дальше — и слушаешь внимательнее.",
    platforms: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=emil+und+die+detektive" }
    ]
  },
  {
    id: "fliegende",
    title: "Das fliegende Klassenzimmer",
    titleRu: "Летающий класс",
    level: "A1",
    genre: "Семейный",
    year: 2003,
    length: 111,
    lengthLabel: "1 ч 51 мин",
    rating: 4.2,
    poster: { from: "#84fab0", to: "#8fd3f4", glyph: "✈️" },
    review:
      "Школа, дружба, маленькие драмы и большое сердце. Тема близкая каждому. " +
      "Слова вокруг учёбы, семьи, друзей. Ровно тот словарь, что нужен на A1. " +
      "Тёплый фильм. Смотрится на одном дыхании.",
    platforms: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=das+fliegende+klassenzimmer" }
    ]
  },
  {
    id: "ostwind",
    title: "Ostwind",
    titleRu: "Восточный ветер",
    level: "A1",
    genre: "Драма",
    year: 2013,
    length: 100,
    lengthLabel: "1 ч 40 мин",
    rating: 4.5,
    poster: { from: "#c1dfc4", to: "#deecdd", glyph: "🐎" },
    review:
      "Девочка и дикий конь. История о доверии. Красиво снято, легко звучит. " +
      "Эмоции ведут сюжет, поэтому язык понимается сердцем. " +
      "Хочешь мотивацию учить дальше — вот она.",
    platforms: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=ostwind" },
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=ostwind" }
    ]
  },

  /* ============================ A2 ============================ */
  {
    id: "nicos-weg-a2",
    title: "Nicos Weg — A2",
    titleRu: "Путь Нико — A2",
    level: "A2",
    genre: "Драма / Курс",
    year: 2018,
    length: 5,
    lengthLabel: "5 мин / серия",
    rating: 4.9,
    poster: { from: "#00c6ff", to: "#0072ff", glyph: "🧭" },
    review:
      "Продолжение истории Нико. Теперь всё серьёзнее. Работа, чувства, документы, жизнь. " +
      "Слова становятся длиннее. Ситуации — взрослее. Ты растёшь вместе с героем. " +
      "Тот же формат. Та же польза. Просто следующий этаж.",
    platforms: [
      { name: "DW Learn German", url: "https://learngerman.dw.com/de/nicos-weg/c-36519789" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=nicos+weg+a2" }
    ]
  },
  {
    id: "jojo",
    title: "Jojo sucht das Glück",
    titleRu: "Йойо ищет счастье",
    level: "A2",
    genre: "Драма / Курс",
    year: 2011,
    length: 3,
    lengthLabel: "3 мин / серия",
    rating: 4.6,
    poster: { from: "#f093fb", to: "#f5576c", glyph: "🍀" },
    review:
      "Ещё одна телено­велла от Deutsche Welle. Бразилька Йойо приезжает в Германию за любовью. " +
      "Серии крошечные. Драма настоящая. Слова повторяются, поэтому липнут. " +
      "Смотришь как сериал. Учишься как по учебнику. Идеальный гибрид.",
    platforms: [
      { name: "DW Learn German", url: "https://learngerman.dw.com/de/jojo-sucht-das-gl%C3%BCck/s-32059" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=jojo+sucht+das+gl%C3%BCck" }
    ]
  },
  {
    id: "berlin",
    title: "Berlin, Berlin",
    titleRu: "Берлин, Берлин",
    level: "A2",
    genre: "Комедия",
    year: 2002,
    length: 25,
    lengthLabel: "25 мин",
    rating: 4.5,
    poster: { from: "#fddb92", to: "#d1913c", glyph: "🏙️" },
    review:
      "Лолле переезжает в Берлин. Дальше — сплошные приключения и любовные качели. " +
      "Ритм быстрый, речь городская, юмор острый. На A2 — вызов, но по силам. " +
      "Серии короткие, а привыкание сильное. Одна ведёт к другой.",
    platforms: [
      { name: "ARD Mediathek", url: "https://www.ardmediathek.de/" },
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=berlin+berlin+serie" }
    ]
  },
  {
    id: "fackju",
    title: "Fack ju Göhte",
    titleRu: "Училка немецкого",
    level: "A2",
    genre: "Комедия",
    year: 2013,
    length: 118,
    lengthLabel: "1 ч 58 мин",
    rating: 4.4,
    poster: { from: "#ff9a9e", to: "#fad0c4", glyph: "🎓" },
    review:
      "Грабитель случайно становится учителем. Школа в шоке. Зритель в слезах от смеха. " +
      "Речь живая, уличная, современная. Много сленга — так говорит настоящая молодёжь. " +
      "Смотри с субтитрами. И записывай фразы, которых нет в учебнике.",
    platforms: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=fack%20ju%20goethe" },
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=fack+ju+g%C3%B6hte" }
    ]
  },
  {
    id: "wunder-bern",
    title: "Das Wunder von Bern",
    titleRu: "Бернское чудо",
    level: "A2",
    genre: "Драма",
    year: 2003,
    length: 118,
    lengthLabel: "1 ч 58 мин",
    rating: 4.7,
    poster: { from: "#96e6a1", to: "#0f8a5f", glyph: "⚽" },
    review:
      "Германия, 1954-й, чемпионат мира и мальчик, который верит в отца. История цепляет за живое. " +
      "Диалоги бытовые, но эмоциональные. Ты понимаешь не только слова — ты понимаешь страну. " +
      "Немного истории, немного футбола, много чувств.",
    platforms: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=das+wunder+von+bern" }
    ]
  },
  {
    id: "goodbye-lenin",
    title: "Good Bye, Lenin!",
    titleRu: "Гуд бай, Ленин!",
    level: "A2",
    genre: "Драма / Комедия",
    year: 2003,
    length: 121,
    lengthLabel: "2 ч 01 мин",
    rating: 4.8,
    poster: { from: "#ff6a6a", to: "#c31432", glyph: "🚩" },
    review:
      "Мама в коме, а вокруг рушится ГДР. Сын прячет от неё целую эпоху. Гениальная идея. " +
      "Немецкий тут настоящий, взрослый, но не быстрый. На A2 уже многое поймёшь сам. " +
      "Это не просто фильм для практики. Это фильм, который остаётся с тобой.",
    platforms: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=good+bye+lenin" },
      { name: "Netflix", url: "https://www.netflix.com/search?q=good%20bye%20lenin" }
    ]
  }
];

/* Тексты уровней — тоже в стиле Шынгыса */
const LEVELS = {
  A0: {
    code: "A0",
    name: "Ноль",
    tagline: "Ты только начал. И это нормально.",
    intro:
      "A0 — это чистый лист. Слов почти нет. Грамматики ещё нет. " +
      "Но уши уже можно тренировать. Здесь всё простое: короткие фразы, чёткие голоса, знакомые сюжеты. " +
      "Задача одна — привыкнуть к звучанию. Не понимать всё. Просто слушать.",
    accent: "#ff5e8a"
  },
  A1: {
    code: "A1",
    name: "Первые шаги",
    tagline: "Слова появились. Пора складывать их вместе.",
    intro:
      "A1 — язык оживает. Ты уже ловишь знакомые слова в потоке. Это кайф. " +
      "Фильмы здесь чуть длиннее и живее. Появляются настоящие истории и настоящие эмоции. " +
      "Смотри с субтитрами. Не бойся паузы. Каждое понятое предложение — маленькая победа.",
    accent: "#4d9fff"
  },
  A2: {
    code: "A2",
    name: "Уверенность",
    tagline: "Ты уже понимаешь. Теперь понимай глубже.",
    intro:
      "A2 — фундамент заложен. Пора выходить в реальный немецкий. " +
      "Здесь настоящее кино и взрослые сериалы. Речь быстрее, слова богаче, юмор острее. " +
      "Будет трудно — это и значит, что ты растёшь. Смотри. Пересматривай. Догоняй.",
    accent: "#22d3a6"
  }
};
