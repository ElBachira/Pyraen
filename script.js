document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Teacher's Pet",
            artist: "Melanie Martinez",
            src: "song.mp3",
            lyrics: [
  { "time": 10, "line": "Atrapé al profesor comiéndose con los ojos a una alumna" },
  { "time": 15, "line": "Pensó: 'Es muy lindo', y ella le devolvió la mordida de labio" },
  { "time": 20, "line": "Mordiéndose las uñas y los bolígrafos mientras sueña con él" },
  { "time": 26, "line": "Y él está follando en pecando, joder (sabes que lo hace)" },
  { "time": 30, "line": "Ella dijo: 'Es por todas las razones correctas'" },
  { "time": 33, "line": "'Bebé, me importan un carajo las notas, solo llámame tu chica'" },
  { "time": 35, "line": "'Si apruebo este examen, ¿me darás hijos?'" },
  { "time": 39, "line": "'No me llames loca'" },
  { "time": 41, "line": "'Me amas, pero no vendrás a salvarme'" },
  { "time": 44, "line": "'Tienes esposa e hijos, los ves a diario'" },
  { "time": 46, "line": "'No sé por qué siquiera me necesitas'" },
  { "time": 51, "line": "La mascota del profesor" },
  { "time": 54, "line": "Si soy tan especial, ¿por qué soy un secreto?" },
  { "time": 59, "line": "Sí, ¿por qué carajos es así?" },
  { "time": 61, "line": "¿Te arrepientes" },
  { "time": 64, "line": "De las cosas que compartimos y que nunca olvidaré?" },
  { "time": 69, "line": "Bueno, ¿lo haces? Dímelo" },
  { "time": 72, "line": "Sé que soy joven, pero mi mente va más allá de mi edad" },
  { "time": 77, "line": "Sabía que esto no duraría, pero jódete, no me puedes dejar" },
  { "time": 82, "line": "La mascota del profesor" },
  { "time": 85, "line": "Si soy tan especial, ¿por qué soy un secreto?" },
  { "time": 92, "line": "Ella se siente como una araña en una jaula" },
  { "time": 95, "line": "Mentiroso, eras su mayor deseo" },
  { "time": 100, "line": "Ahora ella quiere prenderte fuego" },
  { "time": 102, "line": "Pero a la mierda, ella igual te llamará" },
  { "time": 105, "line": "Y te dará un encendedor cuando quieras drogarte" },
  { "time": 109, "line": "Y jugarán hasta que quedes entumecido" },
  { "time": 112, "line": "Ella dijo: 'Es por todas las razones correctas'" },
  { "time": 115, "line": "'Bebé, me importan un carajo las notas, solo llámame tu chica'" },
  { "time": 117, "line": "'Si apruebo este examen, ¿me darás hijos?'" },
  { "time": 121, "line": "'No me llames loca'" },
  { "time": 123, "line": "'Me amas, pero no vendrás a salvarme'" },
  { "time": 125, "line": "'Tienes esposa e hijos, los ves a diario'" },
  { "time": 128, "line": "'No sé por qué siquiera me necesitas'" },
  { "time": 132, "line": "La mascota del profesor" },
  { "time": 135, "line": "Si soy tan especial, ¿por qué soy un secreto?" },
  { "time": 141, "line": "Sí, ¿por qué carajos es así?" },
  { "time": 143, "line": "¿Te arrepientes" },
  { "time": 146, "line": "De las cosas que compartimos y que nunca olvidaré?" },
  { "time": 151, "line": "Bueno, ¿lo haces? Dímelo" },
  { "time": 153, "line": "Sé que soy joven, pero mi mente va más allá de mi edad" },
  { "time": 158, "line": "Sabía que esto no duraría, pero jódete, no me puedes dejar" },
  { "time": 163, "line": "La mascota del profesor" },
  { "time": 166, "line": "Si soy tan especial, ¿por qué soy un secreto?" },
  { "time": 174, "line": "Devuélveme mi dinero" },
  { "time": 175, "line": "No aprendí ni una maldita cosa de ti, cariño" },
  { "time": 180, "line": "Excepto a mentir y engañar entre las sábanas" },
  { "time": 184, "line": "Deja de llamarme tu conejita" },
  { "time": 186, "line": "No voy a saltar, no eres mi dueño" },
  { "time": 188, "line": "¿Crees que lo eres?" },
  { "time": 191, "line": "Apuesto a que crees que sí, bueno, no es así" },
  { "time": 197, "line": "La mascota del profesor" },
  { "time": 199, "line": "Si soy tan especial, ¿por qué soy un secreto? (¿Por qué lo soy? ¿Por qué lo soy?)" },
  { "time": 205, "line": "Sí, ¿por qué carajos es así?" },
  { "time": 207, "line": "¿Te arrepientes" },
  { "time": 210, "line": "De las cosas que compartimos y que nunca olvidaré?" },
  { "time": 214, "line": "Bueno, ¿lo haces? Dímelo" },
  { "time": 217, "line": "Sé que soy joven, pero mi mente va más allá de mi edad" },
  { "time": 222, "line": "Sabía que esto no duraría, pero jódete, no me puedes dejar" },
  { "time": 227, "line": "La mascota del profesor" },
  { "time": 230, "line": "Si soy tan especial, ¿por qué soy un secreto?" }
]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
                          
