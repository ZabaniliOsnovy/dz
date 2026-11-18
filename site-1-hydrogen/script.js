const AI_TOOLS = [
  {
    id: 'chatgpt',
    mono: 'GP',
    name: 'ChatGPT (GPT-4o)',
    category: 'Текст',
    categoryLabel: 'Текст и диалоги',
    pricing: 'Freemium',
    desc: 'Универсальный ИИ-ассистент для генерации текстов, анализа документов, кода и работы с изображениями.',
    tags: ['Русский язык', 'API'],
    url: 'https://chatgpt.com',
    popularity: 100
  },
  {
    id: 'claude',
    mono: 'CL',
    name: 'Claude 3.7 Sonnet',
    category: 'Код',
    categoryLabel: 'Текст и код',
    pricing: 'Freemium',
    desc: 'Сильная модель для сложного программирования, длинных документов, анализа архитектуры и точной редактуры.',
    tags: ['200K контекст', 'Артефакты'],
    url: 'https://claude.ai',
    popularity: 96
  },
  {
    id: 'deepseek',
    mono: 'DS',
    name: 'DeepSeek R1',
    category: 'Текст',
    categoryLabel: 'Текст и логика',
    pricing: 'Open-source',
    desc: 'Мощная открытая модель с цепочкой рассуждений для математики, программирования и глубокой аналитики.',
    tags: ['Open-source', 'Бесплатно'],
    url: 'https://chat.deepseek.com',
    popularity: 94
  },
  {
    id: 'midjourney',
    mono: 'MJ',
    name: 'Midjourney v6.1',
    category: 'Изображения',
    categoryLabel: 'Изображения',
    pricing: 'Платно',
    desc: 'Эталонная генерация фотореалистичных сцен, иллюстраций и концепт-арта по текстовому описанию.',
    tags: ['Фотореализм', 'Стили'],
    url: 'https://www.midjourney.com',
    popularity: 92
  },
  {
    id: 'flux',
    mono: 'FL',
    name: 'FLUX.1 [dev]',
    category: 'Изображения',
    categoryLabel: 'Изображения',
    pricing: 'Open-source',
    desc: 'Открытая модель для генерации картинок с высокой детализацией, точной анатомией и рендерингом текста.',
    tags: ['Open-source', 'Локально'],
    url: 'https://blackforestlabs.ai',
    popularity: 88
  },
  {
    id: 'cursor',
    mono: 'CU',
    name: 'Cursor AI',
    category: 'Код',
    categoryLabel: 'Программирование',
    pricing: 'Freemium',
    desc: 'Умный редактор кода со встроенным ИИ-агентом, который понимает всю кодовую базу проекта целиком.',
    tags: ['IDE', 'Рефакторинг'],
    url: 'https://www.cursor.com',
    popularity: 95
  },
  {
    id: 'runway',
    mono: 'RW',
    name: 'Runway Gen-3',
    category: 'Видео',
    categoryLabel: 'Видео и анимация',
    pricing: 'Платно',
    desc: 'Генерация кинематографичных видеороликов по текстовому описанию или референсному изображению.',
    tags: ['Text-to-Video', '4K'],
    url: 'https://runwayml.com',
    popularity: 86
  },
  {
    id: 'kling',
    mono: 'KL',
    name: 'Kling AI',
    category: 'Видео',
    categoryLabel: 'Видео и анимация',
    pricing: 'Freemium',
    desc: 'Реалистичная физика движения и генерация длинных видеороликов с ежедневными бесплатными кредитами.',
    tags: ['Физика', 'Lip-Sync'],
    url: 'https://klingai.com',
    popularity: 84
  },
  {
    id: 'elevenlabs',
    mono: 'EL',
    name: 'ElevenLabs',
    category: 'Аудио',
    categoryLabel: 'Аудио и голос',
    pricing: 'Freemium',
    desc: 'Реалистичный синтез речи на русском и ещё 30 языках, дубляж видео и клонирование голоса.',
    tags: ['Озвучка', 'Дубляж'],
    url: 'https://elevenlabs.io',
    popularity: 90
  },
  {
    id: 'perplexity',
    mono: 'PX',
    name: 'Perplexity AI',
    category: 'Текст',
    categoryLabel: 'Поиск и факты',
    pricing: 'Бесплатно',
    desc: 'Поисковая система на базе ИИ с проверкой источников, ссылками на статьи и быстрыми саммари.',
    tags: ['Источники', 'Без регистрации'],
    url: 'https://www.perplexity.ai',
    popularity: 91
  },
  {
    id: 'suno',
    mono: 'SN',
    name: 'Suno v4',
    category: 'Аудио',
    categoryLabel: 'Музыка и вокал',
    pricing: 'Freemium',
    desc: 'Создание полноценных песен с вокалом на русском и английском языках в любом музыкальном жанре.',
    tags: ['Вокал', 'Инструментал'],
    url: 'https://suno.com',
    popularity: 87
  },
  {
    id: 'ollama',
    mono: 'OL',
    name: 'Ollama',
    category: 'Код',
    categoryLabel: 'Локальный запуск',
    pricing: 'Бесплатно',
    desc: 'Простая утилита для запуска открытых языковых моделей (Llama, Qwen, DeepSeek) локально на вашем ПК.',
    tags: ['Локально', 'Приватность'],
    url: 'https://ollama.com',
    popularity: 89
  }
];

