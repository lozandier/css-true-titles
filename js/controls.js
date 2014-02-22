(function () {
    var body = document.querySelector('body'),
        controls = document.querySelector('.controls'),
        track = document.getElementById('audio-track');

    function togglePlay (e) {
        var classPaused = 'paused',
            classPlaying = 'playing',
            isPaused = body.classList.contains(classPaused),
            target = e.target;

        if (isPaused) {
            body.classList.remove('first-play');
            body.classList.remove(classPaused);
            body.classList.add(classPlaying);
            target.textContent = target.getAttribute('data-alt-text');
            track.play();
        }
        else {
            body.classList.add(classPaused);
            body.classList.remove(classPlaying);
            target.textContent = target.getAttribute('data-text');
            track.pause();
        }
    }

    function toggleVolume () {
        console.log('mute/unmute');
    }

    function controlsClick (e) {
        e.preventDefault();

        var target = e.target,
            cl = target.classList;

        if (cl.contains('play-toggle')) {
            togglePlay(e);
        }
        else if (cl.contains('mute-toggle')) {
            toggleVolume(e);
        }
    }

    controls.addEventListener('click', controlsClick);
}());