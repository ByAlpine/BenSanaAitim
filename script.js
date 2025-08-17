const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');
const question = document.getElementById('question');
const messagesDiv = document.getElementById('messages');

const noMessages = [
    'Barışalım mı?',
    'Lütfen beni yalnız bırakma...',
    'Emin misin?',
    'Gerçekten mi? Kalbim Kırılıyor...',
    'Bu Son Şansımız...',
    'Yalnızlık Çok Zor...',
    'Seni Hâlâ Önemsiyorum...',
    'Birlikte Daha İyiydik...',
    'Hoşça Kal...'
];
let noCount = 0;
let maxNo = 10;

noBtn.addEventListener('click', () => {
    noCount++;
    if (noCount === 1) {
        gif.src = 'kristigocouple2024.gif'; // gif2
        gif.style.width = '300px';
        gif.style.height = 'auto';
    } else if (noCount <= maxNo) {
        // gif2 büyüsün, hayır küçülsün
        let newSize = 300 + noCount * 30;
        gif.style.width = newSize + 'px';
        gif.style.height = 'auto';
        let newFont = 1.3 - noCount * 0.08;
        noBtn.style.fontSize = (newFont > 0.7 ? newFont : 0.7) + 'em';
        noBtn.style.padding = (15 - noCount) + 'px ' + (40 - noCount * 2) + 'px';
    }
    // Mesajları sırayla göster
    let msgIndex = noCount - 1;
    if (msgIndex < noMessages.length) {
        messagesDiv.innerHTML = `<div class='neon-text'>${noMessages[msgIndex]}</div>`;
    } else {
        messagesDiv.innerHTML = `<div class='neon-text'>${noMessages[noMessages.length-1]}</div>`;
    }
    if (noCount >= maxNo) {
        noBtn.disabled = true;
        noBtn.style.opacity = 0.5;
    }
});

yesBtn.addEventListener('click', () => {
    gif.src = 'milk-and-mocha-saying-ha-ihd3yfb5d85wdyhk.gif'; // gif3
    gif.style.width = '350px';
    messagesDiv.innerHTML = `<div class='final-message'>Birlikte yeniden başlamak, en güzel başlangıçtır.</div>`;
    question.style.display = 'none';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