const PROMPTS = [
  {
    id: 'code-review',
    category: 'Программирование',
    model: 'Для ChatGPT / Claude',
    title: 'Глубокое код-ревью и поиск уязвимостей',
    body: 'Выступи в роли Senior-разработчика на [ЯЗЫК]. Проанализируй следующий код на уязвимости, утечки памяти и узкие места: [ВСТАВЬТЕ КОД]. Предложи исправленную версию с краткими пояснениями.',
    tags: '#код-ревью  #безопасность  #рефакторинг'
  },
  {
    id: 'pas-landing',
    category: 'Копирайтинг',
    model: 'Для ChatGPT / Claude',
    title: 'Продающий текст для лендинга по схеме PAS',
    body: 'Напиши структуру лендинга для продукта [НАЗВАНИЕ]. Целевая аудитория: [АУДИТОРИЯ], главная боль: [ПРОБЛЕМА]. Используй формулу Pain-Agitate-Solve, пиши конкретно и без рекламных клише.',
    tags: '#лендинг  #маркетинг  #копирайтинг'
  },
  {
    id: 'mj-3d-icon',
    category: 'Дизайн и Midjourney',
    model: 'Для Midjourney v6.1 / FLUX',
    title: 'Изометрическая 3D-иконка для IT-продукта',
    body: 'Minimalist 3D isometric icon of [ОБЪЕКТ], glassmorphism and matte dark slate material, soft cyan and indigo rim lighting, clean dark background --ar 1:1',
    tags: '#3d  #иконки  #ui'
  },
  {
    id: 'feynman',
    category: 'Обучение',
    model: 'Для ChatGPT / DeepSeek',
    title: 'Объяснение сложной темы методом Фейнмана',
    body: 'Объясни концепцию [ТЕМА] простым языком, как для новичка. Приведи 2 жизненные аналогии, разбери 3 частые ошибки и в конце дай мини-тест из 3 вопросов для самопроверки.',
    tags: '#обучение  #конспект'
  },
  {
    id: 'mock-interview',
    category: 'Бизнес',
    model: 'Для Claude / ChatGPT',
    title: 'Подготовка к сложному собеседованию',
    body: 'Проведи со мной мок-интервью на позицию [ДОЛЖНОСТЬ] в компанию типа [КОМПАНИЯ]. Задавай по одному вопросу, жди моего ответа, оценивай его по 10-балльной шкале и давай конструктивный фидбек.',
    tags: '#карьера  #интервью'
  },
  {
    id: 'unit-tests',
    category: 'Программирование',
    model: 'Для Cursor / Claude',
    title: 'Генерация unit-тестов с краевыми случаями',
    body: 'Напиши unit-тесты на [ФРЕЙМВОРК] для функции: [КОД]. Обязательно покрой счастливый путь, пустые или null-значения, ошибки сети и граничные условия.',
    tags: '#тестирование  #qa'
  }
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightPromptVars(text) {
  return escapeHtml(text).replace(/\[([^\]]+)\]/g, '<span class="prompt-var">[$1]</span>');
}

