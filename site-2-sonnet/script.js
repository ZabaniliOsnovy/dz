/* NeuroHub — общий скрипт: данные, шапка, каталог, промпты, формы */
(function () {
  'use strict';

  /* ---------- Иконки ---------- */
  var ICONS = {
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    ext: '<path d="M7 7h10v10M7 17 17 7"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    text: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    video: '<path d="m16 13 5.2 3.5a.5.5 0 0 0 .8-.4V7.9a.5.5 0 0 0-.8-.4L16 11"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    audio: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5l-1.9 6a1 1 0 0 0 .9 1.3h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6a1 1 0 0 0-.9-1.3z"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16"/><path d="M8 16H3v5"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>'
  };
  function svg(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll('[data-icon]:not([data-done])').forEach(function (n) {
      n.innerHTML = svg(n.getAttribute('data-icon'));
      n.setAttribute('data-done', '1');
    });
  }

  /* ---------- Данные ---------- */
  var CATS = {
    text: { label: 'Текст', icon: 'text' }, code: { label: 'Код', icon: 'code' },
    image: { label: 'Изображения', icon: 'image' }, video: { label: 'Видео', icon: 'video' },
    audio: { label: 'Аудио', icon: 'audio' }
  };
  var PRICE = { free: 'Бесплатно', paid: 'Платно', os: 'Open-source' };

  var TOOLS = [
    { id: 'chatgpt', name: 'ChatGPT', cat: 'text', price: ['free', 'paid'], pop: 100, added: 2022, url: 'https://chatgpt.com',
      desc: 'Универсальный чат-бот для текстов, анализа данных, перевода и идей. Есть бесплатный доступ с ограничениями и платные тарифы.',
      strengths: ['Подходит почти для любых текстовых задач', 'Умеет работать с файлами и таблицами', 'Большое число готовых шаблонов и руководств'],
      limits: ['Бесплатный тариф ограничен по числу запросов', 'Факты нужно перепроверять'] },
    { id: 'claude', name: 'Claude', cat: 'text', price: ['free', 'paid'], pop: 94, added: 2023, url: 'https://claude.ai',
      desc: 'Ассистент для длинных документов, аккуратной редактуры, анализа и рассуждений. Хорошо держит заданный тон и структуру.',
      strengths: ['Работает с большими текстами и PDF', 'Аккуратно редактирует и сохраняет стиль', 'Сильный в написании и разборе кода'],
      limits: ['Нет встроенной генерации изображений', 'Лимиты на бесплатном тарифе'] },
    { id: 'gemini', name: 'Gemini', cat: 'text', price: ['free', 'paid'], pop: 90, added: 2023, url: 'https://gemini.google.com',
      desc: 'Мультимодальный ассистент Google: понимает текст, изображения и документы, интегрируется с сервисами Google.',
      strengths: ['Работа с изображениями и документами', 'Связка с Gmail, Docs и Drive', 'Удобен для поиска и сводок'],
      limits: ['Часть функций зависит от региона и тарифа', 'Ответы нужно проверять на точность'] },
    { id: 'perplexity', name: 'Perplexity', cat: 'text', price: ['free', 'paid'], pop: 82, added: 2023, url: 'https://www.perplexity.ai',
      desc: 'Поисковый ассистент: отвечает на вопросы и показывает источники, на которые опирается. Удобен для быстрых исследований.',
      strengths: ['Ответы со ссылками на источники', 'Быстрый обзор темы', 'Режим уточняющих вопросов'],
      limits: ['Качество зависит от найденных источников', 'Лучшие режимы доступны по подписке'] },
    { id: 'llama', name: 'Llama 3', cat: 'text', price: ['os', 'free'], pop: 78, added: 2024, url: 'https://www.llama.com',
      desc: 'Семейство открытых языковых моделей от Meta. Можно запускать на своём оборудовании и дообучать под свои задачи.',
      strengths: ['Открытые веса и гибкая настройка', 'Работает локально, данные не уходят наружу', 'Много готовых сборок и инструментов'],
      limits: ['Нужно собственное железо или хостинг', 'Требует технических навыков'] },
    { id: 'mistral', name: 'Mistral', cat: 'text', price: ['os', 'free', 'paid'], pop: 70, added: 2024, url: 'https://mistral.ai',
      desc: 'Европейские языковые модели: часть с открытыми весами, часть через API. Хороши по соотношению качества и скорости.',
      strengths: ['Быстрые и компактные модели', 'Есть открытые и коммерческие варианты', 'Хорошо работает с несколькими языками'],
      limits: ['Меньше готовых интеграций для новичков', 'Для API нужна регистрация и оплата'] },
    { id: 'copilot', name: 'GitHub Copilot', cat: 'code', price: ['paid', 'free'], pop: 92, added: 2021, url: 'https://github.com/features/copilot',
      desc: 'Подсказывает код прямо в редакторе, пишет тесты, объясняет незнакомые фрагменты и помогает с рефакторингом.',
      strengths: ['Встраивается в популярные редакторы', 'Быстро дописывает шаблонный код', 'Помогает разобраться в чужом коде'],
      limits: ['Основной функционал платный', 'Код нужно проверять и тестировать'] },
    { id: 'cursor', name: 'Cursor', cat: 'code', price: ['free', 'paid'], pop: 88, added: 2023, url: 'https://cursor.com',
      desc: 'Редактор кода со встроенным ИИ: правки по описанию, чат по проекту и поиск по всей кодовой базе.',
      strengths: ['Понимает контекст всего проекта', 'Правки в нескольких файлах сразу', 'Привычный интерфейс редактора'],
      limits: ['Лимиты на бесплатном плане', 'Нужно привыкать к новому редактору'] },
    { id: 'windsurf', name: 'Windsurf', cat: 'code', price: ['free', 'paid'], pop: 66, added: 2024, url: 'https://windsurf.com',
      desc: 'Среда разработки с ИИ-агентом, который планирует задачи и вносит изменения в проект по вашему описанию.',
      strengths: ['Агентный режим для сложных задач', 'Автодополнение и чат', 'Расширения для популярных IDE'],
      limits: ['Агент требует внимательной проверки', 'Часть функций только по подписке'] },
    { id: 'deepseek-coder', name: 'DeepSeek Coder', cat: 'code', price: ['os', 'free'], pop: 60, added: 2024, url: 'https://github.com/deepseek-ai/DeepSeek-Coder',
      desc: 'Открытые модели для генерации и дополнения кода на множестве языков. Подходят для локального использования.',
      strengths: ['Открытые веса', 'Работает офлайн', 'Поддержка многих языков программирования'],
      limits: ['Нужна настройка окружения', 'Требовательна к памяти видеокарты'] },
    { id: 'midjourney', name: 'Midjourney', cat: 'image', price: ['paid'], pop: 95, added: 2022, url: 'https://www.midjourney.com',
      desc: 'Генерация выразительных изображений по текстовому описанию в разных стилях: от фотореализма до иллюстрации.',
      strengths: ['Очень выразительная эстетика', 'Богатый набор параметров и стилей', 'Активное сообщество и примеры'],
      limits: ['Бесплатного тарифа нет', 'Нужно учиться писать промпты'] },
    { id: 'sd', name: 'Stable Diffusion', cat: 'image', price: ['os', 'free'], pop: 84, added: 2022, url: 'https://stability.ai',
      desc: 'Открытая модель генерации изображений: запускается на своём компьютере, поддерживает множество расширений и дообучение.',
      strengths: ['Полный контроль и локальный запуск', 'Тысячи готовых моделей и стилей', 'Гибкая настройка через расширения'],
      limits: ['Нужна видеокарта', 'Настройка сложнее, чем в облачных сервисах'] },
    { id: 'flux', name: 'FLUX', cat: 'image', price: ['os', 'paid', 'free'], pop: 76, added: 2024, url: 'https://bfl.ai',
      desc: 'Семейство моделей изображений с хорошей детализацией и точным следованием описанию. Часть версий открыта.',
      strengths: ['Высокая детализация', 'Хорошо понимает сложные описания', 'Есть открытые версии'],
      limits: ['Разные лицензии у разных версий', 'Требует мощного оборудования для локального запуска'] },
    { id: 'runway', name: 'Runway', cat: 'video', price: ['free', 'paid'], pop: 86, added: 2023, url: 'https://runwayml.com',
      desc: 'Создание и редактирование коротких видео по тексту и картинке, удаление фона и инструменты для монтажа.',
      strengths: ['Видео из текста и изображений', 'Набор инструментов для монтажа', 'Удобный веб-интерфейс'],
      limits: ['Расход кредитов на генерацию', 'Длительность роликов ограничена'] },
    { id: 'pika', name: 'Pika', cat: 'video', price: ['free', 'paid'], pop: 64, added: 2024, url: 'https://pika.art',
      desc: 'Сервис для генерации коротких видео и анимации изображений с эффектами. Просто освоить, подходит для соцсетей.',
      strengths: ['Быстрый старт без опыта', 'Эффекты и анимация картинок', 'Подходит для коротких роликов'],
      limits: ['Короткие клипы', 'Лимиты бесплатного плана'] },
    { id: 'luma', name: 'Luma Dream Machine', cat: 'video', price: ['free', 'paid'], pop: 68, added: 2024, url: 'https://lumalabs.ai/dream-machine',
      desc: 'Генерирует видео по описанию или стартовому кадру с плавным движением камеры и реалистичной динамикой.',
      strengths: ['Плавное движение камеры', 'Старт от изображения', 'Реалистичная динамика сцены'],
      limits: ['Ограничения по длительности', 'Очередь при высокой нагрузке'] },
    { id: 'suno', name: 'Suno', cat: 'audio', price: ['free', 'paid'], pop: 85, added: 2023, url: 'https://suno.com',
      desc: 'Сочиняет песни с вокалом и аранжировкой по короткому описанию настроения и жанра. Можно задать собственный текст.',
      strengths: ['Готовая песня за минуту', 'Свой текст и выбор жанра', 'Простой интерфейс'],
      limits: ['Условия коммерческого использования зависят от тарифа', 'Результат нужно подбирать несколькими попытками'] },
    { id: 'elevenlabs', name: 'ElevenLabs', cat: 'audio', price: ['free', 'paid'], pop: 80, added: 2023, url: 'https://elevenlabs.io',
      desc: 'Синтез естественной речи на многих языках, клонирование голоса и озвучка видео с сохранением интонаций.',
      strengths: ['Естественно звучащие голоса', 'Много языков', 'API для разработчиков'],
      limits: ['Лимит символов на бесплатном тарифе', 'Клонирование голоса требует согласия владельца'] },
    { id: 'whisper', name: 'Whisper', cat: 'audio', price: ['os', 'free'], pop: 74, added: 2022, url: 'https://github.com/openai/whisper',
      desc: 'Открытая модель распознавания речи: превращает аудио и видео в текст на десятках языков, включая русский.',
      strengths: ['Открытый код и локальный запуск', 'Работает с шумными записями', 'Поддержка русского языка'],
      limits: ['Нужна установка и немного навыков', 'Долго обрабатывает длинные записи без видеокарты'] }
  ];

  var PCATS = {
    marketing: 'Тексты и маркетинг', code: 'Код и разработка', image: 'Изображения', video: 'Видео',
    audio: 'Аудио', study: 'Учёба и работа', business: 'Бизнес'
  };
  var LEVELS = { novice: 'Новичок', pro: 'Продвинутый' };

  var PROMPTS = [
    { id: 'p1', title: 'Пост для соцсетей', cat: 'marketing', tool: 'ChatGPT', level: 'novice', lang: 'RU', pop: 98, added: 12,
      text: 'Ты — опытный SMM-менеджер. Напиши 3 варианта поста для [соцсеть] о [продукт] для аудитории [целевая аудитория]. Тон: [тон]. В каждом варианте: цепляющий первый абзац, 2–3 абзаца пользы, призыв к действию и 3 релевантных хештега. Длина каждого поста — не более [число] знаков.' },
    { id: 'p2', title: 'Ревью кода', cat: 'code', tool: 'Claude', level: 'pro', lang: 'RU', pop: 95, added: 11,
      text: 'Проведи ревью кода на [язык программирования]. Найди ошибки, уязвимости и узкие места по производительности. Для каждой проблемы укажи: серьёзность (низкая/средняя/высокая), объяснение и исправленный фрагмент. В конце дай 3 рекомендации по структуре. Код:\n[вставьте код]' },
    { id: 'p3', title: 'Минималистичный логотип', cat: 'image', tool: 'Midjourney', level: 'novice', lang: 'EN', pop: 90, added: 10,
      text: 'Minimalist logo for [company name], symbol of [object], flat geometric shapes, two colors [color 1] and [color 2], white background, vector style, clean negative space --ar 1:1 --style raw' },
    { id: 'p4', title: 'Конспект лекции', cat: 'study', tool: 'Gemini', level: 'novice', lang: 'RU', pop: 88, added: 9,
      text: 'Сделай структурированный конспект текста ниже: главные тезисы, определения терминов и 5 вопросов для самопроверки с ответами. Объём — не более [число] слов. Используй заголовки и маркированные списки.\nТекст:\n[вставьте текст лекции]' },
    { id: 'p5', title: 'Сцена для короткого видео', cat: 'video', tool: 'Runway', level: 'pro', lang: 'EN', pop: 76, added: 8,
      text: 'A 10-second cinematic shot: [location], [time of day], camera [camera movement], main subject [subject], mood [mood]. Soft volumetric light, shallow depth of field, natural motion, 24 fps.' },
    { id: 'p6', title: 'Бизнес-план за час', cat: 'business', tool: 'ChatGPT', level: 'pro', lang: 'RU', pop: 92, added: 7,
      text: 'Помоги составить краткий бизнес-план для идеи [идея]. Включи: целевую аудиторию, ценностное предложение, каналы привлечения, модель дохода, основные риски и план на первые 90 дней в виде таблицы. Если не хватает данных, сначала задай мне до 5 уточняющих вопросов.' },
    { id: 'p7', title: 'Объяснение кода простыми словами', cat: 'code', tool: 'Cursor', level: 'novice', lang: 'RU', pop: 84, added: 6,
      text: 'Объясни, что делает этот код, как будто я только начинаю программировать. Разбери по шагам, отметь важные строки и предложи 2 упражнения, чтобы закрепить тему.\n[вставьте код]' },
    { id: 'p8', title: 'Продающее описание товара', cat: 'marketing', tool: 'Claude', level: 'novice', lang: 'RU', pop: 86, added: 5,
      text: 'Напиши описание товара [название] для карточки в интернет-магазине. Аудитория: [аудитория]. Структура: заголовок до 60 знаков, 3 ключевые выгоды, характеристики списком, короткий призыв. Избегай штампов вроде «уникальный» и «лучший на рынке».' },
    { id: 'p9', title: 'Подготовка к собеседованию', cat: 'study', tool: 'ChatGPT', level: 'novice', lang: 'RU', pop: 80, added: 4,
      text: 'Ты — интервьюер на позицию [должность] в компанию [сфера]. Задавай мне по одному вопросу, жди ответа, затем оценивай его по шкале от 1 до 5 и давай совет, как улучшить. Начни с вопроса о моём опыте.' },
    { id: 'p10', title: 'Портрет в студийном свете', cat: 'image', tool: 'Midjourney', level: 'pro', lang: 'EN', pop: 78, added: 3,
      text: 'Studio portrait of [subject], soft key light with rim light, 85mm lens, shallow depth of field, neutral gray backdrop, natural skin texture, muted color grading, high detail --ar 4:5 --v 6' },
    { id: 'p11', title: 'Музыкальный трек по настроению', cat: 'audio', tool: 'Suno', level: 'novice', lang: 'RU', pop: 72, added: 2,
      text: 'Жанр: [жанр]. Настроение: [настроение]. Темп: [медленный/средний/быстрый]. Тема песни: [тема]. Вокал: [мужской/женский/без вокала]. Куплет и припев на русском языке, припев запоминающийся и простой.' },
    { id: 'p12', title: 'Анализ отзывов клиентов', cat: 'business', tool: 'Gemini', level: 'pro', lang: 'RU', pop: 74, added: 1,
      text: 'Проанализируй отзывы клиентов ниже. Выдели 5 основных тем, для каждой дай долю упоминаний, примеры цитат и конкретное предложение по улучшению. В конце составь приоритетный список из 3 действий на ближайший месяц.\nОтзывы:\n[вставьте отзывы]' }
  ];

  /* ---------- Утилиты ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function plural(n, one, few, many) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
    return many;
  }
  function highlightVars(text) {
    return esc(text).replace(/\[[^\]\n]+\]/g, '<span class="var">$&</span>');
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    if (!t) {
      t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite');
      document.body.appendChild(t);
    }
    t.innerHTML = svg('check') + '<span>' + esc(msg) + '</span>';
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); } finally { ta.remove(); }
    });
  }
  function getParams() { return new URLSearchParams(location.search); }
  function setParams(obj) {
    var p = new URLSearchParams();
    Object.keys(obj).forEach(function (k) { if (obj[k]) p.set(k, obj[k]); });
    var qs = p.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }
  function debounce(fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; }

  /* ---------- Рендер карточек ---------- */
  function toolCard(t) {
    var c = CATS[t.cat];
    return '<article class="card tool-card hoverable cat-' + t.cat + '" data-id="' + t.id + '">' +
      '<div class="tool-head"><span class="tile">' + svg(c.icon) + '</span><div><h3>' + esc(t.name) + '</h3><div class="tool-cat">' + c.label + '</div></div></div>' +
      '<p class="tool-desc">' + esc(t.desc) + '</p>' +
      '<div class="tool-badges">' + t.price.map(function (p) { return '<span class="badge ' + p + '">' + PRICE[p] + '</span>'; }).join('') + '</div>' +
      '<div class="tool-actions"><a class="btn btn-primary btn-sm" href="' + t.url + '" target="_blank" rel="noopener noreferrer">Перейти на сайт ' + svg('ext') + '</a>' +
      '<button class="btn btn-secondary btn-sm" type="button" data-details="' + t.id + '">Подробнее</button></div></article>';
  }
  function promptCard(p, favs) {
    var long = p.text.length > 150 || p.text.indexOf('\n') > -1;
    var fav = favs && favs.indexOf(p.id) > -1;
    return '<article class="card prompt-card" data-id="' + p.id + '">' +
      '<div class="prompt-top"><h3>' + esc(p.title) + '</h3>' +
      '<button class="fav" type="button" data-fav="' + p.id + '" aria-pressed="' + (fav ? 'true' : 'false') + '" aria-label="В избранное: ' + esc(p.title) + '">' + svg('heart') + '</button></div>' +
      '<div class="prompt-tags"><span class="tag accent">' + PCATS[p.cat] + '</span><span class="tag">' + esc(p.tool) + '</span><span class="tag">' + LEVELS[p.level] + '</span><span class="tag">' + p.lang + '</span></div>' +
      '<div class="prompt-box clamped" id="pb-' + p.id + '">' + highlightVars(p.text) + '</div>' +
      '<div class="prompt-foot"><div class="left"><button class="btn btn-primary btn-sm" type="button" data-copy="' + p.id + '">' + svg('copy') + '<span>Копировать</span></button>' +
      (long ? '<button class="btn-link" type="button" data-expand="' + p.id + '" aria-expanded="false" aria-controls="pb-' + p.id + '">Развернуть</button>' : '') + '</div>' +
      '<a class="btn-link" href="catalog.html?q=' + encodeURIComponent(p.tool) + '">Открыть в каталоге ' + svg('arrow') + '</a></div></article>';
  }

  /* ---------- Общие действия ---------- */
  function getFavs() { try { return JSON.parse(localStorage.getItem('nh-favs') || '[]'); } catch (e) { return []; } }
  function saveFavs(a) { try { localStorage.setItem('nh-favs', JSON.stringify(a)); } catch (e) { /* ignore */ } }

  function bindPromptActions(root) {
    root.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-copy],[data-expand],[data-fav]');
      if (!b || !root.contains(b)) return;
      if (b.hasAttribute('data-copy')) {
        var p = PROMPTS.filter(function (x) { return x.id === b.getAttribute('data-copy'); })[0];
        copyText(p.text).then(function () {
          var span = $('span', b), old = span.textContent;
          b.classList.add('copied'); span.textContent = 'Скопировано ✓';
          toast('Промпт скопирован в буфер обмена');
          setTimeout(function () { b.classList.remove('copied'); span.textContent = old; }, 2000);
        }).catch(function () { toast('Не удалось скопировать — выделите текст вручную'); });
      } else if (b.hasAttribute('data-expand')) {
        var box = $('#pb-' + b.getAttribute('data-expand')), open = box.classList.toggle('clamped') === false;
        b.textContent = open ? 'Свернуть' : 'Развернуть'; b.setAttribute('aria-expanded', open ? 'true' : 'false');
      } else {
        var id = b.getAttribute('data-fav'), favs = getFavs(), i = favs.indexOf(id);
        if (i > -1) favs.splice(i, 1); else favs.push(id);
        saveFavs(favs); b.setAttribute('aria-pressed', i > -1 ? 'false' : 'true');
      }
    });
  }

  /* ---------- Шапка / общее ---------- */
  function initShell() {
    hydrateIcons();
    var burger = $('.burger'), panel = $('#nav-panel');
    if (burger && panel) {
      burger.addEventListener('click', function () {
        var open = panel.classList.toggle('open'); burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { panel.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
    }
    $$('.js-search').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = f.elements.q.value.trim();
        if (document.body.getAttribute('data-page') === 'catalog' && window.__catalogSearch) { window.__catalogSearch(q); return; }
        location.href = 'catalog.html' + (q ? '?q=' + encodeURIComponent(q) : '');
      });
    });
    var btn = document.createElement('button');
    btn.className = 'to-top'; btn.type = 'button'; btn.setAttribute('aria-label', 'Наверх'); btn.innerHTML = svg('up');
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(btn);
    window.addEventListener('scroll', function () { btn.classList.toggle('show', window.scrollY > 600); }, { passive: true });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .1 });
      $$('.reveal').forEach(function (n) { io.observe(n); });
    } else { $$('.reveal').forEach(function (n) { n.classList.add('in'); }); }
    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Главная ---------- */
  function initHome() {
    $$('[data-count]').forEach(function (n) {
      var k = n.getAttribute('data-count');
      var c = TOOLS.filter(function (t) { return t.cat === k; }).length;
      n.textContent = c + ' ' + plural(c, 'инструмент', 'инструмента', 'инструментов');
    });
    var wrap = $('#homeTools');
    function show(mode) {
      var list = TOOLS.slice();
      if (mode === 'new') list.sort(function (a, b) { return b.added - a.added || b.pop - a.pop; });
      else if (mode === 'free') list = list.filter(function (t) { return t.price.indexOf('free') > -1; }).sort(function (a, b) { return b.pop - a.pop; });
      else list.sort(function (a, b) { return b.pop - a.pop; });
      wrap.innerHTML = list.slice(0, 3).map(toolCard).join('');
      hydrateIcons(wrap);
    }
    $$('[data-tab]').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('[data-tab]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        show(b.getAttribute('data-tab'));
      });
    });
    show('top');
    wrap.addEventListener('click', function (e) {
      var b = e.target.closest('[data-details]'); if (b) location.href = 'catalog.html?q=' + encodeURIComponent(TOOLS.filter(function (t) { return t.id === b.getAttribute('data-details'); })[0].name);
    });
    var pw = $('#homePrompts');
    pw.innerHTML = PROMPTS.slice().sort(function (a, b) { return b.pop - a.pop; }).slice(0, 3).map(function (p) { return promptCard(p, getFavs()); }).join('');
    bindPromptActions(pw);
    $$('.hero-search').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = f.elements.q.value.trim();
        location.href = 'catalog.html' + (q ? '?q=' + encodeURIComponent(q) : '');
      });
    });
  }

  /* ---------- Каталог ---------- */
  function initCatalog() {
    var PAGE = 9;
    var params = getParams();
    var state = {
      q: params.get('q') || '',
      cats: (params.get('cat') || '').split(',').filter(function (x) { return CATS[x]; }),
      price: (params.get('price') || '').split(',').filter(function (x) { return PRICE[x]; }),
      sort: ['popular', 'new', 'alpha'].indexOf(params.get('sort')) > -1 ? params.get('sort') : 'popular',
      view: 'grid', shown: PAGE
    };
    var grid = $('#toolGrid'), count = $('#resultCount'), active = $('#activeFilters'), more = $('#moreWrap'), empty = $('#emptyState');
    var search = $('#catSearch'), clear = $('#catClear'), sort = $('#sortSelect'), modal = $('#toolModal');
    search.value = state.q; sort.value = state.sort;

    function filtered() {
      var q = state.q.toLowerCase();
      var list = TOOLS.filter(function (t) {
        if (state.cats.length && state.cats.indexOf(t.cat) < 0) return false;
        if (state.price.length && !state.price.some(function (p) { return t.price.indexOf(p) > -1; })) return false;
        if (q && (t.name + ' ' + t.desc + ' ' + CATS[t.cat].label).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      list.sort(function (a, b) {
        if (state.sort === 'alpha') return a.name.localeCompare(b.name, 'ru');
        if (state.sort === 'new') return b.added - a.added || b.pop - a.pop;
        return b.pop - a.pop;
      });
      return list;
    }
    function sync() {
      setParams({ q: state.q, cat: state.cats.join(','), price: state.price.join(','), sort: state.sort === 'popular' ? '' : state.sort });
    }
    function render() {
      var list = filtered();
      count.textContent = 'Найдено: ' + list.length + ' ' + plural(list.length, 'нейросеть', 'нейросети', 'нейросетей');
      grid.innerHTML = list.slice(0, state.shown).map(toolCard).join('');
      grid.classList.toggle('list-view', state.view === 'list');
      empty.hidden = list.length > 0; grid.hidden = list.length === 0;
      more.hidden = list.length <= state.shown;
      // чипы задач
      $$('#catChips [data-cat]').forEach(function (b) {
        var k = b.getAttribute('data-cat');
        b.setAttribute('aria-pressed', k === 'all' ? (state.cats.length === 0 ? 'true' : 'false') : (state.cats.indexOf(k) > -1 ? 'true' : 'false'));
      });
      $$('#priceChips [data-price]').forEach(function (b) {
        var on = state.price.indexOf(b.getAttribute('data-price')) > -1;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      // активные фильтры
      var items = [];
      state.cats.forEach(function (k) { items.push(['cat', k, CATS[k].label]); });
      state.price.forEach(function (k) { items.push(['price', k, PRICE[k]]); });
      if (state.q) items.push(['q', '', '«' + state.q + '»']);
      active.innerHTML = items.map(function (i) {
        return '<button class="chip removable" type="button" data-rm="' + i[0] + '" data-v="' + esc(i[1]) + '" aria-label="Убрать фильтр ' + esc(i[2]) + '">' + esc(i[2]) + svg('x') + '</button>';
      }).join('');
      clear.classList.toggle('show', !!state.q);
      hydrateIcons(grid); sync();
    }
    function toggle(arr, v) { var i = arr.indexOf(v); if (i > -1) arr.splice(i, 1); else arr.push(v); }
    function reset() { state.q = ''; state.cats = []; state.price = []; state.sort = 'popular'; state.shown = PAGE; search.value = ''; sort.value = 'popular'; render(); }

    $('#catChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat]'); if (!b) return;
      var k = b.getAttribute('data-cat');
      if (k === 'all') state.cats = []; else toggle(state.cats, k);
      state.shown = PAGE; render();
    });
    $('#priceChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-price]'); if (!b) return;
      toggle(state.price, b.getAttribute('data-price')); state.shown = PAGE; render();
    });
    search.addEventListener('input', debounce(function () { state.q = search.value.trim(); state.shown = PAGE; render(); }, 150));
    clear.addEventListener('click', function () { search.value = ''; state.q = ''; render(); search.focus(); });
    sort.addEventListener('change', function () { state.sort = sort.value; render(); });
    $$('[data-reset]').forEach(function (b) { b.addEventListener('click', reset); });
    active.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rm]'); if (!b) return;
      var t = b.getAttribute('data-rm'), v = b.getAttribute('data-v');
      if (t === 'cat') toggle(state.cats, v); else if (t === 'price') toggle(state.price, v); else { state.q = ''; search.value = ''; }
      render();
    });
    $('#moreBtn').addEventListener('click', function () { state.shown += PAGE; render(); });
    $$('[data-view]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.view = b.getAttribute('data-view');
        $$('[data-view]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        render();
      });
    });
    var ft = $('#filtersToggle'), fp = $('#filtersPanel');
    if (ft) ft.addEventListener('click', function () {
      var c = fp.classList.toggle('collapsed'); ft.setAttribute('aria-expanded', c ? 'false' : 'true');
    });
    if (window.matchMedia('(max-width: 900px)').matches) { fp.classList.add('collapsed'); ft.setAttribute('aria-expanded', 'false'); }
    window.__catalogSearch = function (q) { search.value = q; state.q = q; state.shown = PAGE; render(); };

    // Модальное окно
    grid.addEventListener('click', function (e) {
      var b = e.target.closest('[data-details]'); if (!b) return;
      var t = TOOLS.filter(function (x) { return x.id === b.getAttribute('data-details'); })[0];
      var rel = PROMPTS.filter(function (p) { return p.tool.toLowerCase() === t.name.toLowerCase(); });
      if (rel.length < 2) {
        var map = { text: ['marketing', 'study', 'business'], code: ['code'], image: ['image'], video: ['video'], audio: ['audio'] }[t.cat];
        PROMPTS.forEach(function (p) { if (map.indexOf(p.cat) > -1 && rel.indexOf(p) < 0) rel.push(p); });
      }
      rel = rel.slice(0, 3);
      $('#modalBody').innerHTML =
        '<div class="tool-head cat-' + t.cat + '"><span class="tile lg">' + svg(CATS[t.cat].icon) + '</span><div><h3 id="modalTitle">' + esc(t.name) + '</h3><div class="tool-cat">' + CATS[t.cat].label + '</div></div></div>' +
        '<p style="color:var(--text-2)">' + esc(t.desc) + '</p>' +
        '<div class="tool-badges">' + t.price.map(function (p) { return '<span class="badge ' + p + '">' + PRICE[p] + '</span>'; }).join('') + '</div>' +
        '<div class="cols-2"><div><h4>Сильные стороны</h4><ul>' + t.strengths.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>' +
        '<div><h4>Ограничения</h4><ul>' + t.limits.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div></div>' +
        '<div class="rel"><h4>Связанные промпты</h4>' + rel.map(function (p) { return '<a href="prompts.html?tool=' + encodeURIComponent(p.tool) + '"><span>' + esc(p.title) + '</span><span style="color:var(--text-muted)">' + esc(p.tool) + '</span></a>'; }).join('') + '</div>' +
        '<div class="tool-actions"><a class="btn btn-primary" href="' + t.url + '" target="_blank" rel="noopener noreferrer">Перейти на сайт ' + svg('ext') + '</a>' +
        '<a class="btn btn-secondary" href="prompts.html?tool=' + encodeURIComponent(t.name) + '">Промпты для ' + esc(t.name) + '</a></div>';
      if (modal.showModal) modal.showModal(); else modal.setAttribute('open', '');
    });
    modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.modal-close')) modal.close(); });
    render();
  }

  /* ---------- Промпты ---------- */
  function initPrompts() {
    var params = getParams();
    var tools = []; PROMPTS.forEach(function (p) { if (tools.indexOf(p.tool) < 0) tools.push(p.tool); }); tools.sort();
    var toolSel = $('#fTool');
    toolSel.innerHTML = '<option value="">Нейросеть: любая</option>' + tools.map(function (t) { return '<option>' + esc(t) + '</option>'; }).join('');
    var state = {
      q: params.get('q') || '', cat: PCATS[params.get('cat')] ? params.get('cat') : '',
      tool: tools.indexOf(params.get('tool')) > -1 ? params.get('tool') : '', level: LEVELS[params.get('level')] ? params.get('level') : '',
      lang: ['RU', 'EN'].indexOf(params.get('lang')) > -1 ? params.get('lang') : '', sort: params.get('sort') === 'new' ? 'new' : 'popular'
    };
    var search = $('#pSearch'), clear = $('#pClear'), grid = $('#promptGrid'), count = $('#pCount'), empty = $('#pEmpty');
    search.value = state.q; toolSel.value = state.tool; $('#fLevel').value = state.level; $('#fLang').value = state.lang; $('#fSort').value = state.sort;
    if (params.get('tool') && !state.tool) { state.q = params.get('tool'); search.value = state.q; }

    function render() {
      var q = state.q.toLowerCase(), favs = getFavs();
      var list = PROMPTS.filter(function (p) {
        if (state.cat && p.cat !== state.cat) return false;
        if (state.tool && p.tool !== state.tool) return false;
        if (state.level && p.level !== state.level) return false;
        if (state.lang && p.lang !== state.lang) return false;
        if (q && (p.title + ' ' + p.text + ' ' + p.tool).toLowerCase().indexOf(q) < 0) return false;
        return true;
      }).sort(function (a, b) { return state.sort === 'new' ? b.added - a.added : b.pop - a.pop; });
      count.textContent = 'Найдено: ' + list.length + ' ' + plural(list.length, 'промпт', 'промпта', 'промптов');
      grid.innerHTML = list.map(function (p) { return promptCard(p, favs); }).join('');
      grid.hidden = !list.length; empty.hidden = list.length > 0;
      $$('#pCatChips [data-pcat]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-pcat') === state.cat ? 'true' : 'false'); });
      clear.classList.toggle('show', !!state.q);
      hydrateIcons(grid);
      setParams({ q: state.q, cat: state.cat, tool: state.tool, level: state.level, lang: state.lang, sort: state.sort === 'popular' ? '' : state.sort });
    }
    $('#pCatChips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-pcat]'); if (!b) return; state.cat = b.getAttribute('data-pcat'); render();
    });
    search.addEventListener('input', debounce(function () { state.q = search.value.trim(); render(); }, 150));
    clear.addEventListener('click', function () { search.value = ''; state.q = ''; render(); search.focus(); });
    [['fTool', 'tool'], ['fLevel', 'level'], ['fLang', 'lang'], ['fSort', 'sort']].forEach(function (m) {
      $('#' + m[0]).addEventListener('change', function (e) { state[m[1]] = e.target.value; render(); });
    });
    $$('[data-reset]').forEach(function (b) {
      b.addEventListener('click', function () {
        state = { q: '', cat: '', tool: '', level: '', lang: '', sort: 'popular' };
        search.value = ''; toolSel.value = ''; $('#fLevel').value = ''; $('#fLang').value = ''; $('#fSort').value = 'popular'; render();
      });
    });
    bindPromptActions(grid);
    var ft = $('#filtersToggle'), fp = $('#filtersPanel');
    if (ft) ft.addEventListener('click', function () { var c = fp.classList.toggle('collapsed'); ft.setAttribute('aria-expanded', c ? 'false' : 'true'); });
    if (window.matchMedia('(max-width: 900px)').matches) { fp.classList.add('collapsed'); ft.setAttribute('aria-expanded', 'false'); }
    render();

    // Аккордеон
    $$('.acc-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var item = b.parentElement, open = !item.classList.contains('open');
        $$('.acc-item').forEach(function (i) { i.classList.remove('open'); $('.acc-btn', i).setAttribute('aria-expanded', 'false'); });
        if (open) { item.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      });
    });

    initSuggestForm();
  }

  /* ---------- Форма предложения ---------- */
  var VALIDATORS = {
    required: function (v) { return v.trim() ? '' : 'Заполните это поле'; },
    min: function (n) { return function (v) { return v.trim().length >= n ? '' : 'Минимум ' + n + ' символов'; }; },
    email: function (v) { return !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Введите корректный email, например name@example.com'; },
    url: function (v) {
      if (!v.trim()) return 'Укажите ссылку на сайт';
      try { var u = new URL(v.trim()); return /^https?:$/.test(u.protocol) && u.hostname.indexOf('.') > 0 ? '' : 'Ссылка должна начинаться с http:// или https://'; } catch (e) { return 'Введите корректную ссылку, например https://example.com'; }
    }
  };
  function initSuggestForm() {
    var card = $('#suggestCard'); if (!card) return;
    var tabs = $$('[role="tab"]', card), forms = { prompt: $('#formPrompt'), tool: $('#formTool') };
    var rules = {
      formPrompt: { sp_title: [VALIDATORS.required, VALIDATORS.min(3)], sp_cat: [VALIDATORS.required], sp_tool: [VALIDATORS.required], sp_text: [VALIDATORS.required, VALIDATORS.min(30), function (v) { return v.length <= 1000 ? '' : 'Не более 1000 символов'; }], sp_email: [VALIDATORS.email], sp_agree: [function (v, el) { return el.checked ? '' : 'Нужно ваше согласие'; }] },
      formTool: { st_name: [VALIDATORS.required, VALIDATORS.min(2)], st_url: [VALIDATORS.url], st_task: [VALIDATORS.required], st_price: [function (v, el, form) { return form.querySelector('[name="st_price"]:checked') ? '' : 'Выберите вариант'; }], st_desc: [VALIDATORS.required, VALIDATORS.min(20), function (v) { return v.length <= 300 ? '' : 'Не более 300 символов'; }], st_email: [VALIDATORS.email], st_agree: [function (v, el) { return el.checked ? '' : 'Нужно ваше согласие'; }] }
    };
    function fieldWrap(el) { return el.closest('.field'); }
    function check(form, name) {
      var els = form.querySelectorAll('[name="' + name + '"]'), el = els[0], fw = fieldWrap(el), msg = '';
      var rs = rules[form.id][name];
      for (var i = 0; i < rs.length && !msg; i++) msg = rs[i](el.value || '', el, form);
      fw.classList.toggle('invalid', !!msg);
      fw.classList.toggle('valid', !msg && !!(el.value || '').trim() && el.type !== 'checkbox' && el.type !== 'radio');
      var m = $('.msg', fw); if (m && msg !== undefined) { if (msg) { m.textContent = msg; } else if (m.getAttribute('data-default') !== null) { m.textContent = m.getAttribute('data-default'); } else { m.textContent = ''; } }
      el.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }
    $$('.msg', card).forEach(function (m) { m.setAttribute('data-default', m.textContent); });
    Object.keys(rules).forEach(function (fid) {
      var form = $('#' + fid), touched = {};
      Object.keys(rules[fid]).forEach(function (name) {
        $$('[name="' + name + '"]', form).forEach(function (el) {
          el.addEventListener('blur', function () { touched[name] = true; check(form, name); });
          el.addEventListener(el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'radio' ? 'change' : 'input', function () { if (touched[name] || fieldWrap(el).classList.contains('invalid') || el.type === 'checkbox' || el.type === 'radio' || el.tagName === 'SELECT') { touched[name] = true; check(form, name); } });
        });
      });
      // счётчики
      $$('textarea[data-max]', form).forEach(function (ta) {
        var cnt = $('#' + ta.getAttribute('data-counter'));
        function upd() { var n = ta.value.length, max = +ta.getAttribute('data-max'); cnt.textContent = n + ' / ' + max; cnt.style.color = n > max ? 'var(--error)' : ''; }
        ta.addEventListener('input', upd); upd();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var first = null;
        Object.keys(rules[fid]).forEach(function (name) { touched[name] = true; if (!check(form, name) && !first) first = $('[name="' + name + '"]', form); });
        if (first) { first.focus(); return; }
        if (form.elements.website && form.elements.website.value) { /* honeypot: тихо игнорируем */ }
        var btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'Отправляем…';
        setTimeout(function () {
          card.classList.add('done');
          $('#successText').textContent = fid === 'formPrompt' ? 'Мы проверим ваш промпт в течение нескольких дней и сообщим, если понадобятся уточнения.' : 'Мы проверим нейросеть в течение нескольких дней и добавим её в каталог после модерации.';
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 600);
      });
    });
    function selectTab(key, focus) {
      tabs.forEach(function (t) { var on = t.getAttribute('data-tab') === key; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
      forms.prompt.hidden = key !== 'prompt'; forms.tool.hidden = key !== 'tool';
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(t.getAttribute('data-tab')); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]; selectTab(n.getAttribute('data-tab'), true); }
      });
    });
    $('#againBtn').addEventListener('click', function () {
      card.classList.remove('done');
      Object.keys(forms).forEach(function (k) {
        var f = forms[k]; f.reset(); $$('.field', f).forEach(function (x) { x.classList.remove('invalid', 'valid'); });
        $$('.msg', f).forEach(function (m) { m.textContent = m.getAttribute('data-default') || ''; });
        var b = $('button[type="submit"]', f); b.disabled = false; b.textContent = 'Отправить на модерацию';
        $$('textarea[data-max]', f).forEach(function (t) { t.dispatchEvent(new Event('input')); });
      });
    });
    var wanted = location.hash === '#suggest-tool' ? 'tool' : 'prompt';
    selectTab(wanted);
  }

  /* ---------- Старт ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initShell();
    var page = document.body.getAttribute('data-page');
    if (page === 'home') initHome();
    if (page === 'catalog') initCatalog();
    if (page === 'prompts') initPrompts();
  });
})();
