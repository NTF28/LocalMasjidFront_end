// ═══════════════════════════════════════════════════
//  DUA DATA
// ═══════════════════════════════════════════════════
const duas = [

// ── RAMADAN ──────────────────────────────────────
{
    id: 1,
    category: 'ramadan',
    categoryLabel: 'Ramadan',
    title: 'Dua for Sehri (Suhoor)',
    arabic: 'وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ',
    transliteration: 'Wa bisawmi ghadin nawaitu min shahri ramadaan',
    english: 'I intend to keep the fast for tomorrow in the month of Ramadan.',
    urdu: 'میں نے ماہِ رمضان میں کل کے روزے کی نیت کی۔'
},
{
    id: 2,
    category: 'ramadan',
    categoryLabel: 'Ramadan',
    title: 'Dua for Iftar (Breaking Fast)',
    arabic: 'اللَّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
    transliteration: "Allahumma inni laka sumtu wa bika aamantu wa 'alayka tawakkaltu wa 'ala rizqika aftartu",
    english: 'O Allah! I fasted for You, I believe in You, I put my trust in You, and I break my fast with Your sustenance.',
    urdu: 'اے اللہ! میں نے تیرے لیے روزہ رکھا، تجھ پر ایمان لایا، تجھ پر توکل کیا، اور تیرے رزق سے روزہ کھولا۔'
},
{
    id: 3,
    category: 'ramadan',
    categoryLabel: 'Ramadan',
    title: 'Dua for Laylatul Qadr (Night of Power)',
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
    english: 'O Allah, You are Most Forgiving, and You love forgiveness, so forgive me.',
    urdu: 'اے اللہ! تو معاف کرنے والا ہے، معافی کو پسند کرتا ہے، پس مجھے معاف فرما دے۔'
},

// ── DAILY ────────────────────────────────────────
{
    id: 4,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua When Waking Up',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    english: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    urdu: 'تمام تعریفیں اللہ کے لیے جس نے ہمیں موت کے بعد زندگی دی، اور اسی کی طرف اٹھنا ہے۔'
},
{
    id: 5,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua Before Sleeping',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    english: 'In Your name, O Allah, I die and I live.',
    urdu: 'اے اللہ! تیرے نام سے مرتا ہوں اور جیتا ہوں۔'
},
{
    id: 6,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua Before Eating',
    arabic: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
    transliteration: "Bismillahi wa 'ala barakatillah",
    english: 'In the name of Allah and with the blessings of Allah (I begin).',
    urdu: 'اللہ کے نام سے اور اللہ کی برکت کے ساتھ (شروع کرتا ہوں)۔'
},
{
    id: 7,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua After Eating',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin",
    english: 'All praise is for Allah who fed us, gave us drink, and made us Muslims.',
    urdu: 'تمام تعریفیں اللہ کے لیے جس نے ہمیں کھانا کھلایا، پانی پلایا، اور ہمیں مسلمان بنایا۔'
},
{
    id: 8,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua When Leaving Home',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah",
    english: 'In the name of Allah, I place my trust in Allah, and there is no might or power except with Allah.',
    urdu: 'اللہ کے نام سے، اللہ پر بھروسہ کیا، اور کوئی طاقت اور قوت نہیں سوائے اللہ کے۔'
},

// ── KNOWLEDGE ────────────────────────────────────
{
    id: 9,
    category: 'knowledge',
    categoryLabel: 'Knowledge',
    title: 'Dua for Increase in Knowledge',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: "Rabbi zidni 'ilma",
    english: 'O my Lord, increase me in knowledge.',
    urdu: 'اے میرے رب! میرے علم میں اضافہ فرما۔'
},
{
    id: 10,
    category: 'knowledge',
    categoryLabel: 'Knowledge',
    title: 'Dua for Understanding (Before Study)',
    arabic: 'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: "Allahumma iftah 'alayna hikmataka wanshur 'alayna rahmataka ya dhal-jalali wal-ikram",
    english: 'O Allah, open for us Your wisdom and spread over us Your mercy, O Possessor of Majesty and Honour.',
    urdu: 'اے اللہ! ہم پر اپنی حکمت کا دروازہ کھول اور ہم پر اپنی رحمت پھیلا، اے جلال و اکرام والے!'
},

// ── PROTECTION ───────────────────────────────────
{
    id: 11,
    category: 'protection',
    categoryLabel: 'Protection',
    title: 'Dua for Protection (Morning & Evening)',
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    transliteration: 'Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushur',
    english: 'O Allah, by You we enter the morning, by You we enter the evening, by You we live, by You we die, and to You is the resurrection.',
    urdu: 'اے اللہ! تیری طرف سے ہم نے صبح کی، تیری طرف سے شام کی، تیرے ساتھ جیتے ہیں، تیرے ساتھ مرتے ہیں، اور تیری طرف ہی اٹھنا ہے۔'
},
{
    id: 12,
    category: 'protection',
    categoryLabel: 'Protection',
    title: 'Dua for Protection from Evil Eye',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    english: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
    urdu: 'میں اللہ کے کامل کلمات کے ذریعے اس کی مخلوق کی برائی سے پناہ مانگتا ہوں۔'
},
{
    id: 13,
    category: 'protection',
    categoryLabel: 'Protection',
    title: 'Dua for Anxiety & Distress',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dhala'id-dayni wa ghalabatir-rijal",
    english: 'O Allah, I seek refuge in You from worry and grief, from weakness and laziness, from miserliness and cowardice, from the burden of debt and from being dominated by people.',
    urdu: 'اے اللہ! میں تیری پناہ مانگتا ہوں غم اور فکر سے، عاجزی اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ اور لوگوں کے غلبے سے۔'
},

// ── FORGIVENESS ──────────────────────────────────
{
    id: 14,
    category: 'forgiveness',
    categoryLabel: 'Forgiveness',
    title: 'Sayyidul Istighfar (Master of Forgiveness)',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bithambhi faghfir li, fa innahu la yaghfirudh-dhunuba illa ant",
    english: 'O Allah, You are my Lord. None has the right to be worshipped except You. You created me and I am Your slave. I am faithful to my covenant and my promise as much as I can. I seek refuge with You from all the evil I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.',
    urdu: 'اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں۔ میں اپنی طاقت کے مطابق تیرے عہد و پیمان پر قائم ہوں۔ میں نے جو برائی کی اس سے تیری پناہ مانگتا ہوں۔ تیری نعمت کا اعتراف کرتا ہوں اور اپنے گناہ کا بھی، پس مجھے معاف فرما کیونکہ گناہ معاف کرنے والا تیرے سوا کوئی نہیں۔'
},
{
    id: 15,
    category: 'forgiveness',
    categoryLabel: 'Forgiveness',
    title: 'Dua for Sabr (Patience)',
    arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
    english: 'Our Lord! Pour forth on us patience and make our feet firm and make us victorious over the disbelieving people.',
    urdu: 'اے ہمارے رب! ہم پر صبر نازل فرما، ہمارے قدم جما، اور کافروں کے مقابلے میں ہماری مدد فرما۔'
},

// ── HEALTH & RIZQ ─────────────────────────────────
{
    id: 16,
    category: 'health',
    categoryLabel: 'Health & Rizq',
    title: 'Dua for Barakah (Blessings) in Wealth',
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
    transliteration: "Allahumma barik lana fima razaqtana wa qina 'adhaban-nar",
    english: 'O Allah, bless us in what You have provided us and protect us from the punishment of the Fire.',
    urdu: 'اے اللہ! جو تو نے ہمیں رزق دیا اس میں برکت عطا فرما اور ہمیں آگ کے عذاب سے بچا۔'
},
{
    id: 17,
    category: 'health',
    categoryLabel: 'Health & Rizq',
    title: 'Dua for Increase in Rizq (Sustenance)',
    arabic: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    transliteration: "Allahummak-fini bihalaalika 'an haramika wa aghnini bifadhlika 'amman siwak",
    english: 'O Allah, suffice me with what You have allowed instead of what You have forbidden, and make me independent of all others besides You.',
    urdu: 'اے اللہ! مجھے اپنے حلال کے ذریعے حرام سے بے نیاز کر، اور اپنے فضل سے مجھے تیرے سوا سب سے بے پرواہ کر۔'
},
{
    id: 18,
    category: 'health',
    categoryLabel: 'Health & Rizq',
    title: 'Dua for Shifaa (Healing)',
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَّا يُغَادِرُ سَقَمًا',
    transliteration: "Allahumma Rabb an-naas, adhhibil ba's, ishfi antash-Shaafi, laa shifaa'a illaa shifaa'uka, shifaa'al laa yughaadiru saqama",
    english: 'O Allah, Lord of mankind, remove the affliction. Cure, for You are the Healer. There is no cure except Your cure — a cure that leaves no illness behind.',
    urdu: 'اے اللہ، لوگوں کے رب! تکلیف دور فرما، شفا دے، تو ہی شفا دینے والا ہے، تیری شفا کے سوا کوئی شفا نہیں — ایسی شفا جو کوئی بیماری باقی نہ چھوڑے۔'
},

// ── DECEASED ──────────────────────────────────────
{
    id: 19,
    category: 'deceased',
    categoryLabel: 'Deceased',
    title: 'Dua for the Deceased (Janazah)',
    arabic: 'اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا',
    transliteration: "Allahumma-ghfir lihayyina wa mayyitina wa shahidina wa gha'ibina wa saghirina wa kabirina wa dhakarana wa unthana",
    english: 'O Allah, forgive our living and our dead, those who are present and those who are absent, our young and our old, our males and our females.',
    urdu: 'اے اللہ! ہمارے زندوں اور مردوں، حاضر اور غائب، چھوٹے اور بڑے، مرد اور عورت سب کو بخش دے۔'
},
{
    id: 20,
    category: 'deceased',
    categoryLabel: 'Deceased',
    title: 'Dua When Visiting a Grave',
    arabic: 'السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ',
    transliteration: "As-salamu 'alaykum ahlad-diyari minal mu'minina wal muslimin, wa inna in sha'Allahu bikum lahiqun, nas'alullaha lana wa lakumul-'afiyah",
    english: 'Peace be upon you, O people of the dwellings, believers and Muslims. Indeed, if Allah wills, we will follow you. We ask Allah for well-being for us and for you.',
    urdu: 'اے اس بستی کے مؤمنین و مسلمین! تم پر سلامتی ہو۔ ہم بھی ان شاء اللہ تم سے ملنے والے ہیں۔ ہم اللہ سے اپنے اور تمہارے لیے عافیت مانگتے ہیں۔'
},

// ── EXTRA POWERFUL ────────────────────────────────
{
    id: 21,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua for Entering the Masjid',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: "Allahumma-ftah li abwaba rahmatik",
    english: 'O Allah, open the gates of Your mercy for me.',
    urdu: 'اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔'
},
{
    id: 22,
    category: 'daily',
    categoryLabel: 'Daily',
    title: 'Dua for Leaving the Masjid',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: "Allahumma inni as'aluka min fadlik",
    english: 'O Allah, I ask You for Your bounty.',
    urdu: 'اے اللہ! میں تجھ سے تیرے فضل کا سوال کرتا ہوں۔'
},
{
    id: 23,
    category: 'protection',
    categoryLabel: 'Protection',
    title: 'Dua for Travel (Before Journey)',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
    transliteration: "Subhaanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    english: 'Glory be to Him Who has subjected this to us, and we were not capable of that, and indeed to our Lord we shall return.',
    urdu: 'پاک ہے وہ ذات جس نے اسے ہمارے لیے مسخر کیا ورنہ ہم اسے قابو میں لانے کی طاقت نہیں رکھتے تھے، اور بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں۔'
},
{
    id: 24,
    category: 'knowledge',
    categoryLabel: 'Knowledge',
    title: 'Dua for Tawakkul (Trust in Allah)',
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: "Hasbunallahu wa ni'mal wakil",
    english: 'Allah is sufficient for us, and He is the best disposer of affairs.',
    urdu: 'اللہ ہمارے لیے کافی ہے اور وہ بہترین وکیل ہے۔'
},
];

// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════
let activeFilter = 'all';
let searchQuery = '';

// ═══════════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════════
function getFiltered() {
return duas.filter(d => {
    const matchFilter = activeFilter === 'all' || d.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
    d.title.toLowerCase().includes(q) ||
    d.english.toLowerCase().includes(q) ||
    d.transliteration.toLowerCase().includes(q) ||
    d.arabic.includes(q);
    return matchFilter && matchSearch;
});
}

function render() {
const filtered = getFiltered();
const grid = document.getElementById('duasGrid');
const empty = document.getElementById('emptyState');
document.getElementById('visibleCount').textContent = filtered.length;
document.getElementById('totalCount').textContent = duas.length;

if (!filtered.length) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
}
empty.classList.add('hidden');

grid.innerHTML = filtered.map((d, i) => `
    <div class="dua-card" id="card-${d.id}" style="animation-delay:${i * 0.04}s">
    <div class="dua-header" onclick="toggleCard(${d.id})">
        <div style="flex:1;min-width:0;">
        <span class="dua-category-badge">${d.categoryLabel}</span>
        <div class="dua-title mt-1">${d.title}</div>
        </div>
        <span class="expand-icon" style="margin-left:12px;">▾</span>
    </div>
    <div class="dua-body">
        <div class="arabic-text">${d.arabic}</div>
        <div class="transliteration">${d.transliteration}</div>
        <div class="meaning-block">
        <div class="meaning-lang">English Meaning</div>
        <div class="meaning-text">${d.english}</div>
        </div>
        <div class="meaning-block" style="border-top:1px solid rgba(201,168,76,0.08);padding-top:10px;margin-top:4px;">
        <div class="meaning-lang">اردو ترجمہ</div>
        <div class="meaning-text urdu">${d.urdu}</div>
        </div>
        <button class="copy-btn" onclick="copyDua(${d.id}, this)">
        📋 Copy Arabic
        </button>
    </div>
    </div>
`).join('');
}

