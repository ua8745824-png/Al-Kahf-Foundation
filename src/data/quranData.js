/**
 * Comprehensive Holy Quran Dataset for Al-Kahf Foundation
 * Includes all 114 Surahs, 30 Juz metadata, Curated Best PDF Editions, and Qari Audio Endpoints.
 */

export const quranMeta = {
  totalSurahs: 114,
  totalPages: 604,
  totalJuz: 30,
  totalAyahs: 6236,
  madinahMushafPageUrl: (page) => {
    // High-resolution King Fahd Complex / Quran.com standard 15-line Madani Mushaf page images
    const padded = String(page).padStart(3, '0');
    return `https://android.quran.com/data/width_1260/page${padded}.png`;
  },
  madinahMushafFallbackUrl: (page) => {
    const padded = String(page).padStart(3, '0');
    return `https://raw.githubusercontent.com/QuranHub/quran-images/master/images_1920/${padded}.png`;
  },
  madinahMushafSvgUrl: (page) => {
    return `https://everyayah.com/data/quranpngs/${page}.png`;
  }
};

// World-Renowned Qaris for Tilawat Streaming
export const qarisList = [
  {
    id: 'ar.alafasy',
    name: 'Mishary Rashid Alafasy',
    arabicName: 'مشاري بن راشد العفاسي',
    country: 'Kuwait',
    server: 'https://everyayah.com/data/Alafasy_128kbps',
    apiIdentifier: 'ar.alafasy'
  },
  {
    id: 'ar.abdulbasit',
    name: 'Abdul Basit Abdul Samad (Murattal)',
    arabicName: 'عبد الباسط عبد الصمد',
    country: 'Egypt',
    server: 'https://everyayah.com/data/Abdul_Basit_Murattal_192kbps',
    apiIdentifier: 'ar.abdulbasitmurattal'
  },
  {
    id: 'ar.husary',
    name: 'Mahmoud Khalil Al-Husary',
    arabicName: 'محمود خليل الحصري',
    country: 'Egypt',
    server: 'https://everyayah.com/data/Husary_128kbps',
    apiIdentifier: 'ar.husary'
  },
  {
    id: 'ar.sudais',
    name: 'Abdul Rahman Al-Sudais',
    arabicName: 'عبد الرحمن السديس',
    country: 'Saudi Arabia (Imam of Masjid al-Haram)',
    server: 'https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps',
    apiIdentifier: 'ar.abdurrahmaansudais'
  },
  {
    id: 'ar.shuraym',
    name: 'Saud Al-Shuraim',
    arabicName: 'سعود الشريم',
    country: 'Saudi Arabia',
    server: 'https://everyayah.com/data/Saood_ash-Shuraym_128kbps',
    apiIdentifier: 'ar.saoodshuraym'
  },
  {
    id: 'ar.minshawi',
    name: 'Mohamed Siddiq Al-Minshawi',
    arabicName: 'محمد صديق المنشاوي',
    country: 'Egypt',
    server: 'https://everyayah.com/data/Minshawy_Murattal_128kbps',
    apiIdentifier: 'ar.minshawi'
  },
  {
    id: 'ar.muaiqly',
    name: 'Maher Al-Muaiqly',
    arabicName: 'ماهر المعيقلي',
    country: 'Saudi Arabia (Imam of Masjid al-Haram)',
    server: 'https://everyayah.com/data/MaherAlMuaiqly128kbps',
    apiIdentifier: 'ar.mahermuaiqly'
  }
];