function getPricingBadgeClass(pricing) {
  const map = {
    'Бесплатно': 'badge-free',
    'Freemium': 'badge-freemium',
    'Платно': 'badge-paid',
    'Open-source': 'badge-opensource'
  };
  return map[pricing] || 'badge-freemium';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function copyPromptText(text, btn) {
  const finish = () => {
    const original = btn.dataset.originalText || btn.textContent;
    btn.dataset.originalText = original;
    btn.textContent = 'Скопировано ✓';
    btn.classList.add('btn-copied');
    showToast('Промпт скопирован в буфер обмена');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('btn-copied');
    }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(finish).catch(() => {
      fallbackCopy(text);
      finish();
    });
  } else {
    fallbackCopy(text);
    finish();
  }
}

function fallbackCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand('copy');
  } catch (_) {}
  document.body.removeChild(area);
}

function renderAICard(tool) {
  const badgeCls = getPricingBadgeClass(tool.pricing);
  const tagsHtml = tool.tags.map(t => `<span class="meta-tag">${escapeHtml(t)}</span>`).join('');
  return `
    <article class="card card-interactive ai-card">
      <div class="ai-card-top">
        <div class="ai-identity">
          <div class="mono-avatar">${escapeHtml(tool.mono)}</div>
          <div>
            <div class="ai-name">${escapeHtml(tool.name)}</div>
            <div class="ai-cat">${escapeHtml(tool.categoryLabel)}</div>
          </div>
        </div>
        <span class="badge ${badgeCls}">${escapeHtml(tool.pricing)}</span>
      </div>
      <p class="card-desc">${escapeHtml(tool.desc)}</p>
      <div class="meta-tags">${tagsHtml}</div>
      <div class="ai-card-actions">
        <a class="btn btn-primary" href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer">Открыть сайт ↗</a>
        <a class="btn btn-secondary" href="prompts.html?category=${encodeURIComponent(tool.category === 'Код' ? 'Программирование' : 'Все')}">Промпты</a>
      </div>
    </article>
  `;
}

function renderPromptCard(pr) {
  return `
    <article class="card prompt-card">
      <div class="prompt-top">
        <span class="prompt-cat-chip">${escapeHtml(pr.category)}</span>
        <span class="prompt-model">${escapeHtml(pr.model)}</span>
      </div>
      <h3 class="card-title">${escapeHtml(pr.title)}</h3>
      <div class="prompt-code">${highlightPromptVars(pr.body)}</div>
      <div class="prompt-footer">
        <span class="prompt-tags">${escapeHtml(pr.tags)}</span>
        <button type="button" class="btn btn-primary copy-prompt-btn" data-prompt-id="${escapeHtml(pr.id)}">Копировать промпт</button>
      </div>
    </article>
  `;
}

function bindCopyButtons(container = document) {
  container.querySelectorAll('.copy-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.promptId;
      const found = PROMPTS.find(p => p.id === id);
      if (found) {
        copyPromptText(found.body, btn);
      }
    });
  });
}

function initMobileMenu() {
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
}

