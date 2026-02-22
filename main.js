tailwind.config = {
    theme: {
    extend: {
        colors: {
        gold: { DEFAULT: '#C9A84C', light: '#E8C96B', dark: '#A07830' },
        mosque: { DEFAULT: '#0D3B2E', mid: '#155740', light: '#1E7A55', pale: '#E8F5F0' },
        },
        fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Lato', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
        }
    }
    }
}

// ─── Hijri Date ───────────────────────────────────────────────────
function getHijriDate() {
try {
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
    day: 'numeric', month: 'long', year: 'numeric'
    });
    return formatter.format(new Date());
} catch(e) {
    return 'Ramadan 1447 AH';
}
}
document.getElementById('hijriDate').textContent = getHijriDate();

// ─── Analog Clock Setup ───────────────────────────────────────────
const clockEl = document.getElementById('analogClock');
const size = 220;
const cx = size / 2, cy = size / 2, r = size / 2;

for (let i = 1; i <= 12; i++) {
const angle = ((i * 30) - 90) * (Math.PI / 180);
const nr = r * 0.78;
const x = cx + nr * Math.cos(angle);
const y = cy + nr * Math.sin(angle);
const numEl = document.createElement('div');
numEl.className = 'clock-number';
numEl.textContent = i;
numEl.style.left = `${x}px`;
numEl.style.top  = `${y}px`;
numEl.style.transform = 'translate(-50%, -50%)';
clockEl.appendChild(numEl);
}

// ─── Clock Tick ───────────────────────────────────────────────────
let isAnalog = false;

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
const now = new Date();
const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();

// Digital
document.getElementById('dH').textContent = pad(h);
document.getElementById('dM').textContent = pad(m);
document.getElementById('dS').textContent = pad(s);

// Digital date
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
document.getElementById('digitalDate').textContent =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

// Analog
if (isAnalog) {
    const secDeg  = s * 6;
    const minDeg  = m * 6 + s * 0.1;
    const hourDeg = (h % 12) * 30 + m * 0.5;

    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minHand').style.transform  = `translateX(-50%) rotate(${minDeg}deg)`;
    document.getElementById('secHand').style.transform  = `translateX(-50%) rotate(${secDeg}deg)`;
}

updateCountdown(h, m, s);
}

setInterval(tick, 1000);
tick();

// ─── Toggle Clock ─────────────────────────────────────────────────
document.getElementById('clockToggle').addEventListener('click', function() {
isAnalog = !isAnalog;
document.getElementById('digitalWrapper').classList.toggle('hidden', isAnalog);
document.getElementById('analogWrapper').classList.toggle('hidden', !isAnalog);
this.textContent = isAnalog ? '⇄ Switch to Digital' : '⇄ Switch to Analog';
});

// ─── Prayer Rows: render times & highlight ────────────────────────
function parsePrayerTimes() {
const rows = document.querySelectorAll('.prayer-row');
const list = [];
rows.forEach(row => {
    const t = row.getAttribute('data-time');
    const name = row.querySelector('.prayer-name').textContent.trim();
    const timeEl = row.querySelector('.prayer-time');
    if (t) {
    const [hh, mm] = t.split(':').map(Number);
    timeEl.textContent = formatTime12(hh, mm);
    timeEl.classList.remove('empty');
    list.push({ name, h: hh, m: mm, row, timeEl });
    }
    // else stays as placeholder
});
return list;
}

function formatTime12(h, m) {
const ampm = h >= 12 ? 'PM' : 'AM';
const hh = h % 12 || 12;
return `${hh}:${pad(m)} ${ampm}`;
}

function updateCountdown(nowH, nowM, nowS) {
const prayers = parsePrayerTimes();
if (!prayers.length) {
    document.getElementById('nextPrayerName').textContent = 'Timings pending';
    document.getElementById('nextPrayerTime').textContent = '';
    return;
}

const nowTotalSec = nowH * 3600 + nowM * 60 + nowS;

// Clear highlights
document.querySelectorAll('.prayer-row').forEach(r => r.classList.remove('active'));
document.querySelectorAll('.active-badge').forEach(b => b.remove());

// Find next prayer
let next = null;
let minDiff = Infinity;

prayers.forEach(p => {
    const pSec = p.h * 3600 + p.m * 60;
    let diff = pSec - nowTotalSec;
    if (diff < 0) diff += 86400; // wrap midnight
    if (diff < minDiff) { minDiff = diff; next = p; }
});

if (!next) return;

// Highlight
next.row.classList.add('active');
const badge = document.createElement('span');
badge.className = 'active-badge';
badge.textContent = 'Next';
next.row.querySelector('.flex').prepend(badge);

document.getElementById('nextPrayerName').textContent = next.name;
document.getElementById('nextPrayerTime').textContent = next.timeEl.textContent;

const hrs = Math.floor(minDiff / 3600);
const mins = Math.floor((minDiff % 3600) / 60);
const secs = minDiff % 60;

document.getElementById('cdH').textContent = pad(hrs);
document.getElementById('cdM').textContent = pad(mins);
document.getElementById('cdS').textContent = pad(secs);
}

// Initial parse
parsePrayerTimes();