function toggleCard(id) {
const card = document.getElementById(`card-${id}`);
card.classList.toggle('open');
}

function copyDua(id, btn) {
const dua = duas.find(d => d.id === id);
if (!dua) return;
navigator.clipboard.writeText(dua.arabic).then(() => {
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
    btn.textContent = '📋 Copy Arabic';
    btn.classList.remove('copied');
    }, 2000);
});
}

// ═══════════════════════════════════════════════════
//  FILTERS & SEARCH
// ═══════════════════════════════════════════════════
document.querySelectorAll('.tab-btn').forEach(btn => {
btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    activeFilter = this.dataset.filter;
    render();
});
});


// ═══════════════════════════════════════════════════
//  THEME TOGGLE (synced with main site)
// ═══════════════════════════════════════════════════
const themeBtn = document.getElementById('themeToggleBtn');
const saved = localStorage.getItem('masjid-theme');
if (saved === 'light') applyLight();

themeBtn.addEventListener('click', () => {
document.body.classList.contains('light-mode') ? applyDark() : applyLight();
});
function applyLight() {
document.body.classList.add('light-mode');
themeBtn.textContent = '🌑';
localStorage.setItem('masjid-theme', 'light');
}
function applyDark() {
document.body.classList.remove('light-mode');
themeBtn.textContent = '🌙';
localStorage.setItem('masjid-theme', 'dark');
}

// Initial render
render();

