'use strict';

// Данные по городам и врачам
const cityData = {
    moscow: {
        name: 'Москва / Московская область',
        x: 140, y: 340,
        labelDy: 18,
        doctors: [
            { name: 'Якупова С.Р.', clinic: 'Клиника доктора Самойленко', note: 'диагностика, наблюдение' },
            { name: 'Самойленко А.И.', clinic: 'Клиника доктора Самойленко', note: 'хирургия' },
            { name: 'Алексеев И.Б.', clinic: 'Клиника доктора Самойленко', note: 'хирургия' },
            { name: 'Пантелеев Е.Н.', clinic: 'МНТК им. Фёдорова', note: 'замена хрусталика' },
            { name: 'Шарифиндинов И.Х.', clinic: 'МНТК им. Фёдорова', note: 'макулярный разрыв' },
            { name: 'Ловпаче', clinic: 'Клиника 3Z', note: 'глаукоматолог' },
            { name: 'Унгурьянов Олег Владимирович', clinic: 'ООО «Спектр»' },
            { name: 'Варкентина Ирина Валерьевна', clinic: 'ГП 23' },
            { name: 'Аргунова Жанна Мухамедовна', clinic: 'ГКБ 15' },
            { name: 'Гришина (Опытова) Инна Сергеевна', clinic: 'ГКБ 15' },
            { name: 'Кац Михаил Дмитриевич', clinic: 'ГКБ 15', note: 'офтальмохирург' },
            { name: 'Александрийская Марина Александровна', clinic: 'МНТК им. Фёдорова' },
            { name: 'Ованесян Владимир Эдуардович', clinic: 'Клиника доктора Ованесяна' },
        ]
    },
    spb: {
        name: 'Санкт-Петербург',
        x: 95, y: 228,
        labelDy: -10,
        doctors: [
            { name: 'Корелина Виктория Евгеньевна', clinic: 'Адамант' },
            { name: 'Белецкая Инесса Станиславовна', clinic: 'Офтакон' },
        ]
    },
    voronezh: {
        name: 'Воронеж',
        x: 148, y: 388,
        labelDy: 18,
        doctors: [
            { name: 'Мыскова Г.М.', clinic: 'Воронежская областная клиническая офтальмологическая больница' },
            { name: 'Покровская О.В.', clinic: 'Воронежская областная клиническая офтальмологическая больница' },
            { name: 'Авдеев Роман Васильевич', clinic: 'Частная клиника', note: 'главный врач' },
            { name: 'Саврасова', clinic: 'ВОКОБ', note: 'глаукомный кабинет' },
        ]
    },
    samara: {
        name: 'Самара',
        x: 218, y: 370,
        labelDy: 18,
        doctors: [
            { name: 'Зохан А.А.', clinic: 'Больница Ерошевского' },
        ]
    },
    kazan: {
        name: 'Казань / Нижнекамск',
        x: 208, y: 340,
        labelDy: -12,
        doctors: [
            { name: 'Зверева', clinic: 'РКОБ', note: 'СЛТ, наблюдение' },
            { name: 'Горбунова', clinic: 'МНТК', note: 'диагностика' },
        ]
    },
    izhevsk: {
        name: 'Ижевск',
        x: 247, y: 324,
        labelDy: -12,
        doctors: [
            { name: 'Григорьева', clinic: 'Республиканская офтальмологическая больница / Мона Лиза' },
            { name: 'Серебренникова Е.А.', clinic: 'Республиканская офтальмологическая больница / Мона Лиза', note: 'диагностика, наблюдение' },
        ]
    },
    ufa: {
        name: 'Уфа',
        x: 264, y: 352,
        labelDy: 18,
        doctors: [
            { name: 'Галимова Венера Узбековна', clinic: 'Клиника БГМУ' },
        ]
    },
    chelyabinsk: {
        name: 'Челябинск',
        x: 292, y: 346,
        labelDy: -12,
        doctors: [
            { name: 'Кузнецов Андрей Сергеевич', clinic: 'Кормед', note: 'хирург' },
            { name: 'Тонких Наталья Александровна', clinic: 'Артоптика' },
            { name: 'Иванов Дмитрий Иванович', clinic: 'МНТК', note: 'Екатеринбург, выездной приём' },
            { name: 'Дорофеев Дмитрий Александрович', clinic: 'Аккулист' },
        ]
    },
    stavropol: {
        name: 'Ставрополь',
        x: 168, y: 448,
        labelDy: 18,
        doctors: [
            { name: 'Крылов С.В.', clinic: 'ОкулюсАрт', note: 'главврач' },
        ]
    },
    tomsk: {
        name: 'Томск',
        x: 430, y: 328,
        labelDy: -12,
        doctors: [
            { name: 'Евдокимов', clinic: 'Айклиник', note: 'хирургия, диагностика' },
        ]
    },
    novokuznetsk: {
        name: 'Новокузнецк',
        x: 444, y: 362,
        labelDy: 18,
        doctors: [
            { name: 'Исаков И.Н.', clinic: 'Доктор Оптик', note: 'лазерный хирург' },
            { name: 'Вершинина Н.А.', clinic: 'Доктор Оптик', note: 'диагностика, наблюдение' },
        ]
    },
    krasnoyarsk: {
        name: 'Красноярск',
        x: 478, y: 334,
        labelDy: -12,
        doctors: [
            { name: 'Ковшун Евгения Владимировна', clinic: 'Ранее МНТК (текущее место не указано)' },
        ]
    },
    irkutsk: {
        name: 'Иркутск',
        x: 534, y: 378,
        labelDy: 18,
        doctors: [
            { name: 'Синев Павел Александрович', clinic: 'Областная детская больница', note: 'зав. отделением' },
        ]
    },
};

