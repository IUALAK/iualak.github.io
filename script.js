// variables and jsons
var language = localStorage.getItem("language");

var enJson = {
  "nav": {
    "about" : "About Me", 
    "education" : "Education",
    "skills" : "Skills",
    "experience" : "Work Experience",
  },
  "section": {
    "aboutSection": "<h2>About me</h2><p> I am currently in the second year of my BSc in Computer Science at the University of Strasbourg. My interest is focused on the fields of bioinformatics, <strong>data science and operating system development</strong>. I already have a little experience as a bioinformatician, which convinced me that I am moving in the right direction and made me more adaptable to different environments </p>",
    "educationSection": "<h2>Education</h2><li><dt>School 27</dt><dd>Petrozavodsk / 2008-2019<br>Vocational in chimestry and biology<br>Competences aqcuired: basic informatics, biology</dd><dt>University of Strasbourg</dt><dd>Strasbourg / 2019-2022<br>BSc in Molecular and Cellular Biology<br>Competences acquired: Python, MS Office, Linux, centrifugation, chromotography, electrophoresis</dd><dt>University of Strasbourg</dt><dd>Strasbourg / 2023-now (winter semester)<br>BSc in Informatics<br>Competences acquired: Python, C, Algorithmics, Javascript, HTML, CSS, linear algebra, Linux</dd></li>",
    "skillsSection": "<h2>Skills</h2><li>  <dt>Informatics:</dt>  <dd>Python, Javascript, HTML, CSS, Haskell, C</dd>  <dt>Bioinformatics:</dt>  <dd>Biopython, EBI and NCBI services, PDB</dd>  <dt>Data Science:</dt>  <dd>Linear Algebra, Statistics, R, Pandas</dd>  <dt>Languages:</dt>  <dd>English (C1), French(B2+), German(B2), Russian(Native)</dd>  <dt>Others:</dt>  <dd>OnlyOffice, Google Office</dd></li>",
    "experienceSection": "<h2>My work experience</h2><li>  <dt>Internship in Bioinformatics and Molecular Biology</dt>  <dd>CNRS / September-December 2021<br> Mostly oriented towards bioinformatics, this internship permitted me to improve my knowledge of Python and different services used in bioinformatics</dd>  <dt>Internship in Bioinformatics</dt>  <dd>CNRS / September-December 2022<br> I worked in the same group as the previous time, using and improving the same competences and additionally gaining structural biology knowledge</dd>  <dt>Django Developer</dt>  <dd>Consilio / June-July 2022<br>My first experience in web. We developed a site for a small startup using Django as back-end</dd></li>",
  }
  
}

var frJson = {
  "nav" : {
    "about" : "À propos de moi",
    "education" : "Formation",
    "skills" : "Savoire-Faire",
    "experience" : "Expérience de travail",
  },
  "section" : {
    "aboutSection": "<h2>À propos de moi</h2><p>Je suis actuellement en deuxième année de licence en informatique à l'Université de Strasbourg. Mon intérêt se porte sur les domaines de la bio-informatique, de la science des données et du développement de systèmes d'exploitation. J'ai déjà une petite expérience en tant que bioinformaticien, ce qui m'a convaincu que j'allais dans la bonne direction et m'a permis de mieux m'adapter à différents environnements</p>", 
    "educationSection" : "<h2>Education</h2><li><dt>School 27</dt><dd>Petrozavodsk / 2008-2019<br>Vocational in chimestry and biology<br>Competences aqcuired: basic informatics, biology</dd><dt>University of Strasbourg</dt><dd>Strasbourg / 2019-2022<br>BSc in Molecular and Cellular Biology<br>Competences acquired: Python, MS Office, Linux, centrifugation, chromotography, electrophoresis</dd><dt>University of Strasbourg</dt><dd>Strasbourg / 2023-now (winter semester)<br>BSc in Informatics<br>Competences acquired: Python, C, Algorithmics, Javascript, HTML, CSS, linear algebra, Linux</dd></li>",
    "skillsSection": "<h2>Compétences</h2><li>   <dt>Informatique :</dt>   <dd>Python, Javascript, HTML, CSS, Haskell, C</dd>   <dt>Bioinformatique :</dt>   <dd>Services Biopython, EBI et NCBI, PDB</dd>   <dt>Science des données :</dt>   <dd>Algèbre linéaire, statistiques, R, Pandas</dd>   <dt>Langues :</dt>   <dd>Anglais (C1), français (B2+), allemand (B2), russe (natif)</dd>   <dt>Autres :</dt>   <dd>OnlyOffice, Google Office</dd></li>",
    "experienceSection": "<h2>Mon expérience professionnelle</h2><li>   <dt>Stage en bioinformatique et biologie moléculaire</dt>   <dd>CNRS / Septembre-Décembre 2021<br> Majoritairement orienté vers la bioinformatique, ce stage m'a permis d'améliorer mes connaissances sur Python et les différents services utilisés en bioinformatique</dd>   <dt>Stage en bioinformatique</dt>   <dd>CNRS / Septembre-décembre 2022<br> J'ai travaillé dans le même groupe que la fois précédente, utilisant et améliorant les mêmes compétences et acquérant en plus des connaissances en biologie structurale</dd>   <dt>Développeur Django</dt>   <dd>Consilio / Juin-Juillet 2022<br>Ma première expérience dans le web. Nous avons développé un site pour une petite startup utilisant Django comme back-end</dd></li>",
  }
}

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
  default:
    setLanguage(enJson)
    break;
}