// All 114 Surahs Metadata
export const surahsData = [
  { number: 1, name: "Al-Fatihah", englishName: "The Opening", arabicName: "الفاتحة", urduName: "سورۃ الفاتحہ", versesCount: 7, revelationPlace: "Makkah", startPage: 1, juz: 1 },
  { number: 2, name: "Al-Baqarah", englishName: "The Cow", arabicName: "البقرة", urduName: "سورۃ البقرہ", versesCount: 286, revelationPlace: "Madinah", startPage: 2, juz: 1 },
  { number: 3, name: "Ali 'Imran", englishName: "Family of Imran", arabicName: "آل عمران", urduName: "سورۃ آل عمران", versesCount: 200, revelationPlace: "Madinah", startPage: 50, juz: 3 },
  { number: 4, name: "An-Nisa", englishName: "The Women", arabicName: "النساء", urduName: "سورۃ النساء", versesCount: 176, revelationPlace: "Madinah", startPage: 77, juz: 4 },
  { number: 5, name: "Al-Ma'idah", englishName: "The Table Spread", arabicName: "المائدة", urduName: "سورۃ المائدہ", versesCount: 120, revelationPlace: "Madinah", startPage: 106, juz: 6 },
  { number: 6, name: "Al-An'am", englishName: "The Cattle", arabicName: "الأنعام", urduName: "سورۃ الانعام", versesCount: 165, revelationPlace: "Makkah", startPage: 128, juz: 7 },
  { number: 7, name: "Al-A'raf", englishName: "The Heights", arabicName: "الأعراف", urduName: "سورۃ الاعراف", versesCount: 206, revelationPlace: "Makkah", startPage: 151, juz: 8 },
  { number: 8, name: "Al-Anfal", englishName: "The Spoils of War", arabicName: "الأنفال", urduName: "سورۃ الانفال", versesCount: 75, revelationPlace: "Madinah", startPage: 177, juz: 9 },
  { number: 9, name: "At-Tawbah", englishName: "The Repentance", arabicName: "التوبة", urduName: "سورۃ التوبہ", versesCount: 129, revelationPlace: "Madinah", startPage: 187, juz: 10 },
  { number: 10, name: "Yunus", englishName: "Jonah", arabicName: "يونس", urduName: "سورۃ یونس", versesCount: 109, revelationPlace: "Makkah", startPage: 208, juz: 11 },
  { number: 11, name: "Hud", englishName: "Hud", arabicName: "هود", urduName: "سورۃ ہود", versesCount: 123, revelationPlace: "Makkah", startPage: 221, juz: 11 },
  { number: 12, name: "Yusuf", englishName: "Joseph", arabicName: "يوسف", urduName: "سورۃ یوسف", versesCount: 111, revelationPlace: "Makkah", startPage: 235, juz: 12 },
  { number: 13, name: "Ar-Ra'd", englishName: "The Thunder", arabicName: "الرعد", urduName: "سورۃ الرعد", versesCount: 43, revelationPlace: "Madinah", startPage: 249, juz: 13 },
  { number: 14, name: "Ibrahim", englishName: "Abraham", arabicName: "إبراهيم", urduName: "سورۃ ابراہیم", versesCount: 52, revelationPlace: "Makkah", startPage: 255, juz: 13 },
  { number: 15, name: "Al-Hijr", englishName: "The Rocky Tract", arabicName: "الحجر", urduName: "سورۃ الحجر", versesCount: 99, revelationPlace: "Makkah", startPage: 262, juz: 14 },
  { number: 16, name: "An-Nahl", englishName: "The Bee", arabicName: "النحل", urduName: "سورۃ النحل", versesCount: 128, revelationPlace: "Makkah", startPage: 267, juz: 14 },
  { number: 17, name: "Al-Isra", englishName: "The Night Journey", arabicName: "الإسراء", urduName: "سورۃ الاسراء", versesCount: 111, revelationPlace: "Makkah", startPage: 282, juz: 15 },
  { number: 18, name: "Al-Kahf", englishName: "The Cave", arabicName: "الكهف", urduName: "سورۃ الکہف", versesCount: 110, revelationPlace: "Makkah", startPage: 293, juz: 15, isFoundationSpecial: true },
  { number: 19, name: "Maryam", englishName: "Mary", arabicName: "مريم", urduName: "سورۃ مریم", versesCount: 98, revelationPlace: "Makkah", startPage: 305, juz: 16 },
  { number: 20, name: "Ta-Ha", englishName: "Ta-Ha", arabicName: "طه", urduName: "سورۃ طٰہٰ", versesCount: 135, revelationPlace: "Makkah", startPage: 312, juz: 16 },
  { number: 21, name: "Al-Anbiya", englishName: "The Prophets", arabicName: "الأنبياء", urduName: "سورۃ الانبیاء", versesCount: 112, revelationPlace: "Makkah", startPage: 322, juz: 17 },
  { number: 22, name: "Al-Hajj", englishName: "The Pilgrimage", arabicName: "الحج", urduName: "سورۃ الحج", versesCount: 78, revelationPlace: "Madinah", startPage: 332, juz: 17 },
  { number: 23, name: "Al-Mu'minun", englishName: "The Believers", arabicName: "المؤمنون", urduName: "سورۃ المؤمنون", versesCount: 118, revelationPlace: "Makkah", startPage: 342, juz: 18 },
  { number: 24, name: "An-Nur", englishName: "The Light", arabicName: "النور", urduName: "سورۃ النور", versesCount: 64, revelationPlace: "Madinah", startPage: 350, juz: 18 },
  { number: 25, name: "Al-Furqan", englishName: "The Criterion", arabicName: "الفرقان", urduName: "سورۃ الفرقان", versesCount: 77, revelationPlace: "Makkah", startPage: 359, juz: 18 },
  { number: 26, name: "Ash-Shu'ara", englishName: "The Poets", arabicName: "الشعراء", urduName: "سورۃ الشعراء", versesCount: 227, revelationPlace: "Makkah", startPage: 367, juz: 19 },
  { number: 27, name: "An-Naml", englishName: "The Ant", arabicName: "النمل", urduName: "سورۃ النمل", versesCount: 93, revelationPlace: "Makkah", startPage: 377, juz: 19 },
  { number: 28, name: "Al-Qasas", englishName: "The Stories", arabicName: "القصص", urduName: "سورۃ القصص", versesCount: 88, revelationPlace: "Makkah", startPage: 385, juz: 20 },
  { number: 29, name: "Al-'Ankabut", englishName: "The Spider", arabicName: "العنكبوت", urduName: "سورۃ العنکبوت", versesCount: 69, revelationPlace: "Makkah", startPage: 396, juz: 20 },
  { number: 30, name: "Ar-Rum", englishName: "The Romans", arabicName: "الروم", urduName: "سورۃ الروم", versesCount: 60, revelationPlace: "Makkah", startPage: 404, juz: 21 },
  { number: 31, name: "Luqman", englishName: "Luqman", arabicName: "لقمان", urduName: "سورۃ لقمان", versesCount: 34, revelationPlace: "Makkah", startPage: 411, juz: 21 },
  { number: 32, name: "As-Sajdah", englishName: "The Prostration", arabicName: "السجدة", urduName: "سورۃ السجدہ", versesCount: 30, revelationPlace: "Makkah", startPage: 415, juz: 21 },
  { number: 33, name: "Al-Ahzab", englishName: "The Combined Forces", arabicName: "الأحزاب", urduName: "سورۃ الاحزاب", versesCount: 73, revelationPlace: "Madinah", startPage: 418, juz: 21 },
  { number: 34, name: "Saba", englishName: "Sheba", arabicName: "سبأ", urduName: "سورۃ سبا", versesCount: 54, revelationPlace: "Makkah", startPage: 428, juz: 22 },
  { number: 35, name: "Fatir", englishName: "Originator", arabicName: "فاطر", urduName: "سورۃ فاطر", versesCount: 45, revelationPlace: "Makkah", startPage: 434, juz: 22 },
  { number: 36, name: "Ya-Sin", englishName: "Ya-Sin (Heart of Quran)", arabicName: "يس", urduName: "سورۃ یٰسٓ", versesCount: 83, revelationPlace: "Makkah", startPage: 440, juz: 22, isHighlighted: true },
  { number: 37, name: "As-Saffat", englishName: "Those who set the Ranks", arabicName: "الصافات", urduName: "سورۃ الصافات", versesCount: 182, revelationPlace: "Makkah", startPage: 446, juz: 23 },
  { number: 38, name: "Sad", englishName: "The Letter Sad", arabicName: "ص", urduName: "سورۃ ص", versesCount: 88, revelationPlace: "Makkah", startPage: 453, juz: 23 },
  { number: 39, name: "Az-Zumar", englishName: "The Troops", arabicName: "الزمر", urduName: "سورۃ الزمر", versesCount: 75, revelationPlace: "Makkah", startPage: 458, juz: 23 },
  { number: 40, name: "Ghafir", englishName: "The Forgiver", arabicName: "غافر", urduName: "سورۃ غافر", versesCount: 85, revelationPlace: "Makkah", startPage: 467, juz: 24 },
  { number: 41, name: "Fussilat", englishName: "Explained in Detail", arabicName: "فصلت", urduName: "سورۃ فصلت", versesCount: 54, revelationPlace: "Makkah", startPage: 477, juz: 24 },
  { number: 42, name: "Ash-Shura", englishName: "The Consultation", arabicName: "الشورى", urduName: "سورۃ الشوریٰ", versesCount: 53, revelationPlace: "Makkah", startPage: 483, juz: 25 },
  { number: 43, name: "Az-Zukhruf", englishName: "The Ornaments of Gold", arabicName: "الزخرف", urduName: "سورۃ الزخرف", versesCount: 89, revelationPlace: "Makkah", startPage: 489, juz: 25 },
  { number: 44, name: "Ad-Dukhan", englishName: "The Smoke", arabicName: "الدخان", urduName: "سورۃ الدخان", versesCount: 59, revelationPlace: "Makkah", startPage: 496, juz: 25 },
  { number: 45, name: "Al-Jathiyah", englishName: "The Crouching", arabicName: "الجاثية", urduName: "سورۃ الجاثیہ", versesCount: 37, revelationPlace: "Makkah", startPage: 499, juz: 25 },
  { number: 46, name: "Al-Ahqaf", englishName: "The Wind-Curved Sandhills", arabicName: "الأحقاف", urduName: "سورۃ الاحقاف", versesCount: 35, revelationPlace: "Makkah", startPage: 502, juz: 26 },
  { number: 47, name: "Muhammad", englishName: "Muhammad ﷺ", arabicName: "محمد", urduName: "سورۃ محمد", versesCount: 38, revelationPlace: "Madinah", startPage: 507, juz: 26 },
  { number: 48, name: "Al-Fath", englishName: "The Victory", arabicName: "الفتح", urduName: "سورۃ الفتح", versesCount: 29, revelationPlace: "Madinah", startPage: 511, juz: 26 },
  { number: 49, name: "Al-Hujurat", englishName: "The Rooms", arabicName: "الحجرات", urduName: "سورۃ الحجرات", versesCount: 18, revelationPlace: "Madinah", startPage: 515, juz: 26 },
  { number: 50, name: "Qaf", englishName: "The Letter Qaf", arabicName: "ق", urduName: "سورۃ ق", versesCount: 45, revelationPlace: "Makkah", startPage: 518, juz: 26 },
  { number: 51, name: "Adh-Dhariyat", englishName: "The Winnowing Winds", arabicName: "الذاريات", urduName: "سورۃ الذاریات", versesCount: 60, revelationPlace: "Makkah", startPage: 520, juz: 26 },
  { number: 52, name: "At-Tur", englishName: "The Mount", arabicName: "الطور", urduName: "سورۃ الطور", versesCount: 49, revelationPlace: "Makkah", startPage: 523, juz: 27 },
  { number: 53, name: "An-Najm", englishName: "The Star", arabicName: "النجم", urduName: "سورۃ النجم", versesCount: 62, revelationPlace: "Makkah", startPage: 526, juz: 27 },
  { number: 54, name: "Al-Qamar", englishName: "The Moon", arabicName: "القمر", urduName: "سورۃ القمر", versesCount: 55, revelationPlace: "Makkah", startPage: 528, juz: 27 },
  { number: 55, name: "Ar-Rahman", englishName: "The Beneficent", arabicName: "الرحمن", urduName: "سورۃ الرحمن", versesCount: 78, revelationPlace: "Madinah", startPage: 531, juz: 27, isHighlighted: true },
  { number: 56, name: "Al-Waqi'ah", englishName: "The Inevitable", arabicName: "الواقعة", urduName: "سورۃ الواقعہ", versesCount: 96, revelationPlace: "Makkah", startPage: 534, juz: 27, isHighlighted: true },
  { number: 57, name: "Al-Hadid", englishName: "The Iron", arabicName: "الحديد", urduName: "سورۃ الحدید", versesCount: 29, revelationPlace: "Madinah", startPage: 537, juz: 27 },
  { number: 58, name: "Al-Mujadila", englishName: "The Pleading Woman", arabicName: "المجادلة", urduName: "سورۃ المجادلہ", versesCount: 22, revelationPlace: "Madinah", startPage: 542, juz: 28 },
  { number: 59, name: "Al-Hashr", englishName: "The Exile", arabicName: "الحشر", urduName: "سورۃ الحشر", versesCount: 24, revelationPlace: "Madinah", startPage: 545, juz: 28 },
  { number: 60, name: "Al-Mumtahanah", englishName: "She that is to be examined", arabicName: "الممتحنة", urduName: "سورۃ الممتحنہ", versesCount: 13, revelationPlace: "Madinah", startPage: 549, juz: 28 },
  { number: 61, name: "As-Saff", englishName: "The Ranks", arabicName: "الصف", urduName: "سورۃ الصف", versesCount: 14, revelationPlace: "Madinah", startPage: 551, juz: 28 },
  { number: 62, name: "Al-Jumu'ah", englishName: "Friday Congregation", arabicName: "الجمعة", urduName: "سورۃ الجمعہ", versesCount: 11, revelationPlace: "Madinah", startPage: 553, juz: 28 },
  { number: 63, name: "Al-Munafiqun", englishName: "The Hypocrites", arabicName: "المنافقون", urduName: "سورۃ المنافقون", versesCount: 11, revelationPlace: "Madinah", startPage: 554, juz: 28 },
  { number: 64, name: "At-Taghabun", englishName: "The Mutual Disillusion", arabicName: "التغابن", urduName: "سورۃ التغابن", versesCount: 18, revelationPlace: "Madinah", startPage: 556, juz: 28 },
  { number: 65, name: "At-Talaq", englishName: "The Divorce", arabicName: "الطلاق", urduName: "سورۃ الطلاق", versesCount: 12, revelationPlace: "Madinah", startPage: 558, juz: 28 },
  { number: 66, name: "At-Tahrim", englishName: "The Prohibition", arabicName: "التحريم", urduName: "سورۃ التحریم", versesCount: 12, revelationPlace: "Madinah", startPage: 560, juz: 28 },
  { number: 67, name: "Al-Mulk", englishName: "The Sovereignty", arabicName: "الملك", urduName: "سورۃ الملک", versesCount: 30, revelationPlace: "Makkah", startPage: 562, juz: 29, isHighlighted: true },
  { number: 68, name: "Al-Qalam", englishName: "The Pen", arabicName: "القلم", urduName: "سورۃ القلم", versesCount: 52, revelationPlace: "Makkah", startPage: 564, juz: 29 },
  { number: 69, name: "Al-Haqqah", englishName: "The Inevitable Reality", arabicName: "الحاقة", urduName: "سورۃ الحاقہ", versesCount: 52, revelationPlace: "Makkah", startPage: 566, juz: 29 },
  { number: 70, name: "Al-Ma'arij", englishName: "The Ascending Stairways", arabicName: "المعارج", urduName: "سورۃ المعارج", versesCount: 44, revelationPlace: "Makkah", startPage: 568, juz: 29 },
  { number: 71, name: "Nuh", englishName: "Noah", arabicName: "نوح", urduName: "سورۃ نوح", versesCount: 28, revelationPlace: "Makkah", startPage: 570, juz: 29 },
  { number: 72, name: "Al-Jinn", englishName: "The Jinn", arabicName: "الجن", urduName: "سورۃ الجن", versesCount: 28, revelationPlace: "Makkah", startPage: 572, juz: 29 },
  { number: 73, name: "Al-Muzzammil", englishName: "The Enshrouded One", arabicName: "المزمل", urduName: "سورۃ المزمل", versesCount: 20, revelationPlace: "Makkah", startPage: 574, juz: 29 },
  { number: 74, name: "Al-Muddaththir", englishName: "The Cloaked One", arabicName: "المدثر", urduName: "سورۃ المدثر", versesCount: 56, revelationPlace: "Makkah", startPage: 575, juz: 29 },
  { number: 75, name: "Al-Qiyamah", englishName: "The Resurrection", arabicName: "القيامة", urduName: "سورۃ القیامہ", versesCount: 40, revelationPlace: "Makkah", startPage: 577, juz: 29 },
  { number: 76, name: "Al-Insan", englishName: "Man", arabicName: "الإنسان", urduName: "سورۃ الدہر / الانسان", versesCount: 31, revelationPlace: "Madinah", startPage: 578, juz: 29 },
  { number: 77, name: "Al-Mursalat", englishName: "The Emissaries", arabicName: "المرسلات", urduName: "سورۃ المرسلات", versesCount: 50, revelationPlace: "Makkah", startPage: 580, juz: 29 },
  { number: 78, name: "An-Naba", englishName: "The Tidings", arabicName: "النبأ", urduName: "سورۃ النباء (عمّ)", versesCount: 40, revelationPlace: "Makkah", startPage: 582, juz: 30 },
  { number: 79, name: "An-Nazi'at", englishName: "Those who drag forth", arabicName: "النازعات", urduName: "سورۃ النازعات", versesCount: 46, revelationPlace: "Makkah", startPage: 583, juz: 30 },
  { number: 80, name: "'Abasa", englishName: "He Frowned", arabicName: "عبس", urduName: "سورۃ عبس", versesCount: 42, revelationPlace: "Makkah", startPage: 585, juz: 30 },
  { number: 81, name: "At-Takwir", englishName: "The Overthrowing", arabicName: "التكوير", urduName: "سورۃ التکویر", versesCount: 29, revelationPlace: "Makkah", startPage: 586, juz: 30 },
  { number: 82, name: "Al-Infitar", englishName: "The Cleaving", arabicName: "الانفطار", urduName: "سورۃ الانفطار", versesCount: 19, revelationPlace: "Makkah", startPage: 587, juz: 30 },
  { number: 83, name: "Al-Mutaffifin", englishName: "The Defrauding", arabicName: "المطففين", urduName: "سورۃ المطففین", versesCount: 36, revelationPlace: "Makkah", startPage: 587, juz: 30 },
  { number: 84, name: "Al-Inshiqaq", englishName: "The Splitting Open", arabicName: "الانشقاق", urduName: "سورۃ الانشقاق", versesCount: 25, revelationPlace: "Makkah", startPage: 589, juz: 30 },
  { number: 85, name: "Al-Buruj", englishName: "The Mansions of the Stars", arabicName: "البروج", urduName: "سورۃ البروج", versesCount: 22, revelationPlace: "Makkah", startPage: 590, juz: 30 },
  { number: 86, name: "At-Tariq", englishName: "The Morning Star", arabicName: "الطارق", urduName: "سورۃ الطارق", versesCount: 17, revelationPlace: "Makkah", startPage: 591, juz: 30 },
  { number: 87, name: "Al-A'la", englishName: "The Most High", arabicName: "الأعلى", urduName: "سورۃ الاعلیٰ", versesCount: 19, revelationPlace: "Makkah", startPage: 591, juz: 30 },
  { number: 88, name: "Al-Ghashiyah", englishName: "The Overwhelming Event", arabicName: "الغاشية", urduName: "سورۃ الغاشیہ", versesCount: 26, revelationPlace: "Makkah", startPage: 592, juz: 30 },
  { number: 89, name: "Al-Fajr", englishName: "The Dawn", arabicName: "الفجر", urduName: "سورۃ الفجر", versesCount: 30, revelationPlace: "Makkah", startPage: 593, juz: 30 },
  { number: 90, name: "Al-Balad", englishName: "The City", arabicName: "البلد", urduName: "سورۃ البلد", versesCount: 20, revelationPlace: "Makkah", startPage: 594, juz: 30 },
  { number: 91, name: "Ash-Shams", englishName: "The Sun", arabicName: "الشمس", urduName: "سورۃ الشمس", versesCount: 15, revelationPlace: "Makkah", startPage: 595, juz: 30 },
  { number: 92, name: "Al-Layl", englishName: "The Night", arabicName: "الليل", urduName: "سورۃ اللیل", versesCount: 21, revelationPlace: "Makkah", startPage: 595, juz: 30 },
  { number: 93, name: "Ad-Duha", englishName: "The Morning Hours", arabicName: "الضحى", urduName: "سورۃ الضحیٰ", versesCount: 11, revelationPlace: "Makkah", startPage: 596, juz: 30 },
  { number: 94, name: "Ash-Sharh", englishName: "The Relief", arabicName: "الشرح", urduName: "سورۃ الانشراح", versesCount: 8, revelationPlace: "Makkah", startPage: 596, juz: 30 },
  { number: 95, name: "At-Tin", englishName: "The Fig", arabicName: "التين", urduName: "سورۃ التین", versesCount: 8, revelationPlace: "Makkah", startPage: 597, juz: 30 },
  { number: 96, name: "Al-'Alaq", englishName: "The Clot (First Revelation)", arabicName: "العلق", urduName: "سورۃ العلق", versesCount: 19, revelationPlace: "Makkah", startPage: 597, juz: 30 },
  { number: 97, name: "Al-Qadr", englishName: "The Night of Decree", arabicName: "القدر", urduName: "سورۃ القدر", versesCount: 5, revelationPlace: "Makkah", startPage: 598, juz: 30 },
  { number: 98, name: "Al-Bayyinah", englishName: "The Clear Proof", arabicName: "البينة", urduName: "سورۃ البینہ", versesCount: 8, revelationPlace: "Madinah", startPage: 598, juz: 30 },
  { number: 99, name: "Az-Zalzalah", englishName: "The Earthquake", arabicName: "الزلزلة", urduName: "سورۃ الزلزال", versesCount: 8, revelationPlace: "Madinah", startPage: 599, juz: 30 },
  { number: 100, name: "Al-'Adiyat", englishName: "The Courser", arabicName: "العاديات", urduName: "سورۃ العادیات", versesCount: 11, revelationPlace: "Makkah", startPage: 599, juz: 30 },
  { number: 101, name: "Al-Qari'ah", englishName: "The Calamity", arabicName: "القارعة", urduName: "سورۃ القارعہ", versesCount: 11, revelationPlace: "Makkah", startPage: 600, juz: 30 },
  { number: 102, name: "At-Takathur", englishName: "The Rivalry in World Increase", arabicName: "التكاثر", urduName: "سورۃ التکاثر", versesCount: 8, revelationPlace: "Makkah", startPage: 600, juz: 30 },
  { number: 103, name: "Al-'Asr", englishName: "The Declining Day / Time", arabicName: "العصر", urduName: "سورۃ العصر", versesCount: 3, revelationPlace: "Makkah", startPage: 601, juz: 30 },
  { number: 104, name: "Al-Humazah", englishName: "The Traducer", arabicName: "الهمزة", urduName: "سورۃ الہمزہ", versesCount: 9, revelationPlace: "Makkah", startPage: 601, juz: 30 },
  { number: 105, name: "Al-Fil", englishName: "The Elephant", arabicName: "الفيل", urduName: "سورۃ الفیل", versesCount: 5, revelationPlace: "Makkah", startPage: 601, juz: 30 },
  { number: 106, name: "Quraysh", englishName: "Quraysh", arabicName: "قريش", urduName: "سورۃ قریش", versesCount: 4, revelationPlace: "Makkah", startPage: 602, juz: 30 },
  { number: 107, name: "Al-Ma'un", englishName: "Small Kindnesses", arabicName: "الماعون", urduName: "سورۃ الماعون", versesCount: 7, revelationPlace: "Makkah", startPage: 602, juz: 30 },
  { number: 108, name: "Al-Kawthar", englishName: "The Abundance", arabicName: "الكوثر", urduName: "سورۃ الکوثر", versesCount: 3, revelationPlace: "Makkah", startPage: 602, juz: 30 },
  { number: 109, name: "Al-Kafirun", englishName: "The Disbelievers", arabicName: "الكافرون", urduName: "سورۃ الکافرون", versesCount: 6, revelationPlace: "Makkah", startPage: 603, juz: 30 },
  { number: 110, name: "An-Nasr", englishName: "The Divine Support", arabicName: "النصر", urduName: "سورۃ النصر", versesCount: 3, revelationPlace: "Madinah", startPage: 603, juz: 30 },
  { number: 111, name: "Al-Masad", englishName: "The Palm Fibre", arabicName: "المسد", urduName: "سورۃ المسد / لہب", versesCount: 5, revelationPlace: "Makkah", startPage: 603, juz: 30 },
  { number: 112, name: "Al-Ikhlas", englishName: "The Sincerity (Purity)", arabicName: "الإخلاص", urduName: "سورۃ الاخلاص", versesCount: 4, revelationPlace: "Makkah", startPage: 604, juz: 30 },
  { number: 113, name: "Al-Falaq", englishName: "The Daybreak", arabicName: "الفلق", urduName: "سورۃ الفلق", versesCount: 5, revelationPlace: "Makkah", startPage: 604, juz: 30 },
  { number: 114, name: "An-Nas", englishName: "Mankind", arabicName: "الناس", urduName: "سورۃ الناس", versesCount: 6, revelationPlace: "Makkah", startPage: 604, juz: 30 }
];

