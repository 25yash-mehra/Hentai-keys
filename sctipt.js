let sound = {
    'a': new Audio('./ahh-qe4dcns7.mp3'),
    's': new Audio('./otaku.mp3'),
    'd': new Audio('./tuturu_1.mp3'),
    'f': new Audio('./voicy_Uwu.mp3'),
    'g': new Audio('./anime-ahh.mp3')
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
