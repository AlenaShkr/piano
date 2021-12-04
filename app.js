handleClick = (event) => {
    const audioURL = event.target.src;
    const audioElement = new Audio(audioURL);
    audioElement.play();
}

window.onload = function load() {
    const piano = document.querySelector('.piano');
    const whiteButtons = piano.querySelectorAll('.white-keys');
    const blackButtons = piano.querySelectorAll('.black-keys');
    const allButtons = [...whiteButtons, ...blackButtons];
    allButtons.forEach(( el, index )=> {
        el.src = `assets/audio/key-${index + 1}.mp3`;
        el.addEventListener('click', handleClick);
    });
  };