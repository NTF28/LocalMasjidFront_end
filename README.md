<div align="center">
=======
![Masjid Jamia Rangwar](https://raw.githubusercontent.com/NTF28/LocalMasjidFront_end/screenshot.png)

# 🕌 Masjid Jamia Rangwar

**A beautiful Ramadan web app for a local masjid.**
Prayer times · Live countdown · Sehri & Iftar · Duas · Hijri date

[![Live Site](https://img.shields.io/badge/Live-jamiarangwar.vercel.app-00c896?style=flat&logo=vercel&logoColor=white)](https://jamiarangwar.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)](https://vercel.com)

</div>

---

## What it is

A clean, mobile-friendly web app built for **Masjid Jamia Rangwar** during Ramadan 1447 AH. It shows real-time prayer timings, a live countdown to the next prayer, Sehri & Iftar times, an analog/digital clock toggle, daily duas, and a suggestion box for community feedback.

---

## Features

- 🕐 **Live clock** — digital & analog, toggle between both
- 🕌 **Full prayer timetable** — Fajr, Ishraq, Duha, Dhuhr, Asr, Maghrib, Awwabin, Isha, Taraweeh, Tahajjud
- ⏱️ **Next prayer countdown** — live HH:MM:SS timer
- 🌙 **Sehri & Iftar times** — displayed prominently
- 📅 **Hijri date display** — auto-calculated
- 🤲 **Duas page** — separate page for Ramadan duas
- 💬 **Suggestion box** — community can leave feedback
- 📱 **Fully responsive** — works on all screen sizes
- ✨ **Islamic aesthetic** — mosque silhouette SVG, Arabic typography, gold & green color scheme

---

## Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) + custom CSS |
| Scripting | Vanilla JavaScript |
| Fonts | Google Fonts — Cinzel, Lato, Amiri (Arabic) |
| Date/Time | Moment.js |
| Deployment | Vercel |
| Analytics | Vercel Insights |

> No frameworks, no build tools, no npm — pure HTML/CSS/JS deployed directly.

---

## Project Structure

```
LocalMasjidFront_end/
├── index.html          # Main page — clock, prayer times, countdown
├── duas.html           # Duas page
└── assets/
    ├── CSS/
    │   └── main.css    # Custom styles (mosque theme, animations)
    ├── JS/
    │   └── main.js     # Clock, countdown, prayer logic
    └── images/
        └── favicon_1.png
```

---

## Getting Started

No setup needed. Just open `index.html` in any browser — or visit the live site:

**[jamiarangwar.vercel.app](https://jamiarangwar.vercel.app)**

To run locally:
```bash
git clone https://github.com/NTF28/LocalMasjidFront_end.git
cd LocalMasjidFront_end
# Open index.html in your browser
```

---

## Deployment

Deployed on **Vercel** with zero configuration — just connect the repo and it deploys automatically on every push.

---

## Design

The UI uses an Islamic-inspired color palette:

| Color | Usage |
|---|---|
| `#C9A84C` (Gold) | Accents, prayer names, ornaments |
| `#0D3B2E` (Deep Green) | Background, cards |
| `#1E7A55` (Mosque Green) | Highlights |
| `#f0e8d0` (Warm White) | Body text |

Typography uses **Cinzel** for headings (elegant serif), **Lato** for body text, and **Amiri** for Arabic script.

---

<div align="center">

بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم

*Built with 🤍 for the community · Ramadan 1447 AH*

[github.com/NTF28](https://github.com/NTF28)

</div>
