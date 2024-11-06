// Purpose: To implement internationalization (i18n) in the web application

// language data
const languageData = {
  en: {
    "about_us": "About Us",
    "join_us": "Join Us",
    "contacts": "Contacts",
    "events": "News & Events",
    "people": "People",
    "people_description": "Management and Coaching Staff",
    "mission": "Mission",
    "mission_description": "Our core values",
    "code_of_ethics": "Code of Ethics",
    "code_of_ethics_description": "Our code of ethics",
    "join_us_p1": "Ready to be part of our rugby family?",
    "join_us_p2": "Whether you're an experienced player or new to the sport, we welcome all who share our passion. Join our training sessions and discover the thrill of rugby in a supportive environment.",
    "join_us_p3": "Contact us to learn more about our club and how you can get involved. We look forward to hearing from you!"
  },
  it: {
    "about_us": "Chi siamo",
    "join_us": "Unisciti a noi",
    "contacts": "Contatti",
    "events": "Eventi",
    "people": "Persone",
    "people_description": "Dirigenti e Staff Tecnico",
    "mission": "Mission",
    "mission_description": "I nostri valori fondamentali",
    "code_of_ethics": "Codice etico",
    "code_of_ethics_description": "Il nostro codice etico",
    "join_us_p1": "Pronto a far parte della nostra famiglia?",
    "join_us_p2": "Che tu sia un giocatore esperto o nuovo nel mondo dello sport, accogliamo tutti coloro che condividono la nostra passione. Unisciti alle nostre sessioni di allenamento e scopri l'emozione del rugby in un ambiente accogliente.",
    "join_us_p3": "Contattaci per saperne di più sul nostro club e su come puoi partecipare. Non vediamo l'ora di sentirti!"
  }
};

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to update content based on selected language
function updateContent(lang) {
  console.log("Updating content for language:", lang);
  const langData = languageData[lang];
  const elements = document.querySelectorAll("[data-i18n]");
  console.log("Elements to update:", elements);
  for (const element of elements) {
    const key = element.getAttribute("data-i18n");
    if (langData && langData[key]) {
      element.textContent = langData[key];
    }
  }
}

// Function to change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);
  updateContent(lang);
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "it";
  updateContent(userPreferredLanguage);
});