// All 30 Juz / Paras Metadata
export const juzData = [
  { juz: 1, nameArabic: "الم", nameEnglish: "Alif-Lam-Meem", startSurah: 1, startPage: 1, endPage: 21 },
  { juz: 2, nameArabic: "سَيَقُولُ", nameEnglish: "Sayaqool", startSurah: 2, startPage: 22, endPage: 41 },
  { juz: 3, nameArabic: "تِلْكَ الرُّسُلُ", nameEnglish: "Tilka 'r-Rusul", startSurah: 2, startPage: 42, endPage: 61 },
  { juz: 4, nameArabic: "لَنْ تَنَالُوا", nameEnglish: "Lan Tanaaloo", startSurah: 3, startPage: 62, endPage: 81 },
  { juz: 5, nameArabic: "وَالْمُحْصَنَاتُ", nameEnglish: "Wal Mohsanat", startSurah: 4, startPage: 82, endPage: 101 },
  { juz: 6, nameArabic: "لَا يُحِبُّ اللَّهُ", nameEnglish: "La Yuhibbullah", startSurah: 4, startPage: 102, endPage: 121 },
  { juz: 7, nameArabic: "وَإِذَا سَمِعُوا", nameEnglish: "Wa Iza Sami'oo", startSurah: 5, startPage: 122, endPage: 141 },
  { juz: 8, nameArabic: "وَلَوْ أَنَّنَا", nameEnglish: "Wa Lau Annana", startSurah: 6, startPage: 142, endPage: 161 },
  { juz: 9, nameArabic: "قَالَ الْمَلَأُ", nameEnglish: "Qalal Mala'o", startSurah: 7, startPage: 162, endPage: 181 },
  { juz: 10, nameArabic: "وَاعْلَمُوا", nameEnglish: "Wa'lamoo", startSurah: 8, startPage: 182, endPage: 201 },
  { juz: 11, nameArabic: "يَعْتَذِرُونَ", nameEnglish: "Ya'taziroon", startSurah: 9, startPage: 202, endPage: 221 },
  { juz: 12, nameArabic: "وَمَا مِنْ دَابَّةٍ", nameEnglish: "Wa Mamin Da'abbah", startSurah: 11, startPage: 222, endPage: 241 },
  { juz: 13, nameArabic: "وَمَا أُبَرِّئُ", nameEnglish: "Wa Ma Obarri'o", startSurah: 12, startPage: 242, endPage: 261 },
  { juz: 14, nameArabic: "رُبَمَا", nameEnglish: "Rubama", startSurah: 15, startPage: 262, endPage: 281 },
  { juz: 15, nameArabic: "سُبْحَانَ الَّذِي", nameEnglish: "Subhan Allazi", startSurah: 17, startPage: 282, endPage: 301 },
  { juz: 16, nameArabic: "قَالَ أَلَمْ", nameEnglish: "Qala Alam", startSurah: 18, startPage: 302, endPage: 321 },
  { juz: 17, nameArabic: "اقْتَرَبَ", nameEnglish: "Iqtaraba", startSurah: 21, startPage: 322, endPage: 341 },
  { juz: 18, nameArabic: "قَدْ أَفْلَحَ", nameEnglish: "Qadd Aflaha", startSurah: 23, startPage: 342, endPage: 361 },
  { juz: 19, nameArabic: "وَقَالَ الَّذِينَ", nameEnglish: "Wa Qalallazina", startSurah: 25, startPage: 362, endPage: 381 },
  { juz: 20, nameArabic: "أَمَّنْ خَلَقَ", nameEnglish: "Amman Khalaq", startSurah: 27, startPage: 382, endPage: 401 },
  { juz: 21, nameArabic: "اتْلُ مَا أُوحِيَ", nameEnglish: "Utlu Ma Oohiya", startSurah: 29, startPage: 402, endPage: 421 },
  { juz: 22, nameArabic: "وَمَنْ يَقْنُتْ", nameEnglish: "Wa Manyaqnut", startSurah: 33, startPage: 422, endPage: 441 },
  { juz: 23, nameArabic: "وَمَا لِيَ", nameEnglish: "Wa Maliya", startSurah: 36, startPage: 442, endPage: 461 },
  { juz: 24, nameArabic: "فَمَنْ أَظْلَمُ", nameEnglish: "Faman Azlam", startSurah: 39, startPage: 462, endPage: 481 },
  { juz: 25, nameArabic: "إِلَيْهِ يُرَدُّ", nameEnglish: "Ilayhi Yuraddu", startSurah: 41, startPage: 482, endPage: 501 },
  { juz: 26, nameArabic: "حم", nameEnglish: "Ha'a Meem", startSurah: 46, startPage: 502, endPage: 521 },
  { juz: 27, nameArabic: "قَالَ فَمَا خَطْبُكُمْ", nameEnglish: "Qala Fama Khatbukum", startSurah: 51, startPage: 522, endPage: 541 },
  { juz: 28, nameArabic: "قَدْ سَمِعَ اللَّهُ", nameEnglish: "Qad Sami'allah", startSurah: 58, startPage: 542, endPage: 561 },
  { juz: 29, nameArabic: "تَبَارَكَ الَّذِي", nameEnglish: "Tabarakallazi", startSurah: 67, startPage: 562, endPage: 581 },
  { juz: 30, nameArabic: "عَمَّ يَتَسَاءَلُونَ", nameEnglish: "'Amma Yatasa'aloon", startSurah: 78, startPage: 582, endPage: 604 }
];

