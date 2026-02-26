const character = document.getElementById('character');
const cheek = document.getElementById('cheek-trigger');
const countDisplay = document.getElementById('count-number');
const bgMusic = document.getElementById('bg-music');
let isMusicPlaying = false;

let slapCount = 0;
const slapFrames = [
    '../assets/images/slap_1.png',
    '../assets/images/slap_2.png',
    '../assets/images/slap_3.png',
    '../assets/images/face_normal.png'
];

const slapSounds = [
    '../assets/audio/slapSound1.mp3',
    '../assets/audio/slapSound2.mp3',
    '../assets/audio/slapSound3.mp3'
];

let isAnimating = false;

cheek.addEventListener('click', () => {
    //moosic
    if (!isMusicPlaying) {
        bgMusic.play().catch(error => {
            console.log("nhac bi loi...");
        });
        bgMusic.volume = 0.1; // Chỉnh âm lượng vừa phải (0.0 đến 1.0)
        isMusicPlaying = true;
    }

    if (isAnimating) return; // isAnimating để delay tát liên tục

    isAnimating = true;

    slapCount++;
    countDisplay.innerText = slapCount;

    // Sound random
    const randomSound = slapSounds[Math.floor(Math.random() * slapSounds.length)];
    const audio = new Audio(randomSound);
    audio.play();

    let frameIndex = 0;

    // setInterval để ngăn từng frame lúc chạy
    const animationInterval = setInterval(() => {
        character.src = slapFrames[frameIndex];
        frameIndex++;

        if (frameIndex >= slapFrames.length) {
            clearInterval(animationInterval);
            isAnimating = false;
        }
    }, 30); // ms
});