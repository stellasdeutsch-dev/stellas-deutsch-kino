/* Stellas Deutsch — Zeichentrick-Kollektion
   Подборка мультфильмов для немецкого A0 · A1 · A2.
   Отзывы — в стиле Шынгыса. Коротко. По делу. Без воды. */

const FILMS = [
  /* ============================ A0 ============================ */
  {
    id: "peppa",
    title: "Peppa Wutz",
    titleRu: "Свинка Пеппа",
    level: "A0",
    genre: "Дошкольное",
    year: 2006,
    length: 5,
    lengthLabel: "5 мин / серия",
    rating: 4.8,
    poster: { from: "#ff9ec4", to: "#ff5e9c", glyph: "🐷" },
    review:
      "С Пеппой начинать не страшно. Слова простые. Фразы короткие. Голоса чёткие. " +
      "Ты уже знаешь сюжет из детства. Мозг не отвлекается на историю — мозг слушает язык. " +
      "Пять минут в день. Каждый день. И немецкий перестаёт быть чужим.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=peppa+wutz+deutsch" },
      { name: "Netflix", url: "https://www.netflix.com/search?q=peppa" }
    ]
  },
  {
    id: "shaun",
    title: "Shaun das Schaf",
    titleRu: "Барашек Шон",
    level: "A0",
    genre: "Комедия",
    year: 2007,
    length: 7,
    lengthLabel: "7 мин / серия",
    rating: 4.7,
    poster: { from: "#bfe3ff", to: "#7fa8d8", glyph: "🐑" },
    review:
      "Хитрый мультик без единого слова. И это гениально для старта. " +
      "Ты учишься понимать историю глазами. Читаешь эмоции, жесты, ситуации. " +
      "Потом включишь тот же навык на немецком. И удивишься, как много понятно без слов.",
    platforms: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=shaun%20das%20schaf" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=shaun+das+schaf" }
    ]
  },
  {
    id: "sandmann",
    title: "Unser Sandmännchen",
    titleRu: "Наш Песочный человечек",
    level: "A0",
    genre: "Дошкольное",
    year: 1959,
    length: 10,
    lengthLabel: "10 мин",
    rating: 4.2,
    poster: { from: "#c8a2ff", to: "#7b5cff", glyph: "🌙" },
    review:
      "Спокойные истории на ночь. Речь тихая, медленная, добрая. " +
      "Идеально перед сном. Мозг расслаблен — немецкий заходит мягко. " +
      "Не ждите экшена. Ждите уюта.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=unser+sandm%C3%A4nnchen" }
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
    poster: { from: "#ffc46e", to: "#ff7a18", glyph: "🐭" },
    review:
      "Немцы растут на этом полвека. Причина проста — сложное объясняют простыми словами. " +
      "Это ровно то, что нужно новичку. Картинка помогает. Речь медленная. Логика ясная. " +
      "Смотришь про мир. Учишь язык фоном.",
    platforms: [
      { name: "ARD Mediathek", url: "https://www.wdrmaus.de/" },
      { name: "YouTube", url: "https://www.youtube.com/@diemaus" }
    ]
  },
  {
    id: "bibi-blocksberg",
    title: "Bibi Blocksberg",
    titleRu: "Биби Блоксберг",
    level: "A0",
    genre: "Фэнтези",
    year: 1980,
    length: 20,
    lengthLabel: "20 мин",
    rating: 4.3,
    poster: { from: "#ffb0e6", to: "#b64dff", glyph: "🧹" },
    review:
      "Маленькая ведьма и её приключения. Слова повторяются из серии в серию. В этом весь секрет. " +
      "Повтор — лучший учитель. Слышишь одно и то же по-разному и запоминаешь без зубрёжки. " +
      "Волшебство простое. Как раз для старта.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=bibi+blocksberg+folgen" }
    ]
  },
  {
    id: "maulwurf",
    title: "Der kleine Maulwurf",
    titleRu: "Крот (Кртек)",
    level: "A0",
    genre: "Дошкольное",
    year: 1957,
    length: 8,
    lengthLabel: "8 мин / серия",
    rating: 4.4,
    poster: { from: "#a8e6a1", to: "#3f9e6a", glyph: "🐾" },
    review:
      "Добрый кротик, который почти не говорит. Только пищит и радуется. " +
      "Языкового барьера нет вообще. Есть тёплая история и мягкое погружение. " +
      "Отдых для глаз и ушей. Начни отсюда, если совсем ноль.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=der+kleine+maulwurf" }
    ]
  },

  /* ============================ A1 ============================ */
  {
    id: "nemo",
    title: "Findet Nemo",
    titleRu: "В поисках Немо",
    level: "A1",
    genre: "Приключения",
    year: 2003,
    length: 100,
    lengthLabel: "1 ч 40 мин",
    rating: 4.8,
    poster: { from: "#5ee7ff", to: "#0f6cff", glyph: "🐠" },
    review:
      "Папа-рыбка ищет сына через весь океан. История простая и понятная сердцем. " +
      "Речь чёткая, слова бытовые, эмоции читаются с лица. На A1 поймёшь больше, чем думаешь. " +
      "Смотри в немецкой озвучке с немецкими субтитрами. Классика для старта.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=findet%20nemo" },
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=findet+nemo+trailer+deutsch" }
    ]
  },
  {
    id: "frozen",
    title: "Die Eiskönigin",
    titleRu: "Холодное сердце",
    level: "A1",
    genre: "Мюзикл",
    year: 2013,
    length: 102,
    lengthLabel: "1 ч 42 мин",
    rating: 4.7,
    poster: { from: "#d6f0ff", to: "#5aa0e0", glyph: "❄️" },
    review:
      "Две сестры, магия льда и песни, которые ты и так знаешь наизусть. " +
      "Знакомая мелодия тащит за собой немецкие слова. Поёшь — значит, запоминаешь. " +
      "Let It Go по-немецки — это Lass jetzt los. Попробуй подпеть.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=eiskönigin" }
    ]
  },
  {
    id: "bambi",
    title: "Bambi",
    titleRu: "Бэмби",
    level: "A1",
    genre: "Драма",
    year: 1942,
    length: 70,
    lengthLabel: "1 ч 10 мин",
    rating: 4.4,
    poster: { from: "#ffd9a0", to: "#c98a4b", glyph: "🦌" },
    review:
      "Старая классика, где слов немного, а чувств — море. Тишина здесь говорит громче реплик. " +
      "Медленный темп идеален для уха новичка. Успеваешь расслышать каждое слово. " +
      "Немного грустно. Зато по-настоящему.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=bambi" }
    ]
  },
  {
    id: "dumbo",
    title: "Dumbo",
    titleRu: "Дамбо",
    level: "A1",
    genre: "Семейный",
    year: 1941,
    length: 64,
    lengthLabel: "1 ч 04 мин",
    rating: 4.2,
    poster: { from: "#a0d8ff", to: "#6a7fd8", glyph: "🐘" },
    review:
      "Слонёнок с большими ушами, который научился верить в себя. Короткий и добрый. " +
      "Простая речь, ясная история, много музыки. Час — и фильм закончился. " +
      "Мягкий вход в полный метр.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=dumbo" }
    ]
  },
  {
    id: "winnie",
    title: "Winnie Puuh",
    titleRu: "Винни-Пух",
    level: "A1",
    genre: "Дошкольное",
    year: 2011,
    length: 63,
    lengthLabel: "1 ч 03 мин",
    rating: 4.5,
    poster: { from: "#ffe08a", to: "#f0a500", glyph: "🐻" },
    review:
      "Медвежонок, горшочек мёда и самые уютные друзья на свете. Речь медленная и ласковая. " +
      "Фразы короткие, повторов много, темп спокойный. Уши отдыхают и учатся. " +
      "Тёплый мультик, после которого хочется ещё.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=winnie%20puuh" }
    ]
  },
  {
    id: "cars",
    title: "Cars",
    titleRu: "Тачки",
    level: "A1",
    genre: "Приключения",
    year: 2006,
    length: 117,
    lengthLabel: "1 ч 57 мин",
    rating: 4.5,
    poster: { from: "#ff8a7a", to: "#d1372b", glyph: "🏎️" },
    review:
      "Гоночная машина застревает в маленьком городке и наконец взрослеет. Динамично и весело. " +
      "Диалоги простые, но живые. Много повторяющихся фраз про дружбу и гонки. " +
      "Захватывает — и ты слушаешь внимательнее сам.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=cars" }
    ]
  },

  /* ============================ A2 ============================ */
  {
    id: "loewen",
    title: "Der König der Löwen",
    titleRu: "Король Лев",
    level: "A2",
    genre: "Мюзикл",
    year: 1994,
    length: 88,
    lengthLabel: "1 ч 28 мин",
    rating: 4.9,
    poster: { from: "#ffcf6b", to: "#e07b1a", glyph: "🦁" },
    review:
      "Львёнок теряет отца и находит себя. Величайшая история Disney — и отличный немецкий. " +
      "Речь взрослее, слова богаче, но эмоции ведут тебя за руку. На A2 уже потянешь. " +
      "Hakuna Matata знаешь? Значит, уже начал.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=könig%20der%20löwen" }
    ]
  },
  {
    id: "vaiana",
    title: "Vaiana",
    titleRu: "Моана",
    level: "A2",
    genre: "Мюзикл",
    year: 2016,
    length: 107,
    lengthLabel: "1 ч 47 мин",
    rating: 4.7,
    poster: { from: "#57e0c0", to: "#0f9a8a", glyph: "🌺" },
    review:
      "Девочка, океан и путь, который надо пройти самой. Яркая, живая, с сильными песнями. " +
      "Речь современная, темп бодрый. Песни цепляют новые слова намертво. " +
      "Смотри с субтитрами — и лови фразы, которых нет в учебнике.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=vaiana" }
    ]
  },
  {
    id: "zoomania",
    title: "Zoomania",
    titleRu: "Зверополис",
    level: "A2",
    genre: "Комедия",
    year: 2016,
    length: 108,
    lengthLabel: "1 ч 48 мин",
    rating: 4.6,
    poster: { from: "#8ad6a0", to: "#2f9e7a", glyph: "🦊" },
    review:
      "Зайчиха-полицейский и хитрый лис расследуют дело в городе зверей. Умно и смешно. " +
      "Диалогов много, речь быстрая — настоящий вызов для A2. Зато взрослый живой язык. " +
      "Ставь на паузу, отматывай, догоняй. Оно того стоит.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=zoomania" }
    ]
  },
  {
    id: "inside-out",
    title: "Alles steht Kopf",
    titleRu: "Головоломка",
    level: "A2",
    genre: "Драма",
    year: 2015,
    length: 95,
    lengthLabel: "1 ч 35 мин",
    rating: 4.8,
    poster: { from: "#ffd36e", to: "#ff5ea8", glyph: "🎭" },
    review:
      "Эмоции внутри головы девочки как живые персонажи. Гениальная идея и много чувств. " +
      "Тут говорят про радость, страх, грусть, злость — самый нужный словарь про себя. " +
      "Немного сложнее, но именно так учат говорить о том, что чувствуешь.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=alles%20steht%20kopf" }
    ]
  },
  {
    id: "incredibles",
    title: "Die Unglaublichen",
    titleRu: "Суперсемейка",
    level: "A2",
    genre: "Приключения",
    year: 2004,
    length: 115,
    lengthLabel: "1 ч 55 мин",
    rating: 4.6,
    poster: { from: "#ff9a6b", to: "#d64545", glyph: "🦸" },
    review:
      "Семья супергероев прячет силу и пытается жить обычной жизнью. Динамика и юмор на месте. " +
      "Речь бытовая и семейная — разговоры про школу, работу, ужин. Плюс экшен. " +
      "Слушаешь ради сюжета, а язык прилипает сам.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=die%20unglaublichen" }
    ]
  },
  {
    id: "encanto",
    title: "Encanto",
    titleRu: "Энканто",
    level: "A2",
    genre: "Мюзикл",
    year: 2021,
    length: 102,
    lengthLabel: "1 ч 42 мин",
    rating: 4.7,
    poster: { from: "#ffb86b", to: "#c74dd8", glyph: "🦋" },
    review:
      "Волшебная семья, где у каждого свой дар — кроме одной девочки. Красочно и музыкально. " +
      "Современная речь, много песен, тёплые семейные диалоги. Отличный свежий немецкий. " +
      "Песни застрянут в голове на неделю. Вместе с новыми словами.",
    platforms: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/search?q=encanto" }
    ]
  }
];

