const texts = {
    hu: {
        title: "Bc. Kovács Márk",
        about: "Kezdő szoftverfejlesztő vagyok, aki a programozás több területén is szeretne fejlődni. Jelenleg a webfejlesztés mellett foglalkozom Python, JavaScript és C# alapokkal. Célom, hogy átfogó tudást szerezzek különböző programozási nyelvekben és technológiákban. Szeretem a problémamegoldást és motivál, hogy jól strukturált kódot írjak. Szabadidőmben gyakorlok és projekteket készítek.",
        eduTitle: "Végzettségeim",
        edu: [
            "Magyar Tanítási Nyelvű Alapiskola – Deáki (2006 – 2015)",
            "Jedlik Ányos Elektrotechnikai Szakközépiskola – Érsekújvár (2015 – 2019)",
            "Selye János Egyetem – Alkalmazott informatika (Bc.) – Komárom (2021 – 2024)",
            "Selye János Egyetem – Alkalmazott informatika (Mgr.) – Komárom (2024 – 2026)"
        ],
        projectTitle: "Projektjeim",
        contactTitle: "Elérhetőségeim",
        footer: "Email: kovacs.mark963@gmail.com"
    },

    sk: {
        title: "Bc. Márk Kovács",
        about: "Som začínajúci softvérový vývojár, ktorý sa chce rozvíjať v rôznych oblastiach programovania. Momentálne sa venujem webovému vývoju a učím sa Python, JavaScript a C#. Mojím cieľom je získať široké znalosti v rôznych programovacích jazykoch a technológiách. Rád riešim problémy a motivuje ma písať kvalitný kód. Vo voľnom čase programujem a tvorím projekty.",
        eduTitle: "Moje vzdelanie",
        edu: [
            "Základná škola s vyučovacím jazykom maďarským – Diakovce (2006 – 2015)",
            "Stredná odborná škola elektrotechnická Jedlika Ányosa – Nové Zámky (2015 – 2019)",
            "Univerzita J. Selyeho – Aplikovaná informatika (Bc.) – Komárno (2021 – 2024)",
            "Univerzita J. Selyeho – Aplikovaná informatika (Mgr.) – Komárno (2024 – 2026)"
        ],
        projectTitle: "Moje projekty",
        contactTitle: "Moje kontakty",
        footer: "Email: kovacs.mark963@gmail.com"
    },

    en: {
        title: "Bc. Márk Kovács",
        about: "I am a beginner software developer who wants to grow in multiple areas of programming. I am currently learning Python, JavaScript, and C#. My goal is to gain broad knowledge in different programming languages and technologies. I enjoy problem-solving and writing well-structured code. In my free time, I practice and build projects.",
        eduTitle: "My education",
        edu: [
            "Primary School With Hungarian Language – Diakovce (2006 – 2015)",
            "Jedlik Ányos Technical Secondary School – Nové Zámky (2015 – 2019)",
            "Selye János University – Applied Informatics (Bc.) – Komárno (2021 – 2024)",
            "Selye János University – Applied Informatics (Mgr.) – Komárno (2024 – 2026)"
        ],
        projectTitle: "My projects",
        contactTitle: "My contacts",
        footer: "Email: kovacs.mark963@gmail.com"
    }
};

function setLang(lang) {
    document.getElementById("title").innerText = texts[lang].title;
    document.getElementById("about").innerText = texts[lang].about;
    document.getElementById("eduTitle").innerText = texts[lang].eduTitle;
    document.getElementById("edu").innerHTML = texts[lang].edu.map(item => `<li>${item}</li>`).join("");
    document.getElementById("projectTitle").innerText = texts[lang].projectTitle;
    document.getElementById("contactTitle").innerText = texts[lang].contactTitle;
    document.getElementById("email").innerText = "kovacs.mark963@gmail.com";
}
