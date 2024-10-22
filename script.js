// variables and jsons
var language = localStorage.getItem("language");

var enJson = {
  nav: {
    about: "About Me",
    education: "Education",
    skills: "Skills",
    experience: "Work Experience",
  },
  section: {
    aboutSection:
      "<h2>About Me</h2> <p>Currently, I am a first-year master's student in the field of applied informatics at the Moscow International Academy. I am interested in areas such as bioinformatics, data science, and operating system development. I already have some experience working as a bioinformatician/analyst, which convinced me that I am moving in the right direction and allowed me to better adapt to various conditions.</p> ",
    educationSection:
      '<h2>Education</h2><li><dt>School No. 27</dt><dd>Petrozavodsk / 2008-2019<br>Chemical-Biological Profile<br>Acquired Competencies: basic informatics, biology</dd><dt>University of Strasbourg</dt><dd>Strasbourg (France) / 2019-2022<br>Bachelor\'s in "Molecular and Cellular Biology"<br>Acquired Competencies: Python, MS Office, Linux, basic statistics, centrifugation, chromatography, electrophoresis</dd><br><dd>Strasbourg (France) / 2023-2024<br>Additional education in informatics<br>Acquired Competencies: Python, C, algorithms, Javascript, HTML, CSS, linear algebra, Linux</dd></li>',
    skillsSection:
      "<h2>Skills</h2><li><dt>Informatics:</dt><dd>Python, HTML, CSS, Haskell, C/C++</dd><dt>Bioinformatics:</dt><dd>biopython, EBI and NCBI services, PDB</dd><dt>Data Science:</dt><dd>linear algebra, statistics, R, pandas</dd><dt>Languages:</dt><dd>English (C1), French (B2+), German (B2), Russian (native)</dd><dt>Others:</dt><dd>OnlyOffice, Google Office</dd></li>",
    experienceSection:
      "<h2>Work Experience</h2><li><dt>Bioinformatics Internship</dt><dd>CNRS / September-December 2021<br>Mainly focused in the field of bioinformatics, this internship helped me improve my understanding of Python and bioinformatics</dd><dt>Bioinformatics Internship</dt><dd>CNRS / September-December 2022<br>Essentially a continuation of the previous internship, it allowed me to further deepen my skills and knowledge of protein biology</dd><dt>Django Developer</dt><dd>Consilio / June-July 2022<br>My first experience in web development. We developed the backend for a small startup</dd></li>",
  },
};

var frJson = {
  nav: {
    about: "À propos de moi",
    education: "Formation",
    skills: "Compétences",
    experience: "Expérience de travail",
  },
  section: {
    aboutSection:
      "<h2>À propos de moi</h2> <p>Actuellement, je suis étudiant en première année de master en informatique appliquée à l'Académie Internationale de Moscou. Je m'intéresse à des domaines tels que la bioinformatique, la science des données et le développement de systèmes d'exploitation. J'ai déjà une petite expérience en tant que bioinformaticien/analyste, ce qui m'a convaincu que je suis sur la bonne voie et m'a permis de mieux m'adapter à diverses conditions.</p> ",
    educationSection:
      "<h2>Formation</h2><li><dt>École n° 27</dt><dd>Petrozavodsk / 2008-2019<br>Profil Chimie-Biologie<br>Compétences acquises : informatique de base, biologie</dd><dt>Université de Strasbourg</dt><dd>Strasbourg (France) / 2019-2022<br>Licence en biologie moléculaire et cellulaire<br>Compétences acquises : Python, MS Office, Linux, statistiques de base, centrifugation, chromatographie, électrophorèse</dd><br><dd>Strasbourg (France) / 2023-2024<br>Formation complémentaire en informatique<br>Compétences acquises : Python, C, algorithmique, Javascript, HTML, CSS, algèbre linéaire, Linux</dd></li>",
    skillsSection:
      "<h2>Compétences</h2><li><dt>Informatique :</dt><dd>Python, HTML, CSS, Haskell, C/C++</dd><dt>Bioinformatique :</dt><dd>biopython, services EBI et NCBI, PDB</dd><dt>Science des données :</dt><dd>algèbre linéaire, statistiques, R, pandas</dd><dt>Langues :</dt><dd>Anglais (C1), Français (B2+), Allemand (B2), Russe (natif)</dd><dt>Autres :</dt><dd>OnlyOffice, Google Office</dd></li>",
    experienceSection:
      "<h2>Expérience professionnelle</h2><li><dt>Stage en bioinformatique</dt><dd>CNRS / Septembre-Décembre 2021<br>Principalement axé sur le domaine de la bioinformatique, ce stage m'a aidé à améliorer ma compréhension de Python et de la bioinformatique.</dd><dt>Stage en bioinformatique</dt><dd>CNRS / Septembre-Décembre 2022<br>Essentiellement une continuation du stage précédent, il m'a permis d'approfondir davantage mes compétences et connaissances en biologie des protéines.</dd><dt>Développeur Django</dt><dd>Consilio / Juin-Juillet 2022<br>Ma première expérience en développement web. Nous avons développé le backend pour une petite startup.</dd></li>",
  },
};

