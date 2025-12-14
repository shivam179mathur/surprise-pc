document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const elements = {
        greeting: document.getElementById('greeting-text'),
        btns: document.getElementById('button-container'),
        yesBtn: document.getElementById('yes-btn'),
        noBtn: document.getElementById('no-btn'),
        decorateBtn: document.getElementById('decorate-btn'),
        musicBtn: document.getElementById('music-btn'),
        balloonsBtn: document.getElementById('balloons-btn'),
        cakeBtn: document.getElementById('cake-btn'),
        banner: document.getElementById('banner'),
        audio: document.getElementById('birthday-audio'),
        fairyLights: document.getElementById('fairy-lights'),
        
        balloonContainer: document.getElementById('balloon-container'),
        sparkleContainer: document.getElementById('sparkle-container'),
        heartsContainer: document.getElementById('hearts-container'),
        confettiContainer: document.getElementById('confetti-container'),
        fireworksContainer: document.getElementById('fireworks-container'),
        cursorContainer: document.getElementById('cursor-trail-container'),
        starContainer: document.getElementById('shooting-star-container'),
        cakeContainer: document.getElementById('cake-container'),
        
        icons: document.querySelectorAll('.icon-btn'),
        msgIcon: document.getElementById('message-icon'),
        wishIcon: document.getElementById('wish-icon'),
        giftIcon: document.getElementById('gift-icon'),
        kanhaIcon: document.getElementById('kanha-icon'),
        
        msgBox: document.getElementById('message-box'),
        wishBox: document.getElementById('wish-box'),
        giftModal: document.getElementById('gift-modal'),
        kanhaModal: document.getElementById('kanha-modal'),
        
        typewriter: document.getElementById('typewriter-text'),
        surpriseLink: document.getElementById('surprise-link-container'),
        wishInput: document.getElementById('wish-input'),
        sendWish: document.getElementById('send-wish-btn'),
        giftBox: document.querySelector('.gift-box'),
        giftContent: document.querySelector('.gift-content'),
        tapToOpen: document.getElementById('tap-to-open'),

        kanhaLines: [
            document.getElementById('kanha-line-1'),
            document.getElementById('kanha-line-2'),
            document.getElementById('kanha-line-3'),
            document.getElementById('kanha-line-4'),
            document.getElementById('kanha-line-5')
        ]
    };

    // --- NEW CAKE ANIMATION HTML ---
    const newCakeHTML = `
        <div class="cake-candle">
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
        </div>
        <svg id="cake-svg" version="1.1" viewBox="0 0 200 500" enable-background="new 0 0 200 500">
            <path fill="#a88679" d="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002 c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z">
                <animate id="bizcocho_3" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1" begin="relleno_2.end" dur="0.3s" fill="freeze" values="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002 c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z; M173.667,411.567c-47.995,12.408-102.955,12.561-147.334,0 c-3.848-1.089-0.189-16.089,3.661-15.002c44.836,12.66,90.519,12.753,139.427,0.07 C173.293,395.631,177.541,410.566,173.667,411.567z; M173.667,427.569c-49.795,0-101.101,0-147.334,0c-3.999,0-4-16.002,0-16.002 c46.385,0,97.539,0,147.334,0C177.668,411.567,177.667,427.569,173.667,427.569z" />
            </path>
            <path fill="#8b6a60" d="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227 c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521 L100-178.521z">
                <animate id="relleno_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_2.end" dur="0.5s" fill="freeze" values="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227 c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521 L100-178.521z; M100,267.257c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227 c0,19.143,0,57.43,0,76.574c0,10.151,0,40.606,0,40.606c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364 c0,0,0-30.455,0-40.606c0-19.145,0-57.432,0-76.576c0-11.057,0-44.225,0-44.225C96.636,268.763,98.142,267.257,100,267.257 L100,267.257z; M93.928,405.433c-0.655,6.444-0.102,9.067,2.957,11.798c0,0,8.083,5.571,16.828,3.503 c18.629-4.406,43.813,6.194,50.792,7.791c14.75,3.375,9.162,6.867,9.162,6.867c-2.412,2.258-58.328,0-73.667,0l0,0 c-1.858,0-69.995,2.133-73.667,0c0,0-3.337-2.439,6.172-5.992c11.375-4.25,52.875,8.822,47.139-9.442 c-6.333-20.167,5.226-21.514,5.226-21.514c3.435-0.915,12.78-6.663,10.923-0.546L93.928,405.433z; M102.242,427.569c5.348,0,14.079,0,17.462,0c0,0,17.026,0,27.504,0 c19.143,0,20.39-3.797,26.459,0c3,1.877,0,7.823,0,7.823c-2.412,2.258-58.328,0-73.667,0l0,0c-1.858,0-67.187,0-73.667,0 c0,0-4.125-4.983,0-7.823c5.201-3.58,16.085,0,23.725,0c8.841,0,20.762,0,20.762,0c3.686,0,8.597,0,19.511,0H102.242z" />
            </path>
            <path fill="#a88679" d="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002 c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z">
                <animate id="bizcocho_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.58 1" begin="relleno_1.end" dur="0.5s" fill="freeze" values="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002 c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z; M173.434,445.393c-47.269,8.001-105.245,8.001-147.334,0c-3.929-0.747-0.692-16.543,3.243-15.824 c43.828,8.001,92.165,8.001,140.739,0C174.029,428.918,177.377,444.726,173.434,445.393z; M173.667,449.514c-47.576-5.454-102.799-5.744-147.333,0c-3.966,0.512-3.938-15.297,0-16.002 c43.683-7.823,97.646-8.026,147.333,0C177.616,434.15,177.642,449.969,173.667,449.514z; M173.667,451.394c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002 c44.697,0,96.586,0,147.334,0C177.667,435.392,177.668,451.394,173.667,451.394z" />
            </path>
            <path fill="#8b6a60" d="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512 c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628 C98.411-75.883,101.368-75.592,101.368-73.685z">
                <animate id="relleno_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.6 1" begin="bizcocho_1.end" dur="0.5s" fill="freeze" values="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512 c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628 C98.411-75.883,101.368-75.592,101.368-73.685z; M101.368,350.885c0,12.164,0,65.18,0,78.518c0,22.703,0-33.66,0-11.695c0,14.48,0,28.232,0,40.512 c0,1.753-2.958,1.847-2.958,0c0-12.68,0-26.277,0-40.402c0-21.982,0,31.66,0,11.695c0-13.027,0-65.992,0-78.627 C98.411,348.686,101.368,348.977,101.368,350.885z; M128.38,447.567c37.626,6.312,39.303,13.658,26.833,12.833c-22.653-1.499-13.636-0.831-23.302-0.831 c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-14.062,5.995-27.532,1.164 c-12.629-4.529,38.667-3.167,46.833-17.333C100.077,432.94,105.546,443.736,128.38,447.567z; M173.667,451.394c2.875,0,2.997,9.257,0,9.131c-22.662-0.956-32.09-0.956-41.756-0.956 c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-34.99-0.294-48.412,1.831 c-4.109,0.65-3.01-10.006,0-10.006C37.129,451.394,149.379,451.394,173.667,451.394z" />
            </path>
            <path fill="#a88679" d="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0 C177.668,5.569,177.667,21.571,173.667,21.571z">
                <animate id="bizcocho_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0.25 0 0.6 1" begin="0.5s" dur="0.8s" fill="freeze" values="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0 C177.668,5.569,177.667,21.571,173.667,21.571z; M173.667,459.569c-33.197,16.002-110.782,16.002-147.334,0c-3.664-1.604,1.614-15.617,5.337-14.153 c40.702,16.002,94.289,16.104,136.505,0.103C171.917,444.1,177.271,457.832,173.667,459.569z; M171.817,475.571c-39.361-3.001-105.438-2.571-143.556,0c-3.991,0.27-7.377-14.736-3.387-15.014 c41.553-2.888,104.421-3.121,150.51-0.233C179.378,460.574,175.806,475.875,171.817,475.571z; M171.817,459.564c-38.8-12.188-104.504-13.762-143.556,0c-3.772,1.329-7.961-12.604-4.178-13.905 c40.864-14.064,105.114-15.52,151.918-0.973C179.822,445.874,175.634,460.762,171.817,459.564z; M173.667,475.571c-46.376-5.005-105.924-4.003-147.334,0c-3.981,0.385-3.479-15.421,0.479-16.002 c43.087-6.327,97.705-7.083,146.855,0.438C177.621,460.613,177.644,476,173.667,475.571z; M173.667,474.117c-46.376,1.866-105.638,2.01-147.334,0c-3.995-0.192-3.52-16.144,0.479-16.002 c43.794,1.55,96.341,1.541,145.723,0C176.532,457.99,177.663,473.956,173.667,474.117z; M173.667,475.571c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002c43.566,0,97.96,0,147.334,0 C177.667,459.569,177.666,475.571,173.667,475.571z" />
            </path>
            <path fill="#fefae9" d="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375 c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181 C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711 c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z">
                <animate id="crema" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_3.end" dur="2s" fill="freeze" values="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375 c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181 C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711 c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z; M104.812,405.897c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.376 c0-5.143,0-15.426,0-20.568c0-7.332,0-21.997,0-29.33c0-5.522,0-16.568,0-22.092c0-3.295,0-9.885,0-13.181 c0-3.118,2.165-5.669,4.812-5.669c2.648,0,4.812,2.551,4.812,5.669c0,3.247,0,9.743,0,12.991c0,5.428,0,16.283,0,21.711 c0,7.618,0,22.854,0,30.473c0,4.951,0,14.854,0,19.807C104.812,388.972,104.812,400.256,104.812,405.897z; M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-7.748,0-10.867,0c-7.086,0-12.698,0-18.292,0 c-6.592,0-12.871,7.371-19.166,3.008c-10.043-6.961-7.776-10.169,2.991-17.745c12.61-8.873,27.713,1.994,25.919-7.531 c-2.589-13.742,11.008-14.513,11.365-17.789c0.441-4.051,4.235-11.107,8.051-8.175c3.113,2.393,1.007,8.008,0,13.159 c-1.871,9.569,8.058,2.113,9.494,14.155c2.592,21.732,21.184-0.675,29.309,7.976c5.216,5.553,18.413,5.552,15.426,12.942 c-3.131,7.745-15.825-4.369-23.8,2.903C126.261,418.271,118.301,411.567,111.873,411.567z; M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-9.734,4.069-12.853,4.069 c-7.086,0-10.712-4.069-16.306-4.069c-6.592,0-12.12,6.013-19.166,3.008c-7.053-3.008-7.458,2.026-18.659,1.165 c-6.832-0.525-7.522-3.034-7.533-6.265c-0.037-10.336,22.073-2.452,36.613-2.628c10.234-0.124,19.856-1.439,37.905-2.102 c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,29.663-8.99,31.532,3.315c0.773,5.093-5.605,3.342-11.211,9.579 c-5.093,5.667-7.59-4.605-12.965-3.832c-8.269,1.189-14.962-8.537-22.937-1.265C126.261,418.271,118.301,411.567,111.873,411.567z; M110.946,413.652c-2.904-1.137-8.405-2.748-12.446-0.97c-6.099,2.685-7.273,10.358-13.253,8.242 c-7.843-2.775-8.953-5.008-14.546-5.01c-24.653-0.011-4.849,26.507-18.264,26.507c-12.377,0,5.791-33.537-19.422-26.682 c-7.703,2.095-9.806-0.942-9.817-4.173c-0.037-10.336,24.357-4.544,38.897-4.72c10.234-0.124,19.856-1.439,37.905-2.102 c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,28.973-8.865,31.532,3.315c1.449,6.896,0.318,15.624-3.874,15.624 c-7.619,0-1.788-15.192-19.243-7.111c-7.581,3.51-15.963-9.738-26.669,1.066C120.644,426.744,118.381,416.561,110.946,413.652z; M111.547,413.9c-2.969-0.956-8.775-0.949-13.167-0.5c-14.667,1.5-8.325,16.508-14.667,16.666 c-6.667,0.166-0.167-13.5-13.013-14.151c-30.471-1.545-5.572,46.651-18.987,46.651c-12.377,0,10.333-50.166-18.667-44.5 c-7.835,1.531-9.537-1.417-9.548-4.647c-0.037-10.336,23.675-5.177,38.215-5.353c10.234-0.124,20.618-1.671,38.667-2.333 c16.642-0.61,32.023,1.458,45.333,1.833c12.438,0.351,33.819-8.431,33.199,4.001c-0.532,10.666,0.414,26.166-5.245,25.833 c-7.606-0.447-2.954-31.5-19.243-18.899c-7.985,6.177-17.658-5.969-27.377,5.732C118.88,434.066,121.38,417.067,111.547,413.9z; M111.547,415.233c-6.667-0.834-9.667,4.667-13.833,3.333c-19.649-6.291-8.158,22.176-14.5,22.334 c-6.667,0.166,2.833-18-13.333-22.167c-29.544-7.615-9.667,43.833-20.167,43.833c-10.333,0,8.004-55.006-16.833-39 c-7.5,4.833-9.508-3.78-9.299-7.004c0.799-12.329,23.592-7.153,38.132-7.329c10.234-0.124,20.238-1.505,38.287-2.167 c16.642-0.61,32.903,1.125,46.213,1.5c12.438,0.351,35.058-5.579,31.863,6.451c-5.532,20.833,1.25,28.216-4.409,27.883 c-7.606-0.447-6.058-37.895-20.62-23.333c-10.167,10.166-15.972-0.747-25,12C119.547,443.568,121.798,416.515,111.547,415.233z" />
            </path>
            <rect x="10" y="475.571" fill="#fefae9" width="180" height="4" />
        </svg>
        <div style="text-align:center; font-family:'Pacifico',cursive; color:#8b6a60; font-size:1.4em; margin-top:20px;">Happy Birthday! <br> <span style="font-size:0.8em">Saniya</span></div>
    `;

    // --- Start Screen Logic ---
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    function openFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) { elem.requestFullscreen(); }
        else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
        else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
    }
    startBtn.onclick = () => {
        openFullscreen();
        startScreen.classList.add('hidden');
        setInterval(createFloatingHeart, 600);
        setTimeout(showGreetings, 500);
    };

    // --- Audio ---
    const sfx = {
        pop: new Audio('https://raw.githubusercontent.com/skylar1995/Dino-Game/master/sounds/jump.mp3'), // A short beep/pop
        cheer: new Audio('https://raw.githubusercontent.com/florinpop17/10-projects-1-hour/master/sound-board/sounds/applause.mp3'), // Applause
        type: new Audio('https://raw.githubusercontent.com/Modernator/typing-test/master/assets/audio/click.mp3'), // Click
        magic: new Audio('https://raw.githubusercontent.com/florinpop17/10-projects-1-hour/master/sound-board/sounds/tada.mp3') // Tada/Magic
    };
    sfx.type.volume = 0.5; sfx.pop.volume = 0.4;
    const playSound = (sound) => { if (sound) { sound.currentTime = 0; sound.play().catch(() => {}); } };

    // --- Config ---
    const messages = ["Hellowwww saniyaaa  👋", " As I Promised I made something special...", "Just for you... 💖", "Have a look, hui hui  ✨"];
    const finalMsgText = "Happy Birthday, HuiHui ! ✨\n\n happy wala birthdayy too you  i know you're waiting for this day from a longgggggggg time but the day has came and bring you much joy and happiness soo now  the  wait is now over \n\n here click the bottom button there is something special just for you!,\n your's buriburi zaimon 👽 💕";
    let msgIndex = 0;
    const complimentWords = ["Beautiful!", "Smart!", "Funny!", "Kind!", "Amazing!", "Queen!", "Sweet!", "Radiant!"];

    // --- Cursor ---
    const handleMove = (x, y) => {
        const particle = document.createElement('div'); particle.classList.add('trail-particle');
        particle.style.left = x + 'px'; particle.style.top = y + 'px';
        const colors = ['#ff4081', '#00bcd4', '#ffeb3b', '#7c4dff'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        elements.cursorContainer.appendChild(particle); setTimeout(() => particle.remove(), 600);
    };
    document.addEventListener('mousemove', e => handleMove(e.clientX, e.clientY));
    document.addEventListener('touchmove', e => handleMove(e.touches[0].clientX, e.touches[0].clientY));

    // --- Sequence ---
    function showGreetings() {
        if (msgIndex >= messages.length) { setTimeout(showEntryButtons, 800); return; }
        elements.greeting.innerText = messages[msgIndex]; elements.greeting.classList.remove('shining');
        setTimeout(() => elements.greeting.classList.add('shining'), 50);
        elements.greeting.classList.add('visible'); msgIndex++;
        setTimeout(() => { elements.greeting.classList.remove('visible'); setTimeout(showGreetings, 800); }, 2500);
    }
    function showEntryButtons() {
        elements.greeting.innerText = "Are You Exited For This ??";
        elements.greeting.classList.add('visible'); elements.greeting.classList.remove('shining');
        setTimeout(() => elements.btns.classList.add('visible'), 1000);
        elements.yesBtn.onclick = () => {
            elements.greeting.classList.remove('visible'); elements.btns.classList.remove('visible');
            setTimeout(stepDecorate, 1000);
        };
        elements.noBtn.onmouseover = moveNoButton; elements.noBtn.onclick = moveNoButton;
    }
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 100); const y = Math.random() * (window.innerHeight - 50);
        elements.noBtn.style.position = 'absolute'; elements.noBtn.style.left = `${x}px`; elements.noBtn.style.top = `${y}px`;
    }
    function stepDecorate() {
        setActivityText("Phele thoda Sajawat ho jaye \n Soona Soona acha ni lag rha Na!"); elements.decorateBtn.classList.add('visible');
        elements.decorateBtn.onclick = () => {
            elements.banner.classList.add('visible'); elements.fairyLights.classList.add('visible');
            startFallingSparkles(); burstConfetti(50); playSound(sfx.magic);
            elements.decorateBtn.disabled = true; transitionToNext(elements.decorateBtn, stepBalloons);
        };
    }
    function stepBalloons() {
        setActivityText(" balloons bhi toh jaroori h 😅!"); elements.balloonsBtn.classList.add('visible');
        elements.balloonsBtn.onclick = () => {
            createBalloons(15); elements.balloonsBtn.disabled = true; transitionToNext(elements.balloonsBtn, stepMusic);
        };
    }
    function stepMusic() {
        setActivityText("Kya kheti ho tmra favorite gaana toh banta h na?"); elements.musicBtn.classList.add('visible');
        elements.musicBtn.onclick = () => {
            elements.audio.volume = 1.0; elements.audio.currentTime = 0;
            const playPromise = elements.audio.play();
            if (playPromise !== undefined) { playPromise.then(_ => {}).catch(error => { console.log("Audio play failed"); }); }
            elements.musicBtn.innerText = "Playing... 🎵"; elements.musicBtn.disabled = true;
            transitionToNext(elements.musicBtn, stepCake);
        };
    }

    function stepCake() {
        setActivityText("And now... the best part!"); elements.cakeBtn.classList.add('visible');
        elements.cakeBtn.onclick = () => {
            elements.greeting.classList.remove('visible'); elements.cakeBtn.classList.remove('visible');
            
            // 1. Lights Off
            document.body.classList.add('dark-background');

            setTimeout(() => {
                elements.greeting.innerText = "Here comes the cake... 🎂"; elements.greeting.classList.add('visible');
                
                // 2. Start Animation (SVG inject)
                elements.cakeContainer.innerHTML = newCakeHTML; elements.cakeContainer.classList.add('visible');
                
                playSound(sfx.magic);

                // 3. Light Candle (7.6s = 0.5s inject + 5s build + 2s delay + 0.1s flame fade-in)
                setTimeout(() => { document.body.classList.add('candle-lit'); }, 7600);

                // 4. Finale (11s)
                setTimeout(() => {
                    document.body.classList.remove('dark-background'); document.body.classList.remove('candle-lit');
                    elements.greeting.classList.remove('visible'); elements.cakeContainer.classList.remove('visible');
                    setTimeout(stepFinale, 1000);
                }, 11000);
                
            }, 1000);
        };
    }

    function stepFinale() {
        elements.greeting.innerText = "Happy Birthday!! 🎉"; elements.greeting.classList.add('visible');
        burstPoppingBalloons(30); floodHearts(100); launchFireworks(8); playSound(sfx.cheer);
        setTimeout(() => { elements.icons.forEach(icon => icon.classList.add('visible')); }, 1500);
    }
    function setActivityText(text) { elements.greeting.innerText = text; elements.greeting.classList.add('visible'); }
    function transitionToNext(currentBtn, nextFunction) {
        setTimeout(() => { elements.greeting.classList.remove('visible'); currentBtn.classList.remove('visible'); setTimeout(nextFunction, 1000); }, 2000);
    }

    // --- Visuals ---
    function createBalloons(count) {
        const colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#EE82EE', '#DA70D6', '#BA55D3', '#9370DB', '#8A2BE2'];
        for (let i = 0; i < count; i++) {
            const b = document.createElement('div'); b.classList.add('balloon');
            b.style.backgroundColor = colors[i % colors.length];
            b.style.left = `${Math.random() * 90 + 5}%`;
            b.style.animationDuration = `${Math.random() * 4 + 8}s`; b.style.animationDelay = `${Math.random() * 2}s`;
            b.onclick = (e) => { playSound(sfx.pop); createCompliment(e.clientX, e.clientY); b.remove(); };
            elements.balloonContainer.appendChild(b);
        }
    }
    function createCompliment(x, y) {
        const text = document.createElement('div'); text.innerText = complimentWords[Math.floor(Math.random() * complimentWords.length)];
        text.classList.add('compliment-text'); text.style.left = `${x}px`; text.style.top = `${y}px`;
        document.body.appendChild(text); setTimeout(() => text.remove(), 1500);
    }
    function burstPoppingBalloons(count) {
        playSound(sfx.pop); const colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#EE82EE', '#DA70D6', '#BA55D3', '#9370DB'];
        for (let i = 0; i < count; i++) {
            const b = document.createElement('div'); b.classList.add('popping-balloon');
            b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            b.style.left = `${Math.random() * 90 + 5}%`; b.style.top = `${Math.random() * 90 + 5}%`;
            b.style.animationDelay = `${Math.random() * 0.5}s`; elements.balloonContainer.appendChild(b); setTimeout(() => b.remove(), 1000);
        }
    }
    function startFallingSparkles() {
        setInterval(() => {
            const s = document.createElement('div'); s.classList.add('sparkle'); s.style.left = `${Math.random() * 100}%`;
            s.style.animationDuration = `${Math.random() * 2 + 2}s`; elements.sparkleContainer.appendChild(s); setTimeout(() => s.remove(), 4000);
        }, 500);
    }
    function burstConfetti(count) {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#4caf50', '#ffeb3b', '#ff9800'];
        for (let i = 0; i < count; i++) {
            const c = document.createElement('div'); c.classList.add('confetti');
            c.style.backgroundColor = colors[i % colors.length]; c.style.left = `${Math.random() * 100}vw`;
            c.style.animationDuration = `${Math.random() * 2 + 3}s`; c.style.transform = `rotate(${Math.random() * 360}deg)`;
            elements.confettiContainer.appendChild(c); setTimeout(() => c.remove(), 5000);
        }
    }
    function createFloatingHeart() {
        const h = document.createElement('div'); h.classList.add('heart'); h.innerText = '❤';
        h.style.left = `${Math.random() * 100}vw`; h.style.animationDuration = `${Math.random() * 5 + 8}s`;
        if (Math.random() < 0.5) h.classList.add('hollow');
        const interval = setInterval(() => h.classList.toggle('hollow'), 1500);
        elements.heartsContainer.appendChild(h); setTimeout(() => { clearInterval(interval); h.remove(); }, 13000);
    }
    function floodHearts(count) {
        for (let i = 0; i < count; i++) {
            const h = document.createElement('div'); h.classList.add('heart', 'flood'); h.innerText = '❤';
            h.style.left = `${Math.random() * 95 + 2.5}%`; h.style.top = `${Math.random() * 95 + 2.5}%`;
            h.style.animationDelay = `${Math.random()}s`; if (Math.random() < 0.5) h.classList.add('hollow');
            elements.heartsContainer.appendChild(h); setTimeout(() => h.remove(), 3000);
        }
    }
    function launchFireworks(bursts) {
        for (let i = 0; i < bursts; i++) {
            setTimeout(() => { const x = Math.random() * 80 + 10; const y = Math.random() * 50 + 10; createFirework(40, x, y); }, i * 500);
        }
    }
    function createFirework(particles, x, y) {
        const colors = ['#ffeb3b', '#ff5722', '#00bcd4', '#e91e63', '#76ff03'];
        for (let i = 0; i < particles; i++) {
            const p = document.createElement('div'); p.classList.add('firework');
            p.style.left = `${x}%`; p.style.top = `${y}%`; p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * Math.PI * 2; const dist = Math.random() * 150 + 50;
            p.style.setProperty('--tx', `${Math.cos(angle) * dist}px`); p.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
            elements.fireworksContainer.appendChild(p); setTimeout(() => p.remove(), 1200);
        }
    }

    // --- Typewriter & Modals ---
    let typeIndex = 0; let isTyping = false;
    function typeWriter() {
        if (typeIndex < finalMsgText.length) {
            elements.typewriter.textContent += finalMsgText.charAt(typeIndex); typeIndex++;
            if (typeIndex % 3 === 0) playSound(sfx.type); setTimeout(typeWriter, 50);
        } else { if (elements.surpriseLink) elements.surpriseLink.style.opacity = 1; }
    }
    const closeAllModals = () => document.querySelectorAll('.modal').forEach(m => m.classList.remove('visible'));
    document.querySelectorAll('.close-btn').forEach(btn => btn.onclick = closeAllModals);

    elements.msgIcon.onclick = () => {
        closeAllModals(); elements.msgBox.classList.add('visible');
        if (!isTyping) { isTyping = true; elements.typewriter.textContent = ""; if (elements.surpriseLink) elements.surpriseLink.style.opacity = 0; typeWriter(); }
    };
    elements.wishIcon.onclick = () => { closeAllModals(); elements.wishBox.classList.add('visible'); };
    elements.giftIcon.onclick = () => { closeAllModals(); elements.giftModal.classList.add('visible'); };

    if(elements.giftBox) {
        elements.giftBox.onclick = () => {
            elements.giftBox.classList.add('opened');
            setTimeout(() => { elements.giftContent.classList.add('revealed'); elements.tapToOpen.style.display = 'none'; burstConfetti(30); playSound(sfx.magic); }, 500);
        };
    }
    
    // --- SEND WISH LOGIC ---
    elements.sendWish.onclick = () => {
        const wishMessage = elements.wishInput.value.trim();
        if (wishMessage !== "") {
            playSound(sfx.magic); closeAllModals();
            
            // EmailJS Integration
            const serviceID = "service_y5gvqq7"; 
            const templateID = "template_c2cxbrh";

            emailjs.send(serviceID, templateID, {
                message: wishMessage, 
                to_name: "Shivam",
            }).then(() => { console.log("Wish sent!"); }, (err) => { console.log("Failed:", err); });

            // Visual Animation
            const wishText = document.createElement('div'); wishText.innerText = elements.wishInput.value + " ✨";
            wishText.classList.add('wish-presentation'); elements.starContainer.appendChild(wishText); elements.wishInput.value = "";
            setTimeout(() => {
                const starHead = document.createElement('div'); starHead.classList.add('magic-star-head');
                starHead.style.left = '50%'; starHead.style.top = '50%'; elements.starContainer.appendChild(starHead);
                setTimeout(() => { starHead.style.transform = 'translate(50vw, -100vh)'; starHead.style.opacity = '0'; }, 50);
                const dustInterval = setInterval(() => {
                    const rect = starHead.getBoundingClientRect(); const dust = document.createElement('div');
                    dust.classList.add('magic-dust'); dust.style.left = `${rect.left}px`; dust.style.top = `${rect.top}px`;
                    dust.style.backgroundColor = ['#ffd700', '#ffffff'][Math.floor(Math.random()*2)];
                    const size = Math.random() * 4 + 2; dust.style.width = `${size}px`; dust.style.height = `${size}px`;
                    elements.starContainer.appendChild(dust); setTimeout(() => dust.remove(), 1000);
                }, 20);
                setTimeout(() => { clearInterval(dustInterval); starHead.remove(); wishText.remove(); }, 2500);
            }, 800);
        }
    };

    if (elements.kanhaIcon && elements.kanhaModal) {
        elements.kanhaIcon.onclick = () => {
            closeAllModals(); elements.kanhaModal.classList.add('visible');
            const lines = ["सखी, कैसी हो तुम… 💛", "बहुत दिन हो गए तुमसे बात किए…", "सुना है, तुम आजकल बहुत खुश हो 😌✨", "अच्छा है, हमेशा ऐसे ही मुस्कुराती रहना…", "और हाँ, आज तुम्हारा जन्मदिन है… बहुत बहुत शुभकामनाएँ 🎂✨" , "happy bitthday saniya "];
            elements.kanhaLines.forEach(l => { if (!l) return; l.textContent = ""; l.classList.remove('visible'); });
            let i = 0;
            function showLine() {
                if (i >= lines.length) return;
                const el = elements.kanhaLines[i]; if (el) { el.textContent = lines[i]; el.classList.add('visible'); }
                i++; setTimeout(showLine, 1300);
            }
            showLine();
        };
    }
});