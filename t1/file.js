        const vid = document.querySelector("#vid");
        const time = document.querySelector('#time');
        document.getElementById("play").addEventListener("click" , play);
        document.getElementById("stop").addEventListener("click" , stop);
        document.getElementById("l-10").addEventListener("click" , left);
        document.getElementById("l-5").addEventListener("click" , l_5);
        document.getElementById("r-5").addEventListener("click" , r_5);
        document.getElementById("r-10").addEventListener("click" ,r_10);
        document.getElementById("mute").addEventListener("click" , mute);
        const sound = document.querySelector("#sound");
        const speed = document.querySelector("#speed");
        const fullscreen = document.querySelector("#fullscreen");
        const playbackCurrent = document.querySelector(".playback-current");
        const playbackEnd = document.querySelector(".playback-end");

        

        function play() {
            vid.play();
        }
        function setDuration(timeInSec) {
            const min = Math.floor(timeInSec / 60);
            const sec = Math.floor(timeInSec - min * 60);
    
            const videoDuration = `${min}:${sec}`;
    
            return videoDuration;
        }
        function stop(){
            vid.pause();
        }
        function mute(){
            vid.muted = !vid.muted;
        }
        speed.addEventListener("change",()=>{
            vid.playbackRate = speed.value;
        })
        function left() {
            vid.load();
        }
        function l_5(){
            vid.currentTime -= 5;
        }
        function r_5(){
            vid.currentTime += 5;
        }
        function l_10(){
            vid.currentTime -= 10;
        }
        function r_10(){
            vid.currentTime += 10;
        }
        function handleProgress() {
            const percent = (vid.currentTime / vid.duration) * 100;
            time.style.flexBasis = `${percent}%`;
        }

        setTimeout(() => {
            const videoInSec = video.duration;
    
            playbackEnd.innerText = setDuration(videoInSec);
    
            playback.setAttribute("max", videoInSec);
        }, 200);

        vid.addEventListener("timeupdate", () => {
            playbackCurrent.innerText = setDuration(vid.currentTime);
            playback.value = vid.currentTime;
        });
        sound.addEventListener("change", () => {
            vid.volume = sound.value / 100;
        });

        fullscreen.addEventListener("click", () => {
                if (vid.requestFullscreen) {
                vid.requestFullscreen();
                } else if (vid.webkitRequestFullscreen) {
                /* Safari */
                vid.webkitRequestFullscreen();
                } else if (vid.msRequestFullscreen) {
                /* IE11 */
                vid.msRequestFullscreen();
                }
            });
