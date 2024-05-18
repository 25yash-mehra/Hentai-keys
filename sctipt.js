let sound = {
    'a': new Audio('./ahh-qe4dcns7.mp3'),
    's': new Audio('./otaku.mp3'),
    'd': new Audio('./tuturu_1.mp3'),
    'f': new Audio('./voicy_Uwu.mp3'),
    'g': new Audio('./anime-ahh.mp3'),
    'h': new Audio('./yandralaugh.mp3'),
    'j' : new Audio('./yeahboi.mp3'),
    'k': new Audio('./baigan.mp3'),
    'l': new Audio('./laughdog.mp3'),
    'q': new Audio('./laughman.mp3'),
    'w':new Audio('./onichan.mp3'),
    'e':new Audio('./nyah.mp3'),
    'r': new Audio('./chalaja.mp3'),
    't':new Audio('./yoimo.mp3'),
    'y':new Audio('./ara.mp3'),
    'u': new Audio('./wow.mp3'),
    'i': new Audio('./puneet.mp3')
};

document.addEventListener('keypress', (e) => {
    let key = e.key.toLowerCase();
    document.querySelector('h2').textContent = 'You pressed: ' + key.toUpperCase();
    if (sound[key]) {
        sound[key].play();
    } else {
        alert('Press correct key');
    }
});