/* Тексты уровней — сказочно, но в стиле Шынгыса */
const LEVELS = {
  A0: {
    code: "A0",
    name: "Начало сказки",
    tagline: "Ты только открыл книгу. И это волшебно.",
    intro:
      "A0 — первая страница. Слов почти нет. Грамматики ещё нет. " +
      "Но уши уже можно тренировать. Здесь всё простое: короткие фразы, добрые голоса, знакомые герои. " +
      "Задача одна — привыкнуть к звучанию. Не понимать всё. Просто слушать сказку.",
    accent: "#ff8ac2"
  },
  A1: {
    code: "A1",
    name: "Первое волшебство",
    tagline: "Слова ожили. Пора складывать их вместе.",
    intro:
      "A1 — язык оживает. Ты уже ловишь знакомые слова в потоке. Это чистая магия. " +
      "Мультфильмы здесь длиннее и ярче. Появляются настоящие истории и настоящие эмоции. " +
      "Смотри с субтитрами. Не бойся паузы. Каждое понятое предложение — маленькое чудо.",
    accent: "#5cc8ff"
  },
  A2: {
    code: "A2",
    name: "Большое приключение",
    tagline: "Ты уже понимаешь. Теперь понимай глубже.",
    intro:
      "A2 — сказка становится большой. Пора выходить в настоящий немецкий. " +
      "Здесь полный метр Disney и Pixar. Речь быстрее, слова богаче, песни сложнее. " +
      "Будет трудно — значит, ты растёшь. Смотри. Пересматривай. Догоняй.",
    accent: "#ffce54"
  }
};