// ── Пароль ──
function checkPassword() {
    const input = document.getElementById('pwd-input');
    if (input.value === 't2026') {
        sessionStorage.setItem('glaucoma_auth', '1');
        showApp();
    } else {
        document.getElementById('pwd-error').style.display = 'block';
        input.classList.add('error');
        input.value = '';
        input.focus();
        setTimeout(() => input.classList.remove('error'), 600);
    }
}

function showApp() {
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    renderCities();
}

// ── Инициализация ──
window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('glaucoma_auth') === '1') {
        showApp();
        return;
    }
    const input = document.getElementById('pwd-input');
    input.focus();
    input.addEventListener('input', () => {
        document.getElementById('pwd-error').style.display = 'none';
    });
});

// ── Рендер меток городов ──
function renderCities() {
    const svg = document.getElementById('russia-map');
    const g = document.getElementById('cities');
    const svgW = 960;
    const svgH = 540;

    Object.entries(cityData).forEach(([id, city]) => {
        const group = createSVGEl('g', { class: 'city-group', 'data-id': id });
        group.setAttribute('role', 'button');
        group.setAttribute('aria-label', city.name);

        // Фоновый круг (ореол)
        group.appendChild(createSVGEl('circle', {
            cx: city.x, cy: city.y, r: 11,
            class: 'city-pulse'
        }));

        // Основной круг
        group.appendChild(createSVGEl('circle', {
            cx: city.x, cy: city.y, r: 7,
            class: 'city-circle'
        }));

        // Число врачей внутри круга
        const countEl = createSVGEl('text', {
            x: city.x, y: city.y + 3.5,
            'text-anchor': 'middle',
            class: 'city-count'
        });
        countEl.textContent = city.doctors.length;
        group.appendChild(countEl);

        // Подпись города
        const shortName = city.name.split('/')[0].trim();
        const labelY = city.y + city.labelDy;
        const labelEl = createSVGEl('text', {
            x: city.x, y: labelY,
            'text-anchor': 'middle',
            class: 'city-label'
        });
        labelEl.textContent = shortName;
        group.appendChild(labelEl);

        group.addEventListener('click', () => openPanel(id));
        group.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openPanel(id);
        });
        g.appendChild(group);
    });
}

function createSVGEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
}

// ── Панель врачей ──
function openPanel(cityId) {
    const city = cityData[cityId];
    document.getElementById('panel-title').textContent = city.name;

    const content = document.getElementById('panel-content');
    content.innerHTML = city.doctors.map(d => `
        <div class="doctor-card">
            <div class="doctor-name">${escHtml(d.name)}</div>
            <div class="doctor-clinic">${escHtml(d.clinic)}</div>
            ${d.note ? `<span class="doctor-note">${escHtml(d.note)}</span>` : ''}
        </div>
    `).join('');

    document.getElementById('panel-overlay').style.display = 'block';
    document.getElementById('doctor-panel').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    document.getElementById('panel-overlay').style.display = 'none';
    document.getElementById('doctor-panel').classList.remove('open');
    document.body.style.overflow = '';
}

function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
});
