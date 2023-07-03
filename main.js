// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
const input = document.getElementById('myInput');
const infoDiv = document.getElementById('infoDiv');

input.addEventListener('focus', () => {
    infoDiv.innerText = 'Getting to know the DOM';
});
input.addEventListener('blur', () => {
    infoDiv.innerText = '';
});

// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
function promptLink () {
    let link = prompt('Please enter a link:');
    if (link) {
        let url = validateLink(link);
        if (url) {
           sessionStorage.setltem('redirectLink', url);
           alert('link saved!');
        } else {
            alert('The specified link is incorrect');
        }
    }
}
function redirectLink() {
    let redirectLink = sessionStorage.getItem('redirectLink');
    if (redirectLink) {
        window.location.href = redirectLink;
    } else {
        alert('The link is not saved. Please enter a link.');
    }
}
function validateLink(link) {
    let protocol = /ˆhttps?:VV/i;
    if(!protocol.test(link)) {
        link = 'http://' + link;
    }
    return link;
}

//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
let table = document.createElement('table');
let count = 1;

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let col = document.createElement('td');
        col.textContent = count;
        row.appendChild(col);
        count ++;
    }
    table.appendChild(row);
}
document.body.appendChild(table);

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)
let images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
let randomIndex = Math.floor(Math.random()* images.length);
let img = document.createElement('img');
img.src = 'images/' + images[randomIndex];

document.body.appendChild(img);