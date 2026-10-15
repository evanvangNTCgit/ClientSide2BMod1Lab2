const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

const handleMove = (e) => {
    // console.log(e);
    const Y = e.pageY - e.target.offsetTop;
    const percent = Y / e.target.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playackRate = percent * (max-min) + min;
    bar.style.height = height;
    video.playbackRate = playackRate;

    console.log(playackRate);    
    // console.log(height);
    // console.log(Y);
    // console.log(percent);
};

speed.addEventListener('mousemove', handleMove);