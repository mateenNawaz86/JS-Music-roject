window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#60d3cd",
        "#607bd3",
    ];
    // Lets get going with the sounds here...
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    // Creates a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationed', function () {
            visual.removeChild(this);
        });
    }
});