function initHomePage() {
  const popularGrid = document.getElementById('popularToolsGrid');
  if (popularGrid) {
    popularGrid.innerHTML = AI_TOOLS.slice(0, 6).map(renderAICard).join('');
  }

  const weeklyGrid = document.getElementById('weeklyPromptsGrid');
  if (weeklyGrid) {
    weeklyGrid.innerHTML = PROMPTS.slice(0, 2).map(renderPromptCard).join('');
    bindCopyButtons(weeklyGrid);
  }

  const heroForm = document.getElementById('heroSearchForm');
  const heroInput = document.getElementById('heroSearchInput');
  if (heroForm && heroInput) {
    heroForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = heroInput.value.trim();
      window.location.href = q ? `catalog.html?q=${encodeURIComponent(q)}` : 'catalog.html';
    });
  }
}

function initCatalogPage() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const searchInput = document.getElementById('catalogSearch');
  const sortSelect = document.getElementById('catalogSort');
  const countBadge = document.getElementById('catalogCount');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyState = document.getElementById('catalogEmpty');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  const params = new URLSearchParams(window.location.search);
  const state = {
    q: params.get('q') || '',
    category: params.get('category') || 'Все',
    pricing: 'Все',
    sort: 'popular'
  };

  if (searchInput && state.q) {
    searchInput.value = state.q;
  }

  const categoryPills = document.querySelectorAll('#taskFilterRow .pill');
  const pricingPills = document.querySelectorAll('#pricingFilterRow .pill');

  function syncActivePills() {
    categoryPills.forEach(p => p.classList.toggle('active', p.dataset.value === state.category));
    pricingPills.forEach(p => p.classList.toggle('active', p.dataset.value === state.pricing));
    if (resetBtn) {
      const hasFilter = state.q !== '' || state.category !== 'Все' || state.pricing !== 'Все';
      resetBtn.style.display = hasFilter ? 'inline-flex' : 'none';
    }
  }

  function applyFilters() {
    const query = state.q.trim().toLowerCase();
    let list = AI_TOOLS.filter(t => {
      const matchCat = state.category === 'Все' || t.category === state.category;
      const matchPrice = state.pricing === 'Все' || t.pricing === state.pricing;
      const matchQ = !query ||
        t.name.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query) ||
        t.categoryLabel.toLowerCase().includes(query) ||
        t.tags.some(tag => tag.toLowerCase().includes(query));
      return matchCat && matchPrice && matchQ;
    });

    if (state.sort === 'free-first') {
      const rank = { 'Бесплатно': 0, 'Open-source': 1, 'Freemium': 2, 'Платно': 3 };
      list = [...list].sort((a, b) => (rank[a.pricing] ?? 9) - (rank[b.pricing] ?? 9));
    } else if (state.sort === 'alpha') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    } else {
      list = [...list].sort((a, b) => b.popularity - a.popularity);
    }

    if (countBadge) {
      countBadge.textContent = `Найдено: ${list.length}`;
    }

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      grid.innerHTML = list.map(renderAICard).join('');
    }
    syncActivePills();
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      state.category = pill.dataset.value;
      applyFilters();
    });
  });

  pricingPills.forEach(pill => {
    pill.addEventListener('click', () => {
      state.pricing = pill.dataset.value;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.q = searchInput.value;
      applyFilters();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sort = sortSelect.value;
      applyFilters();
    });
  }

  function resetAll() {
    state.q = '';
    state.category = 'Все';
    state.pricing = 'Все';
    state.sort = 'popular';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'popular';
    applyFilters();
  }

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  applyFilters();
}

function initPromptsPage() {
  const grid = document.getElementById('promptsGrid');
  if (!grid) return;

  const searchInput = document.getElementById('promptsSearch');
  const emptyState = document.getElementById('promptsEmpty');
  const catPills = document.querySelectorAll('#promptCatRow .pill');

  const params = new URLSearchParams(window.location.search);
  const state = {
    q: '',
    category: params.get('category') || 'Все'
  };

  function applyPromptFilters() {
    const query = state.q.trim().toLowerCase();
    const list = PROMPTS.filter(p => {
      const matchCat = state.category === 'Все' || p.category === state.category;
      const matchQ = !query ||
        p.title.toLowerCase().includes(query) ||
        p.body.toLowerCase().includes(query) ||
        p.tags.toLowerCase().includes(query) ||
        p.model.toLowerCase().includes(query);
      return matchCat && matchQ;
    });

    catPills.forEach(p => p.classList.toggle('active', p.dataset.value === state.category));

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      grid.innerHTML = list.map(renderPromptCard).join('');
      bindCopyButtons(grid);
    }
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      state.category = pill.dataset.value;
      applyPromptFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.q = searchInput.value;
      applyPromptFilters();
    });
  }

  applyPromptFilters();
  initSubmissionForm();
}