// Curated The World's Best Quran PDF Editions for Web
export const quranPdfEditions = [
  {
    id: 'madinah-15line-hd',
    title: 'King Fahd Complex Madinah Mushaf (Official 15-Line HD)',
    arabicTitle: 'مصحف المدينة النبوية - مجمع الملك فهد (عالي الدقة)',
    category: 'madani',
    script: 'Uthmani (15 Lines)',
    publisher: 'King Fahd Glorious Quran Printing Complex, Madinah Munawwarah',
    pages: '604 Pages',
    size: '148 MB (Vector HD)',
    badge: 'Official Gold Standard',
    isRecommended: true,
    description: 'The world standard authentic Madinah Mushaf scanned in ultra-crisp vector HD format. Every page ends precisely on an Ayah (Ayah-end format), widely used in Makkah, Madinah, and global institutions.',
    features: ['Crisp Vector Typography', '15 Lines Per Page', 'Standard 604 Pages layout', 'Hafṩ ʿan ʿĀṣim recitation'],
    downloadUrl: 'https://archive.org/download/quran-madina-hd-pdf/Quran_Madinah_15_Line_HD.pdf',
    directViewUrl: 'https://archive.org/details/quran-madina-hd-pdf'
  },
  {
    id: 'tajweed-color-coded',
    title: 'Color-Coded Tajweed Quran (Dar Al-Ma\'rifah Original)',
    arabicTitle: 'مصحف التجويد الملون - دار المعرفة (دمشق/بيروت)',
    category: 'tajweed',
    script: 'Uthmani with Tajweed Rules',
    publisher: 'Dar Al-Ma\'rifah (Damascus & Beirut)',
    pages: '604 Pages + Tajweed Rules Index',
    size: '112 MB (Full Color HD)',
    badge: 'Best for Learning Tajweed',
    isRecommended: true,
    description: 'The original internationally recognized Color-Coded Tajweed Quran. Distinct color schemes for Ghunnah, Idgham, Ikhfa, Qalqalah, and Madd, with a rule explanation guide on the footer margins of every page.',
    features: ['7 Distinct Color-Coded Tajweed Rules', 'Margin rule definitions', 'Standard 15 Lines Uthmani format', 'Ideal for students and teachers'],
    downloadUrl: 'https://archive.org/download/Quran-Tajweed-Dar-Al-Maarifa/Quran-Tajweed-Dar-Al-Maarifa.pdf',
    directViewUrl: 'https://archive.org/details/Quran-Tajweed-Dar-Al-Maarifa'
  },
  {
    id: 'indopak-16line-hifz',
    title: 'Indo-Pak 16-Line Hifz Quran (South Asian Script HD)',
    arabicTitle: 'القرآن الكريم بخط النسخ الأردو/الباكستاني (16 سطر للحفظ)',
    category: 'indopak',
    script: 'Indo-Pak / South Asian Nastaliq (16 Lines)',
    publisher: 'Taj Company / Qudratullah Standard Edition',
    pages: '548 Pages',
    size: '86 MB (Clean Scan HD)',
    badge: 'Madrassah Hifz Standard',
    isRecommended: true,
    description: 'The preferred 16-line Quran format widely used across Pakistan, India, Bangladesh, and worldwide Hifz madrassas. Features bold, distinct characters optimized for rapid memorization and revision.',
    features: ['16 Lines per page format', 'High contrast bold Nastaliq', 'Accurate Waqf/stopping signs', 'Widely used for Hifz-ul-Quran'],
    downloadUrl: 'https://archive.org/download/quran-16-line-indopak-hd/quran_16_line_indopak.pdf',
    directViewUrl: 'https://archive.org/details/quran-16-line-indopak-hd'
  },
  {
    id: 'indopak-15line-bold',
    title: 'Indo-Pak 15-Line Bold Script Quran (Easy Reading)',
    arabicTitle: 'مصحف 15 سطر بالرسم الباكستاني والخط الكبير الواضح',
    category: 'indopak',
    script: 'Indo-Pak Bold Nastaliq (15 Lines)',
    publisher: 'South Asian Classical Calligraphy',
    pages: '611 Pages',
    size: '94 MB',
    badge: 'Easiest for Beginners & Elders',
    isRecommended: false,
    description: 'Designed with extra-large Arabic font size and generous spacing between lines, making it effortless to recite for children, beginners, and elderly readers without eye strain.',
    features: ['Large Bold Characters', '15 Lines format', 'Clear Harkat / vowels', 'Zero clutter layout'],
    downloadUrl: 'https://archive.org/download/15-line-quran-hd/15-line-quran-hd.pdf',
    directViewUrl: 'https://archive.org/details/15-line-quran-hd'
  },
  {
    id: 'indopak-13line-classic',
    title: 'Classic 13-Line Indo-Pak Traditional Quran',
    arabicTitle: 'القرآن الكريم 13 سطر الخط الكلاسيكي',
    category: 'indopak',
    script: '13-Line Traditional Bold Font',
    publisher: 'Subcontinent Heritage Press',
    pages: '848 Pages',
    size: '105 MB',
    badge: 'Traditional Classic',
    isRecommended: false,
    description: 'The historical 13-line layout with maximum interlinear space and prominent diacritical marks. A timeless companion in South Asian households for generations.',
    features: ['13 Lines per page', 'Maximum character size', 'Traditional Manzil & Ruku markings', 'Gentle on eyes'],
    downloadUrl: 'https://archive.org/download/13LineQuranPakHD/13LineQuranPakHD.pdf',
    directViewUrl: 'https://archive.org/details/13LineQuranPakHD'
  },
  {
    id: 'quran-english-saheeh',
    title: 'The Holy Quran with Saheeh International English Translation',
    arabicTitle: 'القرآن الكريم مع الترجمة الإنجليزية الصحيحة',
    category: 'translation',
    script: 'Arabic Text with English Meaning',
    publisher: 'Al-Muntada Al-Islami / Saheeh International',
    pages: '720 Pages',
    size: '64 MB',
    badge: 'Most Authentic English Translation',
    isRecommended: true,
    description: 'Side-by-side Arabic script with the renowned Saheeh International translation in clear, contemporary English. Highly accurate and aligned with mainstream Sunni scholarship.',
    features: ['Parallel Arabic and English', 'Explanatory footnotes', 'Surah background introductions', 'Comprehensive glossary'],
    downloadUrl: 'https://archive.org/download/the-quran-saheeh-international/the-quran-saheeh-international.pdf',
    directViewUrl: 'https://archive.org/details/the-quran-saheeh-international'
  },
  {
    id: 'quran-urdu-translation',
    title: 'Holy Quran with Urdu Translation & Word-by-Word Meaning',
    arabicTitle: 'قرآن مجید مع اردو ترجمہ و لفظی مفہوم',
    category: 'translation',
    script: 'Arabic with Urdu Translation (Jalandhari / Tahir-ul-Qadri)',
    publisher: 'Islamic Educational Publications',
    pages: '768 Pages',
    size: '98 MB',
    badge: 'Popular Urdu Edition',
    isRecommended: true,
    description: 'Complete Quran text paired with lucid Urdu translation, allowing Urdu speakers to reflect and understand the divine message during daily recitation.',
    features: ['Fluent Urdu Translation', 'Ayah-by-Ayah layout', 'Ruku summaries', 'Clear Naskh & Nastaliq typography'],
    downloadUrl: 'https://archive.org/download/QuranUrduTranslationHD/QuranUrduTranslationHD.pdf',
    directViewUrl: 'https://archive.org/details/QuranUrduTranslationHD'
  }
];

