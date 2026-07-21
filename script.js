// ============================================
// Gianni & Maricielo — 3 meses
// ============================================

// ---- Pétalos ambientales ----
const petalsContainer = document.getElementById('petals');

function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';

  const startLeft = Math.random() * 100;
  const duration = 8 + Math.random() * 8;
  const swayDuration = 3 + Math.random() * 3;
  const size = 8 + Math.random() * 8;
  const delay = Math.random() * 2;

  petal.style.left = startLeft + 'vw';
  petal.style.width = size + 'px';
  petal.style.height = size * 1.2 + 'px';
  petal.style.animationDuration = `${duration}s, ${swayDuration}s`;
  petal.style.animationDelay = `${delay}s, 0s`;
  petal.style.opacity = 0.4 + Math.random() * 0.4;

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(createPetal, i * 400);
}
setInterval(createPetal, 1400);

// ---- Sobre y carta ----
const envelope = document.getElementById('envelope');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function launchHearts() {
  const rect = envelope.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top;
  const symbols = ['❤', '💕', '💗', '♡'];
  const total = 18;

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-burst';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      const spread = (Math.random() - 0.5) * 240;
      heart.style.left = originX + 'px';
      heart.style.top = originY + 'px';
      heart.style.setProperty('--tx-start', (spread * 0.3) + 'px');
      heart.style.setProperty('--tx-end', spread + 'px');
      heart.style.setProperty('--rot', (Math.random() * 40 - 20) + 'deg');
      heart.style.fontSize = (16 + Math.random() * 16) + 'px';

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1700);
    }, i * 45);
  }
}

function openLetter() {
  envelope.classList.add('opened');
  launchHearts();
  setTimeout(() => {
    overlay.classList.add('visible');
  }, 750);
}

function closeLetter() {
  overlay.classList.remove('visible');
  setTimeout(() => {
    envelope.classList.remove('opened');
  }, 300);
}

envelope.addEventListener('click', openLetter);
envelope.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openLetter();
  }
});

closeBtn.addEventListener('click', closeLetter);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLetter();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('visible')) closeLetter();
});

// ---- Música ----
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

function setPlayingUI(isPlaying) {
  musicToggle.classList.toggle('playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
}

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play()
      .then(() => setPlayingUI(true))
      .catch(() => {
        alert('Coloca tu archivo de música en la carpeta "assets" con el nombre "musica.mp3" para poder reproducirlo.');
      });
  } else {
    bgMusic.pause();
    setPlayingUI(false);
  }
});