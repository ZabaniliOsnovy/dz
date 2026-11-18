// фильтр карточек по категориям
let filterButtons = document.querySelectorAll('.filter-btn');
let cards = document.querySelectorAll('.card-item');

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        let category = btn.getAttribute('data-cat');

        cards.forEach((card) => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// кнопка копирования промпта
let copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.textContent = 'Скопировано!';
        setTimeout(() => {
            btn.textContent = 'Скопировать';
        }, 1500);
    });
});

// получение данных с формы
let myForm = document.getElementById('myForm');
let result = document.getElementById('result');

if (myForm) {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let formValue = new FormData(myForm);
        let name = formValue.get('name');
        let text = formValue.get('text');

        if (name === '' || text === '') {
            result.style.color = 'red';
            result.textContent = 'Заполните все поля!';
        } else {
            result.style.color = '#27ae60';
            result.textContent = `Спасибо! "${name}" отправлено.`;
            myForm.reset();
        }
    });
}