// 30 Individual Juz / Para PDF Downloads
export const paraPdfs = juzData.map(j => ({
  juzNumber: j.juz,
  nameArabic: j.nameArabic,
  nameEnglish: j.nameEnglish,
  pages: `${j.startPage} - ${j.endPage}`,
  downloadUrl: `https://archive.org/download/30-para-quran-pdf-hd/Para_${String(j.juz).padStart(2, '0')}.pdf`
}));

// Hadiths about the Virtues of Quran Recitation
export const quranVirtues = [
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    english: "The best among you are those who learn the Quran and teach it to others.",
    urdu: "تم میں سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    source: "Sahih al-Bukhari 5027"
  },
  {
    arabic: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
    english: "Read the Quran, for it will come as an intercessor for its reciters on the Day of Resurrection.",
    urdu: "قرآن مجید کی تلاوت کیا کرو، کیونکہ قیامت کے دن یہ اپنے پڑھنے والوں کی شفاعت کرے گا۔",
    source: "Sahih Muslim 804"
  },
  {
    arabic: "الَّذِي يَقْرَأُ الْقُرْآنَ وَهُوَ مَاهِرٌ بِهِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ",
    english: "The one who is proficient in reciting the Quran will be with the noble and obedient angel scribes.",
    urdu: "جو شخص قرآن پڑھنے میں ماہر ہو وہ معزز اور نیک فرشتوں کے ساتھ ہوگا۔",
    source: "Sahih al-Bukhari & Muslim"
  }
];
