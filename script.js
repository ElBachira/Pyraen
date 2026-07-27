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
            title: "The King",
            artist: "Rosendale",
            src: "song.mp3",
            lyrics: 
[
  { "time": 9, "line": "Había una vez un rey" },
  { "time": 11, "line": "Viviendo sin preocupaciones" },
  { "time": 14, "line": "Quería el mundo, lo quería todo" },
  { "time": 18, "line": "Gobernaba con puño de hierro" },
  { "time": 20, "line": "Su pueblo moría de hambre" },
  { "time": 23, "line": "Veía cómo suplicaban tras los guardias de su castillo" },
  { "time": 36, "line": "Diamantes y perlas" },
  { "time": 39, "line": "Esmeraldas y oro" },
  { "time": 41, "line": "Se bañaba en riquezas que solo él podía conocer" },
  { "time": 45, "line": "Pero con el tiempo llegó la vejez" },
  { "time": 47, "line": "Su salud en declive" },
  { "time": 50, "line": "El destino de su legado quedó a la deriva" },
  { "time": 54, "line": "Corrió hacia su reina y le exigió un hijo" },
  { "time": 58, "line": "Plantó su semilla y luego la hizo a un lado" },
  { "time": 63, "line": "Varias lunas después ella le dio un hijo" },
  { "time": 68, "line": "Pero murió solo para darle su propia sangre" },
  { "time": 72, "line": "Ooh" },
  { "time": 76, "line": "Ooh" },
  { "time": 81, "line": "El hijo creció como la mala hierba" },
  { "time": 83, "line": "Pronto cumplió dieciocho" },
  { "time": 86, "line": "Se aventuró fuera del castillo para ver" },
  { "time": 90, "line": "Los rostros tan demacrados" },
  { "time": 92, "line": "Los muertos en las calles" },
  { "time": 95, "line": "Gritaban por ayuda pero nadie podía escuchar" },
  { "time": 99, "line": "Muy dentro de él algo se despertó" },
  { "time": 104, "line": "Se rio de las ruinas que su padre causó" },
  { "time": 108, "line": "Con fuego en las venas irrumpió hacia el trono" },
  { "time": 112, "line": "Miró al rey con una rabia aún desconocida" },
  { "time": 117, "line": "Ooh-ooh-ooh" },
  { "time": 125, "line": "El padre decretó" },
  { "time": 128, "line": "La nueva ley" },
  { "time": 131, "line": "Que su hijo fuera desterrado fuera de los muros" },
  { "time": 135, "line": "Pero el hijo tenía un plan" },
  { "time": 137, "line": "Y su corazón estaba convencido" },
  { "time": 140, "line": "Nunca habría espacio para un rey y un príncipe" },
  { "time": 144, "line": "Reunió al pueblo y cargó por las puertas" },
  { "time": 149, "line": "Un escudo en una mano y en la otra una espada" },
  { "time": 153, "line": "De un solo golpe derrocó a su propio padre" },
  { "time": 158, "line": "Se sentó en el trono y se adornó con su nueva corona" },
  { "time": 162, "line": "Ooh" },
  { "time": 170, "line": "El hijo estaba eufórico" },
  { "time": 173, "line": "El reino era suyo" },
  { "time": 176, "line": "Diamantes, esmeraldas y dicha bañada en oro" },
  { "time": 180, "line": "Pero, ¿qué hay del pueblo?" },
  { "time": 183, "line": "Las leyendas no lo dicen" },
  { "time": 185, "line": "Como un simple recuerdo" },
  { "time": 187, "line": "Se desvanecieron" },
  { "time": 198, "line": "Había una vez un rey" },
  { "time": 200, "line": "Viviendo sin preocupaciones" },
  { "time": 203, "line": "Quería el mundo, lo quería todo..." }
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
                          
