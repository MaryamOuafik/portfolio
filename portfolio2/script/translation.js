const translation = {
    en: {
       home: 'Home',
       about: 'About',
       skills : 'Skills',
       resume: 'Resume',
       contact: 'Contact',
       hello: "Hello, I'm",
       SoftwareEngineer: "Software Engineer",
       en: 'English',
       fr: 'French',
       ar: 'Arabic',
       
      aboutMe :  "I have studied <span>computer science</span> at the National School of Applied Science of Al Hociema (Morocco), and specialized in <span>software engineering</span>. I'm interested in both back-end and front-end developement. I'm currently looking for an <span>end of study internship</span>",
      download : "Download my resume",
      contact_me : "Contact Me !",
      name : "Name",
      subject : "Subject",
      email : "Email",
      letter : "Your letter",
      send : "Send"
      
      },
    fr: {
       home: 'Acceuil',

       about: 'A propos',
       skills : 'Compétences',
       resume: 'CV',
       contact: 'Contact',
       hello: "Salut, je suis",
       SoftwareEngineer: "Ingénieure Logiciel",
       en: 'Anglais',
       fr: 'Français',
       ar: 'Arabe',
       aboutMe : "Etudiante en <span>génie informatique</span> à l'Ecole Nationale des Sciences Appliquées d'Al Hoceima, spécialisée en <span>génie logiciel</span>, je suis actuellement à la recherche d'un <span>stage PFE.</span>",
       download : "Télechargez mon CV",
      contact_me : "Contactez Moi !",
      name : "Nom",
      subject : "Objet",
      email : "Email",
      letter : "Votre message",
      send : "Envoyer"

       
    },
    ar: {
       home: 'الرئيسية',
       about: 'حول',
       skills : 'مهارات',
       resume: 'السيرة الذاتية',
       contact: ' تواصل معي',
       hello: "مرحبا, أنا",
       SoftwareEngineer: "مهندسة برمجيات",
       en: 'الإنجليزية',
       fr: 'الفرنسية',
       ar: 'العربية',
       aboutMe : "درست الهندسة المعلوماتية بالمدرسة الوطنية للعلوم التطبيقية بالحسيمة, وتخصصت في هندسة البرمجيات. حاليا أبحث عن تدريب لمشروع تخرجي.",
       download : "حمل سيرتي الذاتية",
       contact_me : "تواصل معي !",
       name : "الاسم",
       subject : "الموضوع",
       email : "البريد الإلكتروني",
       letter : "اكتب رسالتك هنا",
       send : "أرسل"
      }
 }

 const setLanguage = (language) => {
   const elements = document.querySelectorAll("[data-i18n]");
   elements.forEach((elem) => {
    console.log(elem.nodeName)

   const transKey = elem.getAttribute("data-i18n");
   elem.innerHTML = translation[language][transKey];
   if(elem.nodeName === "INPUT"){
    elem.placeholder = translation[language][transKey];
    elem.value  = translation[language][transKey];
   }
   });
   if(language === 'ar'){
       document.getElementById('nav').dir = 'rtl'
       document.getElementById('text').dir = 'rtl'
   }
   else{
       document.getElementById('nav').dir = 'ltr'
       document.getElementById('text').dir = 'ltr'
   }
}
 
 const languageSelector = document.querySelector('select');
 languageSelector.addEventListener("change", (event) =>{
   console.log(event.target.value);
    setLanguage(event.target.value)
   // localStorage.setItem('lang', event.target.value)
   document.cookie = event.target.value
   
 });
 document.addEventListener('DOMContentLoaded', () => {
   setLanguage(document.cookie);
});