var ruJson = {
  nav: {
    about: "Обо мне",
    education: "Образование",
    skills: "Компетенции",
    experience: "Опыт работы",
  },
  section: {
    aboutSection:
      '<h2>Обо мне</h2><p>В настоящее время я учусь на первом курсе магистратуры по направлению "Прикладная информатика" в Московской Международной Академии. Меня интересуют такие области, как биоинформатика, наука о данных и разработка операционных систем. У меня уже есть небольшой опыт работы биоинформатиком/аналитиком, который убедил меня в том, что я двигаюсь в правильном направлении, и позволил мне лучше адаптироваться к различным условиям</p>',
    educationSection:
      '<h2>Образование</h2><li><dt>Школа № 27</dt><dd>Петрозаводск / 2008-2019<br>Химико-Биологический профиль<br>Полученные компетенции : базовая информатика, биология</dd ><dt>Страсбургский Университет</dt><dd>Страсбург (Франция) / 2019-2022<br>Бакалавр по направлению "Молекулярная и клеточная биология"<br>Полученные компетенции: Python, MS Office, Linux, базовая статистика ,центрифугирование, хроматография, электрофорез</dd> <br><dd>Страсбург (Франция) / 2023-2024<br>Дополнительное образование по информатике<br>Полученные Компетенции : Python, C, алгоритмика, Javascript, HTML, CSS, линейная алгебра, Linux</dd></li>',
    skillsSection:
      "<h2>Компетенции</h2><li>   <dt>Информатика :</dt>   <dd>Python, HTML, CSS, Haskell, C/C++</dd>   <dt>Биоинформатика :</dt>   <dd>biopython, EBI et NCBI сервисы, PDB</dd>   <dt>Наука о данных :</dt>   <dd>линейная алгебра, статистика, R, pandas</dd>   <dt>Языки :</dt>   <dd>английский (C1), французский (B2+), немецкий (B2), русский (родной)</dd>   <dt>Другие :</dt>   <dd>OnlyOffice, Google Office</dd></li>",
    experienceSection:
      "<h2>Опыт работы</h2><li>   <dt>Стажировка по биоинформатике</dt>   <dd>CNRS / Сентябрь-Декабрь 2021<br>В основном сосредоточенная в области биоинформатики, эта стажировка помогла мне улучшить моё понимание Python и биоинформатики</dd>   <dt>Стажировка по биоинформатике</dt>   <dd>CNRS / Сентябрь-Декабрь 2022<br> По сути, продолжение предидущей стажировки, позволило мне дальше углубить свои навыки, а также знания о биологии белков</dd>   <dt>Django разработчик</dt>   <dd>Consilio / Июнь-Июль 2022<br>Мой первый опыт в веб. Мы разрабатывали бэкенд для небольшого стартапа</dd></li>",
  },
};

// functions
function setLanguage(langJson) {
  navLinks = document.querySelector("nav").children;
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].innerText = langJson.nav[navLinks[i].id];
  }
  sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].innerHTML = langJson.section[sections[i].id];
  }
}

switch (language) {
  case "EN":
    setLanguage(enJson);
    break;
  case "FR":
    setLanguage(frJson);
    break;
  case "RU":
    setLanguage(ruJson);
  default:
    setLanguage(enJson);
    break;
}