function initSubmissionForm() {
  const form = document.getElementById('submissionForm');
  if (!form) return;

  const typeButtons = document.querySelectorAll('#typeToggleRow .pill');
  const titleLabel = document.getElementById('titleLabel');
  const titleInput = document.getElementById('itemTitle');
  const targetLabel = document.getElementById('targetLabel');
  const targetInput = document.getElementById('itemTarget');
  const bodyLabel = document.getElementById('bodyLabel');
  const bodyInput = document.getElementById('itemBody');
  const categorySelect = document.getElementById('itemCategory');
  const authorInput = document.getElementById('itemAuthor');
  const successBox = document.getElementById('formSuccess');
  const sendAnotherBtn = document.getElementById('sendAnotherBtn');

  let submitType = 'prompt';

  function updateFormMode(mode) {
    submitType = mode;
    typeButtons.forEach(b => b.classList.toggle('active', b.dataset.type === mode));
    clearErrors();
    if (mode === 'prompt') {
      titleLabel.textContent = 'Название промпта *';
      titleInput.placeholder = 'Например: Генератор структуры презентации';
      targetLabel.textContent = 'Целевая нейросеть *';
      targetInput.placeholder = 'ChatGPT, Claude, Midjourney...';
      bodyLabel.textContent = 'Текст промпта *';
      bodyInput.placeholder = 'Вставьте текст промпта. Переменные выделите в [КВАДРАТНЫЕ СКОБКИ]...';
    } else {
      titleLabel.textContent = 'Название нейросети *';
      titleInput.placeholder = 'Например: Perplexity AI';
      targetLabel.textContent = 'Ссылка на сайт (URL) *';
      targetInput.placeholder = 'https://example.com';
      bodyLabel.textContent = 'Краткое описание и модель оплаты *';
      bodyInput.placeholder = 'Опишите, какие задачи решает сервис и есть ли бесплатный тариф...';
    }
  }

  function clearErrors() {
    form.querySelectorAll('.form-field').forEach(f => f.classList.remove('has-error'));
  }

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => updateFormMode(btn.dataset.type));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    let valid = true;

    const requiredFields = [
      { el: titleInput, check: v => v.trim().length >= 3 },
      { el: categorySelect, check: v => v !== '' },
      { el: targetInput, check: v => submitType === 'tool' ? /^https?:\/\/.+/.test(v.trim()) : v.trim().length >= 2 },
      { el: bodyInput, check: v => v.trim().length >= 12 }
    ];

    requiredFields.forEach(({ el, check }) => {
      if (!check(el.value)) {
        el.closest('.form-field').classList.add('has-error');
        valid = false;
      }
    });

    if (!valid) {
      showToast('Проверьте выделенные поля формы');
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('neurohub_submissions') || '[]');
    submissions.push({
      type: submitType,
      title: titleInput.value.trim(),
      category: categorySelect.value,
      target: targetInput.value.trim(),
      author: authorInput.value.trim() || 'Аноним',
      body: bodyInput.value.trim(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('neurohub_submissions', JSON.stringify(submissions));

    form.style.display = 'none';
    successBox.classList.add('visible');
    showToast('Заявка успешно отправлена');
  });

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
      successBox.classList.remove('visible');
      form.style.display = 'block';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHomePage();
  initCatalogPage();
  initPromptsPage();
});
